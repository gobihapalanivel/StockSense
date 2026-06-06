import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Sidebar from "../Shared/Sidebar";
import InventoryHeader from '../Shared/InventoryHeader';

import { initialSuppliers, Supplier } from './constants/supplierConstants';
import SupplierList from './components/SupplierList';
import SupplierProfile from './components/SupplierProfile';
import SupplierFormModal from './components/SupplierFormModal';

export default function ProcurementManagement() {
  const [searchParams, setSearchParams] = useSearchParams();

  // Active Datasets State
  const [suppliersList, setSuppliersList] = useState<Supplier[]>(initialSuppliers);

  // Supplier Profile Page State
  const [activeProfileSupplier, setActiveProfileSupplier] = useState<Supplier | null>(null);

  // General Filter State
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  // Modals & Selected details State
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedSupplier, setSelectedSupplier] = useState<Supplier | null>(null);

  // Forms Field States for Supplier Add/Edit
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    phone: '',
    email: '',
    companyName: '',
    brn: '',
    taxNumber: '',
    street: '',
    city: '',
    province: '',
    categories: '',
    deliveryDays: [] as string[],
    paymentTerms: 'Net 30',
    status: 'Active' as 'Active' | 'Inactive',
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    contact: '',
    phone: '',
    email: '',
    companyName: '',
    brn: '',
    taxNumber: '',
    street: '',
    city: '',
    province: '',
    categories: '',
  });

  // Filtered Suppliers List
  const filteredSuppliers = useMemo(() => {
    return suppliersList.filter(s => {
      const matchesSearch =
        s.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        s.contact.toLowerCase().includes(searchTerm.toLowerCase()) ||
        s.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        s.companyName.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus = statusFilter === 'All' || s.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [suppliersList, searchTerm, statusFilter]);

  // Supplier Profile calculations
  const supplierProfileData = useMemo(() => {
    if (!activeProfileSupplier) return null;

    // Purchase Frequency mapping
    let frequency = 'Monthly';
    if (activeProfileSupplier.deliveryDays.length >= 3) {
      frequency = 'Bi-weekly';
    } else if (activeProfileSupplier.deliveryDays.length >= 1) {
      frequency = 'Weekly';
    }

    return {
      purchasesCount: activeProfileSupplier.totalPurchases,
      totalPurchaseValueFormatted: activeProfileSupplier.totalValue,
      lastPurchase: activeProfileSupplier.lastPurchaseDate,
      averageOrderValueFormatted: 'N/A',
      frequency,
    };
  }, [activeProfileSupplier]);

  // Handle Input Changes for Suppliers
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleDeliveryDayChange = (day: string) => {
    setFormData(prev => {
      const isSelected = prev.deliveryDays.includes(day);
      const updatedDays = isSelected
        ? prev.deliveryDays.filter(d => d !== day)
        : [...prev.deliveryDays, day];
      return { ...prev, deliveryDays: updatedDays };
    });
  };

  // Validation Form for Suppliers
  const validateForm = (ignoreId?: string | null) => {
    let isValid = true;
    const errors = {
      name: '', contact: '', phone: '', email: '', companyName: '', brn: '', taxNumber: '', street: '', city: '', province: '', categories: '',
    };

    if (!formData.name.trim()) {
      errors.name = 'Supplier name is required';
      isValid = false;
    } else {
      const isDuplicate = suppliersList.some(s =>
        s.name.toLowerCase() === formData.name.trim().toLowerCase() &&
        s.id !== ignoreId
      );
      if (isDuplicate) {
        errors.name = `Supplier "${formData.name.trim()}" already exists.`;
        isValid = false;
      }
    }

    if (!formData.contact.trim()) { errors.contact = 'Contact person is required'; isValid = false; }

    const phoneRegex = /^[+]?[0-9\s-]{7,15}$/;
    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
      isValid = false;
    } else if (!phoneRegex.test(formData.phone)) {
      errors.phone = 'Enter a valid phone number';
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errors.email = 'Email address is required';
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      errors.email = 'Enter a valid email address';
      isValid = false;
    }

    if (!formData.companyName.trim()) { errors.companyName = 'Company name is required'; isValid = false; }
    if (!formData.brn.trim()) { errors.brn = 'Registration number is required'; isValid = false; }
    if (!formData.taxNumber.trim()) { errors.taxNumber = 'Tax number is required'; isValid = false; }
    if (!formData.street.trim()) { errors.street = 'Street address is required'; isValid = false; }
    if (!formData.city.trim()) { errors.city = 'City is required'; isValid = false; }
    if (!formData.province.trim()) { errors.province = 'Province is required'; isValid = false; }
    if (!formData.categories.trim()) { errors.categories = 'Specify categories'; isValid = false; }

    setFormErrors(errors);
    return isValid;
  };

  // CRUD for Suppliers
  const handleOpenAddModal = () => {
    setFormData({
      name: '', contact: '', phone: '', email: '', companyName: '', brn: '', taxNumber: '', street: '', city: '', province: '', categories: '', deliveryDays: [], paymentTerms: 'Net 30', status: 'Active',
    });
    setFormErrors({
      name: '', contact: '', phone: '', email: '', companyName: '', brn: '', taxNumber: '', street: '', city: '', province: '', categories: '',
    });
    setIsAddModalOpen(true);
  };

  const handleAddSupplierSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const newId = `SUP-00${suppliersList.length + 1}`;
    const newSupplier: Supplier = {
      ...formData,
      id: newId,
      products: 0,
      lastPurchaseDate: new Date().toISOString().split('T')[0],
      totalPurchases: 0,
      totalValue: '$0.00',
      reliability: 100,
      onTime: 100,
      rating: 5.0,
    };
    setSuppliersList(prev => [...prev, newSupplier]);
    setIsAddModalOpen(false);
  };

  const handleOpenEditModal = (supplier: Supplier) => {
    setSelectedSupplier(supplier);
    setFormData({
      name: supplier.name,
      contact: supplier.contact,
      phone: supplier.phone,
      email: supplier.email,
      companyName: supplier.companyName,
      brn: supplier.brn,
      taxNumber: supplier.taxNumber,
      street: supplier.street,
      city: supplier.city,
      province: supplier.province,
      categories: supplier.categories,
      deliveryDays: supplier.deliveryDays,
      paymentTerms: supplier.paymentTerms,
      status: supplier.status,
    });
    setFormErrors({
      name: '', contact: '', phone: '', email: '', companyName: '', brn: '', taxNumber: '', street: '', city: '', province: '', categories: '',
    });
    setIsEditModalOpen(true);
  };

  const handleEditSupplierSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm(selectedSupplier?.id)) return;
    if (!selectedSupplier) return;

    setSuppliersList(prev => prev.map(s => {
      if (s.id === selectedSupplier.id) {
        const updated = {
          ...s,
          ...formData,
        };
        // Update active profile if open currently
        if (activeProfileSupplier && activeProfileSupplier.id === s.id) {
          setActiveProfileSupplier(updated);
        }
        return updated;
      }
      return s;
    }));
    setIsEditModalOpen(false);
  };

  const handleDeleteSupplier = (id: string) => {
    if (window.confirm(`Are you sure you want to delete supplier ${id}?`)) {
      setSuppliersList(prev => prev.filter(s => s.id !== id));
      if (activeProfileSupplier && activeProfileSupplier.id === id) {
        setActiveProfileSupplier(null);
      }
    }
  };

  const handleExportSuppliers = () => {
    const headers = ["Supplier ID", "Supplier Name", "Contact Person", "Phone", "Email", "Address", "Products Supplied", "Last Purchase Date", "Status"];
    const csvRows = [headers.join(",")];
    suppliersList.forEach(s => {
      const row = [
        s.id,
        `"${s.name}"`,
        `"${s.contact}"`,
        s.phone,
        s.email,
        `"${s.street}, ${s.city}"`,
        s.products,
        s.lastPurchaseDate,
        s.status
      ];
      csvRows.push(row.join(","));
    });
    const blob = new Blob([csvRows.join("\n")], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.setAttribute("href", url);
    a.setAttribute("download", `stocksense_suppliers_${new Date().toISOString().split('T')[0]}.csv`);
    a.click();
  };

  useEffect(() => {
    const action = searchParams.get('action');
    if (action === 'new-supplier') {
      handleOpenAddModal();
      setSearchParams(prev => {
        const next = new URLSearchParams(prev);
        next.delete('action');
        return next;
      }, { replace: true });
    }
  }, [searchParams]);

  return (
    <div className="flex h-screen bg-background text-on-surface font-sans overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden relative">
        <InventoryHeader />

        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 bg-background">
          <div className="max-w-[1400px] mx-auto space-y-6 animate-in fade-in duration-300">

            {/* Page Header (Render back button if profile view is active) */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                {activeProfileSupplier ? (
                  <button
                    onClick={() => setActiveProfileSupplier(null)}
                    className="mb-2 text-xs font-black text-primary hover:text-primary/80 transition-colors flex items-center gap-1"
                  >
                    <span className="material-symbols-outlined text-sm font-black">arrow_back</span>
                    Back to Suppliers Directory
                  </button>
                ) : null}
                <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-on-surface">
                  {activeProfileSupplier ? 'Supplier Profile Dashboard' : 'Procurement Management'}
                </h1>
                <p className="text-sm text-outline mt-1">
                  {activeProfileSupplier ? `Enterprise-level view of ${activeProfileSupplier.name}` : 'Manage your partner suppliers and supply chain directory.'}
                </p>
              </div>
            </div>

            {/* RENDER ENTERPRISE SUPPLIER PROFILE VIEW PAGE */}
            {activeProfileSupplier && supplierProfileData ? (
              <SupplierProfile
                supplier={activeProfileSupplier}
                profileData={supplierProfileData}
                onEditClick={() => handleOpenEditModal(activeProfileSupplier)}
                onDeleteClick={() => handleDeleteSupplier(activeProfileSupplier.id)}
              />
            ) : (
              <SupplierList
                suppliersList={suppliersList}
                filteredSuppliers={filteredSuppliers}
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
                statusFilter={statusFilter}
                onStatusFilterChange={setStatusFilter}
                onSupplierClick={setActiveProfileSupplier}
                onEditClick={handleOpenEditModal}
                onDeleteClick={handleDeleteSupplier}
                onExportClick={handleExportSuppliers}
                onAddClick={handleOpenAddModal}
              />
            )}

          </div>
        </main>
      </div>

      {/* Add Supplier Modal */}
      <SupplierFormModal
        isOpen={isAddModalOpen}
        mode="add"
        formData={formData}
        formErrors={formErrors}
        onClose={() => setIsAddModalOpen(false)}
        onChange={handleInputChange}
        onDeliveryDayChange={handleDeliveryDayChange}
        onSubmit={handleAddSupplierSubmit}
      />

      {/* Edit Supplier Modal */}
      <SupplierFormModal
        isOpen={isEditModalOpen}
        mode="edit"
        formData={formData}
        formErrors={formErrors}
        onClose={() => setIsEditModalOpen(false)}
        onChange={handleInputChange}
        onDeliveryDayChange={handleDeliveryDayChange}
        onSubmit={handleEditSupplierSubmit}
      />

    </div>
  );
}
