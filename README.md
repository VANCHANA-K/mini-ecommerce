# 🛍️ Mini E-Commerce

A modern e-commerce web application built with Angular 17+ featuring a complete shopping experience with cart, wishlist, authentication, and responsive design.

## ✨ Features

### 🛒 Core E-Commerce
- **Product Catalog** - Browse products with search and filtering
- **Shopping Cart** - Add/remove items with quantity management
- **Wishlist/Favorites** - Save favorite products with ❤️ toggle
- **Checkout Process** - Protected checkout page for authenticated users

### 🔐 Authentication
- **User Registration** - Create new accounts
- **Login System** - User authentication with session management
- **Protected Routes** - AuthGuard for checkout access

### 🎨 User Experience
- **Dark/Light Theme** - Toggle between themes with 🌗
- **Responsive Design** - Mobile-first approach for all screen sizes
- **Thai Language Support** - Fully localized interface
- **Smooth Animations** - CSS transitions and micro-interactions

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or later)
- npm or yarn
- Angular CLI

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd mini-ecommerce
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   ng serve
   ```

4. **Open browser**
   Navigate to `http://localhost:4200`

## 🏗️ Project Structure

```
src/app/
├── core/                   # Core functionality
│   └── auth/              # Authentication guards and services
├── features/              # Feature modules
│   ├── auth/             # Login/Register components
│   ├── cart/             # Shopping cart
│   ├── checkout/         # Checkout process
│   ├── home/             # Landing page
│   ├── products/         # Product catalog
│   └── wishlist/         # Favorites management
├── shared/               # Shared components and services
│   ├── components/       # Reusable UI components
│   ├── models/          # TypeScript interfaces
│   └── services/        # Application services
└── styles/              # Global styles and themes
```

## 🔧 Technical Stack

### Frontend Framework
- **Angular 17+** - Latest Angular with standalone components
- **TypeScript** - Type-safe development
- **SCSS** - Advanced CSS preprocessing

### State Management
- **RxJS** - Reactive programming with BehaviorSubjects
- **Local Storage** - Client-side data persistence
- **Injectable Services** - Centralized state management

### UI/UX
- **CSS Custom Properties** - Theme system implementation
- **Flexbox/Grid** - Modern layout techniques
- **CSS Animations** - Smooth transitions and effects
- **Mobile-First Design** - Responsive across all devices

## 📱 Responsive Breakpoints

- **Mobile**: < 480px
- **Tablet**: 481px - 768px
- **Desktop**: > 768px

## 🎯 Key Components

### Services
- **AuthService** - User authentication management
- **CartService** - Shopping cart state and operations
- **WishlistService** - Favorites with localStorage persistence
- **ThemeService** - Dark/light theme switching

### Guards
- **AuthGuard** - Route protection for authenticated users

### Components
- **ProductCard** - Reusable product display with actions
- **Navbar** - Navigation with cart/wishlist indicators
- **Home** - Landing page with featured products
- **Products** - Product catalog with search/filter
- **Cart** - Shopping cart management
- **Wishlist** - Favorite products display
- **Checkout** - Order completion (protected route)

## 🚀 Build & Deployment

### Development
```bash
ng serve                 # Start dev server
ng build                 # Build for production
ng test                  # Run unit tests
ng lint                  # Run linter
```

### Production Build
```bash
ng build --configuration production
```

## 📋 Available Scripts

- `ng serve` - Start development server
- `ng build` - Build the application
- `ng test` - Execute unit tests
- `ng lint` - Run ESLint
- `ng e2e` - Execute end-to-end tests

## 🌟 Features in Detail

### 🛒 Shopping Cart
- Add products with quantity selection
- Update quantities directly in cart
- Remove items individually
- Persistent storage across sessions
- Real-time total calculations

### ❤️ Wishlist System
- Heart icon toggle on product cards
- Persistent favorites storage
- Dedicated wishlist page
- Empty state with call-to-action
- Responsive grid layout

### 🎨 Theme System
- CSS custom properties for theming
- Smooth transitions between themes
- System preference detection
- Persistent theme selection

### 📱 Responsive Design
- Mobile-first approach
- Touch-friendly interactions
- Optimized layouts for all screen sizes
- Progressive enhancement

## 🔮 Future Enhancements

- **Backend Integration** - REST API connectivity
- **Payment Gateway** - Real payment processing
- **User Dashboard** - Order history and profile management
- **Product Reviews** - Rating and review system
- **Search Enhancement** - Advanced filtering options
- **PWA Features** - Offline functionality

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

Built with ❤️ using Angular 17+ and modern web technologies

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
# mini-ecommerce
