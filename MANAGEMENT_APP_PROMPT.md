# Starpops Management Web App - AI Build Prompt

Use this prompt to guide an AI assistant in building the backend management system for Starpops.

---

## Core Instruction

Build a **comprehensive management web application for Starpops popcorn orders** that integrates with a **Google Sheets backend** for real-time data synchronization. The app should handle order management, customer tracking, inventory, and business analytics with a premium, intuitive interface.

---

## System Requirements

### Database & Backend
- **Primary Data Store**: Google Sheets (NEXT_PUBLIC_GOOGLE_SHEET_ID)
- **Authentication**: Google Sheets service account credentials (GOOGLE_SHEETS_CREDENTIALS)
- **Sheets Structure**:
  - **Orders Sheet**: Columns: OrderID, CustomerName, Email, Phone, Address, Product, Quantity, Price, Total, Status (Pending/Confirmed/Delivered/Cancelled), OrderDate, DeliveryDate, Notes
  - **Customers Sheet**: Columns: CustomerID, Name, Email, Phone, Address, TotalOrders, TotalSpent, LastOrderDate, JoinDate
  - **Inventory Sheet**: Columns: ProductID, ProductName, Price, CurrentStock, Reorder Level, LastUpdated
  - **Products Sheet**: Columns: ProductID (classic/pink/elite), ProductName, Description, Price, Image

### Tech Stack
- **Framework**: Next.js 15+ (App Router)
- **Language**: TypeScript
- **UI**: Shadcn/ui components with custom styling
- **Styling**: Tailwind CSS with dark mode
- **APIs**: Google Sheets API v4 (read/write)
- **Charts**: Recharts for analytics visualizations
- **State Management**: React hooks + SWR for data fetching

### Color Scheme
Use the premium dark theme from the landing page:
- **Background**: Deep dark blue-gray (oklch(0.12 0 0))
- **Primary Gold**: oklch(0.72 0.156 49) - for highlights and CTAs
- **Secondary Pink**: oklch(0.63 0.212 316) - for alerts and accents
- **Tertiary Blue**: oklch(0.62 0.185 263) - for secondary elements
- **Cards**: oklch(0.18 0 0)

---

## Feature Set

### 1. **Dashboard** (Main Page)
- **Order Summary Cards**: 
  - Total orders (this month/all time)
  - Revenue metrics
  - Pending orders count
  - Average order value
- **Recent Orders Table**: Last 5 orders with quick action buttons
- **Sales Chart**: Line chart showing sales trend (last 30 days)
- **Inventory Quick View**: Products with stock status
- **Quick Stats**: Revenue, customers, orders - with sparkline trends

### 2. **Orders Management**
- **Orders Table**: Full paginated list with columns:
  - Order ID (sortable)
  - Customer name (searchable)
  - Product & quantity
  - Total amount
  - Status (badge with color: green=Delivered, orange=Pending, blue=Confirmed, red=Cancelled)
  - Order date (sortable)
  - Actions (View, Edit, Delete, Print Invoice)
- **Order Details Modal**:
  - Full customer info
  - Product details
  - Timeline of order status changes
  - Add internal notes
  - Edit status dropdown
  - Update delivery date
- **Filter & Search**:
  - By status, date range, customer name
  - Quick filters for "This Week", "This Month"
- **Bulk Actions**: Mark as delivered, cancel, export to CSV

### 3. **Customers Management**
- **Customers List**: 
  - Name, email, phone
  - Total orders & total spent (sortable)
  - Last order date
  - Join date
  - Actions (View profile, Send message, Delete)
- **Customer Profile Page**:
  - Contact information
  - Order history table
  - Total spent & order count
  - Favorite product
  - Quick action buttons

### 4. **Inventory Management**
- **Stock Dashboard**:
  - Current stock levels for each product
  - Reorder level indicators (red if below threshold)
  - Last stock update timestamp
  - Quick update buttons
- **Inventory Form**:
  - Update stock for each product
  - Add notes for stock changes
  - Track historical stock levels
- **Low Stock Alerts**: Banner/notification for products below reorder level

### 5. **Analytics & Reporting**
- **Sales Metrics**:
  - Total revenue (this month, YTD)
  - Average order value
  - Orders per day chart
  - Product sales breakdown (pie chart)
- **Customer Analytics**:
  - Total customers
  - New customers this month
  - Repeat customer rate
  - Customer lifetime value
- **Inventory Analytics**:
  - Stock movement chart
  - Most popular product
  - Revenue by product
- **Exportable Reports**: Generate and download CSV reports

### 6. **Products Management**
- **Products Table**: Edit prices, descriptions, images
- **Product Editor**: 
  - Name, description, price
  - Product image upload/preview
  - Availability toggle

### 7. **Settings & Configuration**
- **Business Settings**:
  - Business name, logo, contact info
  - Currency (GHS)
  - Default delivery time
  - Tax/fee settings
