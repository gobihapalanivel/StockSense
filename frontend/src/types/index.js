/**
 * StockSense — Shared JSDoc Type Definitions
 *
 * These are used as @param / @type annotations across the project.
 * No runtime code here — pure documentation for IDE autocompletion.
 */

/**
 * @typedef {Object} User
 * @property {string} id
 * @property {string} name
 * @property {string} email
 * @property {'ADMIN' | 'CASHIER' | 'CUSTOMER'} role
 * @property {string} [avatar]
 */

/**
 * @typedef {Object} Product
 * @property {string}  id
 * @property {string}  name
 * @property {string}  barcode
 * @property {string}  category
 * @property {number}  price
 * @property {number}  costPrice
 * @property {number}  stock
 * @property {number}  lowStockThreshold
 * @property {string}  [expiryDate]       - ISO date string
 * @property {'IN_STOCK' | 'LOW_STOCK' | 'OUT_OF_STOCK'} stockStatus
 */

/**
 * @typedef {Object} CartItem
 * @property {string} id
 * @property {string} name
 * @property {number} price
 * @property {number} qty
 * @property {string} barcode
 */

/**
 * @typedef {Object} Bill
 * @property {string}     id
 * @property {CartItem[]} items
 * @property {number}     subtotal
 * @property {number}     discount
 * @property {number}     tax
 * @property {number}     total
 * @property {'CASH' | 'CARD' | 'ONLINE'} paymentMethod
 * @property {string}     createdAt    - ISO date string
 * @property {string}     cashierId
 */

/**
 * @typedef {Object} RestockAlert
 * @property {string}  productId
 * @property {string}  productName
 * @property {number}  currentStock
 * @property {number}  predictedDemand
 * @property {number}  suggestedReorderQty
 * @property {'HIGH' | 'MEDIUM' | 'LOW'} urgency
 */

/**
 * @typedef {Object} ApiResponse
 * @property {boolean} success
 * @property {any}     data
 * @property {string}  [message]
 * @property {string}  [error]
 */
