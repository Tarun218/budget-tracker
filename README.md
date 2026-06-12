# Budget Tracker

A modern, feature-rich personal finance management application built with React and Vite. Track your income and expenses, visualize spending patterns, and manage your budget with an intuitive and professional interface.

## Live Demo

Visit the live application: https://budget-tracker-lilac-six.vercel.app?_vercel_share=NIy3rifNl7a2HqiX0ucyu0ywZJKSQLk5

## Overview

Budget Tracker is a web-based personal finance management tool that helps you track income and expenses in real-time. With an intuitive dashboard, interactive charts, and comprehensive transaction management, you can visualize your financial health and make informed spending decisions.

## Features

- Dashboard with financial overview displaying total income, expenses, and balance
- Add and manage income and expense transactions
- Multiple expense categories: Food, Transportation, Entertainment, Utilities, Shopping, Healthcare, Other, and Salary/Freelance for income
- Real-time transaction calculations and updates
- Interactive charts for income vs expense visualization
- Expense breakdown by category chart
- Complete transaction history with search functionality
- Filter transactions by type (Income, Expense, or All)
- Edit and delete existing transactions
- Export all transactions to CSV format for backup and analysis
- Local browser storage for persistent data
- Responsive design optimized for desktop and mobile devices
- Professional UI with smooth animations and transitions

## Screenshots

### Dashboard Overview
View your complete financial snapshot with summary cards and interactive charts.
<img width="1885" height="917" alt="Screenshot 2026-06-12 130002" src="https://github.com/user-attachments/assets/e16ed48c-0b41-4b97-8c61-3aa5bc4c01b7" />


### Dashboard Charts
Visual representation of income vs expense and spending by category.
<img width="1877" height="922" alt="Screenshot 2026-06-12 130020" src="https://github.com/user-attachments/assets/46034ef0-b0d7-42af-bada-6b8f657da9be" />


### Add Transaction
Simple form interface to record new income or expense transactions.
<img width="1902" height="687" alt="Screenshot 2026-06-12 130040" src="https://github.com/user-attachments/assets/f3c723b5-de66-4e0b-90a7-0d884d7ffc84" />


### Transaction List
Browse, search, and manage all your transactions with edit and delete options.
<img width="1892" height="921" alt="Screenshot 2026-06-12 130054" src="https://github.com/user-attachments/assets/98390795-38dc-4b84-ab29-a98a213691e0" />


### Settings and Tools
Access data management features including export and statistics.
<img width="1898" height="665" alt="Screenshot 2026-06-12 130108" src="https://github.com/user-attachments/assets/65181d26-dca4-49aa-b98b-6ffce65f4f01" />


## Technology Stack

- React 19.2.6 - UI library
- Vite 8.0.12 - Build tool and dev server
- Tailwind CSS 4.3.0 - Styling framework
- Recharts 3.8.1 - Data visualization
- Framer Motion 11.0.0 - Animation library
- Lucide React 1.17.0 - Icon library
- date-fns 3.0.0 - Date utilities
- ESLint 10.3.0 - Code quality

## Project Structure

```
budget-tracker/
├── src/
│   ├── components/
│   │   ├── Dashboard.jsx           # Main dashboard view
│   │   ├── SummaryCards.jsx        # Summary cards component
│   │   ├── TransactionForm.jsx     # Form for adding/editing transactions
│   │   ├── TransactionList.jsx     # Transaction history view
│   │   ├── Charts/
│   │   │   ├── ExpenseByCategory.jsx
│   │   │   └── IncomeVsExpense.jsx
│   │   └── Layout/
│   │       ├── Header.jsx
│   │       ├── Layout.jsx
│   │       └── Navigation.jsx
│   ├── hooks/
│   │   └── useLocalStorage.js      # Custom hook for local storage
│   ├── utils/
│   │   ├── calculations.js         # Financial calculations
│   │   ├── dateHelpers.js          # Date utility functions
│   │   └── sampleData.js           # Initial sample transactions
│   ├── App.jsx                     # Main application component
│   ├── App.css                     # Global styles
│   └── main.jsx                    # Entry point
├── public/                         # Static assets
├── package.json
├── vite.config.js
├── tailwind.config.js
└── eslint.config.js
```

## Installation and Setup

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Steps

1. Clone the repository:
```bash
git clone https://github.com/yourusername/budget-tracker.git
cd budget-tracker
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to http://localhost:5173

## Development Commands

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run lint` - Run ESLint to check code quality
- `npm run preview` - Preview the production build locally

## How to Use

### Dashboard
The dashboard provides an at-a-glance view of your finances. It displays three main metrics and includes interactive charts to visualize your spending patterns.

### Adding Transactions
Navigate to the "Add Transaction" tab. Select whether it is an income or expense, enter the transaction title, amount, category, and date. Click "Add" to save.

### Managing Transactions
The "All Transactions" tab shows your complete transaction history. Use the search bar to find specific transactions. Edit or delete transactions using the action buttons provided.

### Exporting Data
Visit the Settings tab to export all transactions as a CSV file. This allows you to backup your data or analyze it in spreadsheet applications.

### Statistics
The Settings page displays quick statistics including total transaction count, income entries, and expense entries.

## Data Management

All data is stored locally in your browser using the Local Storage API. Your financial information never leaves your device and is not sent to any external servers. To reset all data, clear your browser's site data for this application through your browser settings.

## Browser Compatibility

Budget Tracker works on all modern browsers supporting:
- ES6 JavaScript
- CSS Grid and Flexbox
- Local Storage API

Tested on:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

The application is optimized for fast loading and smooth interactions. It uses code splitting, lazy loading, and efficient re-rendering to provide a responsive user experience even with large transaction datasets.

## Future Enhancements

Potential features for future versions:
- Budget goals and tracking
- Recurring transactions
- Multi-currency support
- Data synchronization across devices
- Advanced filtering and reporting
- Expense predictions
- Receipt image upload

## Contributing

Contributions are welcome. To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the MIT License.

## Support

For issues, questions, or suggestions, please open an issue on the GitHub repository or contact the development team.

## Acknowledgments

- React and Vite communities for excellent tools
- Tailwind CSS for beautiful styling
- Recharts for charting capabilities
- All contributors and users providing feedback