- **Google Sheets Connection**:
  - Display current connection status
  - Re-authenticate button
  - Test connection button
- **User Preferences**:
  - Theme (dark/light - default dark)
  - Dashboard customization
  - Notification preferences

### 8. **Additional Features**
- **Print Invoice**: Format invoice with Starpops branding and order details
- **Email Notifications**: Send order confirmation to customers (optional future feature)
- **Real-time Sync**: Auto-sync with Google Sheets every 30 seconds
- **Activity Log**: Track all changes made in the app
- **Undo/Redo**: Ability to undo recent changes
- **Data Export**: Export orders/customers to CSV

---

## UI/UX Guidelines

### Layout
- **Responsive Design**: Works on desktop, tablet, mobile
- **Navigation**: Top navigation bar with logo, user menu, notifications bell
- **Sidebar Navigation** (optional for desktop): Collapsible menu with sections:
  - Dashboard
  - Orders
  - Customers
  - Inventory
  - Products
  - Reports
  - Settings
- **Mobile**: Hamburger menu or bottom tab navigation

### Components
- Use **Shadcn/ui table** for all data tables with sorting & filtering
- Use **Modal dialogs** for forms and details
- Use **Toast notifications** (Sonner) for confirmations/errors
- Use **Loading spinners** during data fetch
- Use **Recharts** for all charts and graphs
- **Date pickers** for date range filters
- **Select dropdowns** for status/product filters

### Interactions
- **Smooth animations** on page transitions
- **Loading states** during API calls
- **Success/error toast notifications** for all actions
- **Confirmation dialogs** before destructive actions
- **Hover effects** on interactive elements
- **Responsive feedback** on button clicks

### Dark Mode
- Primary dark background (oklch(0.12 0 0))
- Glowing text for headings using gold, pink, blue
- Subtle borders and shadows
- High contrast text for readability

---

## Integration with Landing Page

### Data Flow
1. **Landing page order form** submits order data to a backend API endpoint
2. **API endpoint** writes order to Google Sheets
3. **Management app** reads from Google Sheets in real-time
4. **Order status updates** in management app sync back to Sheets
5. **Customer data** from landing page orders auto-populates customers sheet

### API Endpoints Needed (if creating a backend)
```
POST /api/orders - Submit new order from landing page
GET /api/orders - Fetch all orders
PUT /api/orders/:id - Update order status
DELETE /api/orders/:id - Cancel order
GET /api/customers - Fetch customers
GET /api/inventory - Fetch product inventory
```

### Google Sheets Integration Code
- Use the provided utility functions for Google Sheets API
- Services credentials file path: `GOOGLE_SHEETS_CREDENTIALS`
- Sheet ID: `NEXT_PUBLIC_GOOGLE_SHEET_ID`
- Implement read/write operations with proper error handling
- Add retry logic for API failures
- Cache data locally to reduce API calls

---

## Performance Considerations
- **Data Table Pagination**: Show 10-20 rows per page
- **Lazy Loading**: Load data as user scrolls
- **Caching**: Use SWR with 30-second revalidation
- **Debouncing**: Search/filter inputs
- **Image Optimization**: Use Next.js Image component

---

## Security & Validation
- **Input Validation**: Validate all form inputs before submission
- **Error Handling**: Graceful error messages for failed API calls
- **Data Sanitization**: Prevent XSS attacks
- **Protected Routes**: Ensure management app is protected (implement basic auth or Google auth)
- **Audit Trail**: Log all changes with timestamps and user info

---

## Deliverables
1. **Fully functional management dashboard**
2. **Google Sheets integration** (read/write)
3. **Responsive design** working on all devices
4. **Premium dark-themed UI** matching the landing page aesthetic
5. **Export capabilities** (CSV reports)
6. **Real-time data sync** with Google Sheets
7. **Proper error handling** and user feedback
8. **Mobile-friendly navigation**

---

## Success Criteria
- ✅ All orders from landing page appear in management app
- ✅ Status updates in management app reflect in Sheets
- ✅ Inventory updates sync properly
- ✅ Charts and analytics display accurately
- ✅ App is fast and responsive
- ✅ Dark theme looks professional and polished
- ✅ All forms validate input properly
- ✅ Mobile navigation is intuitive

---

## Color Reference
```
Dark Background: #1F2937 (oklch(0.12 0 0))
Gold Accent: #B8860B (oklch(0.72 0.156 49))
Pink Accent: #EC4899 (oklch(0.63 0.212 316))
Blue Accent: #3B82F6 (oklch(0.62 0.185 263))
Card Background: #2D3748 (oklch(0.18 0 0))
Border Color: #404855 (oklch(0.25 0 0))
Text Primary: #F2F2F2 (oklch(0.95 0 0))
Text Muted: #A0AEC0 (oklch(0.65 0 0))
```

---

**Note**: This is a complete specification for building a professional management web app. Share this with your AI assistant and it will build exactly what you need to manage Starpops operations efficiently.
