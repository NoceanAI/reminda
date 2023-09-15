import { AnimatePresence } from "framer-motion";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayOuts from "../LayOuts";
import Accounts from "../pages/Accounts";
import HelpPage from "../pages/Accounts/HelpPage";
import InventoryModule from "../pages/Accounts/InventoryModule";
import Invoice from "../pages/Accounts/InventoryModule/InventoryHome/components/InvoicesNew";
import Orders from "../pages/Accounts/InventoryModule/InventoryHome/components/Orders";
import Payments from "../pages/Accounts/InventoryModule/InventoryHome/components/Payments";
import Suppliers from "../pages/Accounts/InventoryModule/InventoryHome/components/Suppliers";
import AddSupplier from "../pages/Accounts/InventoryModule/InventoryHome/components/Suppliers/AddSupplier";
import ViewSingle from "../pages/Accounts/InventoryModule/InventoryHome/components/Suppliers/ViewSingle";
import ProfilePage from "../pages/Accounts/ProfilePage";
import SalesPage from "../pages/Accounts/SalesPage";
import SalesInvoice from "../pages/Accounts/SalesPage/SalesPageHome/components/InvoicesNew";
import SalesInvoiceDetails from "../pages/Accounts/SalesPage/SalesPageHome/components/InvoicesNew/components/InvoiceDetails";
import NewSalesInvoice from "../pages/Accounts/SalesPage/SalesPageHome/components/InvoicesNew/components/NewInvoice";
import ServiceInvoiceDetails from "../pages/Accounts/SalesPage/SalesPageHome/components/InvoicesNew/components/ServiceInvoiceDetails";
import SalesServiceInvoice from "../pages/Accounts/SalesPage/SalesPageHome/components/InvoicesNew/components/ServiceNewInvoice";
import Receipts from "../pages/Accounts/SalesPage/SalesPageHome/components/Receipts";
import NewReceipt from "../pages/Accounts/SalesPage/SalesPageHome/components/Receipts/components/NewReceipt";
import ReceiptDetails from "../pages/Accounts/SalesPage/SalesPageHome/components/Receipts/components/receiptDetails";
import UserSettingsPage from "../pages/Accounts/UserSettingsPage";
import NotFoundPage from "../pages/NotFoundPage";
import PrivacyPolicyPage from "../pages/Policies/PrivacyPolicyPage";
import TandCPage from "../pages/Policies/TandCPage";
import NewOrder from "../pages/Accounts/InventoryModule/InventoryHome/components/Orders/components/NewOrder";
import Login from "../pages/LoginTwo";
import ConfirmPassword from "../pages/LoginTwo/ConfirmPassword";
import ForgotPasswordPage from "../pages/LoginTwo/ForgotPasswordPage";
import SignUp from "../pages/SignUp";
import SignUpEnt from "../pages/SignUpEnt";
import SignUpSP from "../pages/SignUpSP";
import VerifyEmail from "../pages/VerifyEmailTwo";
import AuthSessionModal from "../LayOuts/AuthSessionModal";
import BankingPage from "../pages/Accounts/BankingPage";
import BankAccounts from "../pages/Accounts/BankingPage/BankingPageHome/components/BankAccounts";
import NewBankAccount from "../pages/Accounts/BankingPage/BankingPageHome/components/BankAccounts/NewBankAccount";
import BankingPayments from "../pages/Accounts/BankingPage/BankingPageHome/components/Payments";
import NewBankingPayment from "../pages/Accounts/BankingPage/BankingPageHome/components/Payments/NewPayment";
import BankingPaymentDetails from "../pages/Accounts/BankingPage/BankingPageHome/components/Payments/ViewPayment/PaymentDetails";
import BankingReceipts from "../pages/Accounts/BankingPage/BankingPageHome/components/Receipts";
import NewBankingReceipts from "../pages/Accounts/BankingPage/BankingPageHome/components/Receipts/components/NewReceipt";
import BankingReceiptDetails from "../pages/Accounts/BankingPage/BankingPageHome/components/Receipts/components/receiptDetails";
import Main from "../pages/Accounts/Explore/ExploreHome/Main";
import ArticleDetail from "../pages/Accounts/Explore/ExploreHome/Main/ArticleDetail";
import Inventory from "../pages/Accounts/InventoryModule/InventoryHome/components/Inventory";
import GoodsIn from "../pages/Accounts/InventoryModule/InventoryHome/components/Inventory/inventoryPages/GoodsIn";
import ExistingGoods from "../pages/Accounts/InventoryModule/InventoryHome/components/Inventory/inventoryPages/GoodsIn/components/ExistingGoods";
import NewGoods from "../pages/Accounts/InventoryModule/InventoryHome/components/Inventory/inventoryPages/GoodsIn/components/NewGoods";
import Overview from "../pages/Accounts/InventoryModule/InventoryHome/components/Inventory/inventoryPages/Overview";
import Products from "../pages/Accounts/InventoryModule/InventoryHome/components/Inventory/inventoryPages/Products";
import NewProduct from "../pages/Accounts/InventoryModule/InventoryHome/components/Inventory/inventoryPages/Products/components/NewProduct";
import ProdDetails from "../pages/Accounts/InventoryModule/InventoryHome/components/Inventory/inventoryPages/Products/components/ProdDetails";
import Services from "../pages/Accounts/InventoryModule/InventoryHome/components/Inventory/inventoryPages/Services";
import NewServices from "../pages/Accounts/InventoryModule/InventoryHome/components/Inventory/inventoryPages/Services/components/NewServices";
import ServDetails from "../pages/Accounts/InventoryModule/InventoryHome/components/Inventory/inventoryPages/Services/components/ServDetails";
import InvoiceDetails from "../pages/Accounts/InventoryModule/InventoryHome/components/InvoicesNew/components/InvoiceDetails";
import NewInvoice from "../pages/Accounts/InventoryModule/InventoryHome/components/InvoicesNew/components/NewInvoice";
import OrderDetails from "../pages/Accounts/InventoryModule/InventoryHome/components/Orders/components/OrderDetails";
import NewPayment from "../pages/Accounts/InventoryModule/InventoryHome/components/Payments/NewPayment";
import PaymentDetails from "../pages/Accounts/InventoryModule/InventoryHome/components/Payments/ViewPayment/PaymentDetails";
import Reports from "../pages/Accounts/InventoryModule/InventoryHome/components/Reports";
import Coa from "../pages/Accounts/InventoryModule/InventoryHome/components/Reports/reportPages/Coa";
import NewCoa from "../pages/Accounts/InventoryModule/InventoryHome/components/Reports/reportPages/Coa/components/NewCoa";
import ReportsPath from "../pages/Accounts/InventoryModule/InventoryHome/components/Reports/reportPages/ReportsPath";
import NotificationPage from "../pages/Accounts/NotificationPage/";
import PosHome from "../pages/Accounts/Pos/PosHome";
import PosOverview from "../pages/Accounts/Pos/PosHome/PosOverview";
import Customers from "../pages/Accounts/SalesPage/SalesPageHome/components/Customers";
import CustomerDetails from "../pages/Accounts/SalesPage/SalesPageHome/components/Customers/components/CustomerDetails";
import NewCustomer from "../pages/Accounts/SalesPage/SalesPageHome/components/Customers/components/NewCustomer";
import ExpensesPage from "../pages/Accounts/ExpensesPage/ExpensesPageHome/components/ExpensesNew";
import NewExpenses from "../pages/Accounts/ExpensesPage/ExpensesPageHome/components/ExpensesNew/components/NewExpenses";
import ExpensesBulkUpload from "../pages/Accounts/ExpensesPage/ExpensesPageHome/components/ExpensesNew/components/NewExpenses/ExpenseBulkUpload";
import ProtectedRoute from "../utilities/ProtectedRoute";

const RoutesFile = () => {
  const location = window.location;

  return (
    <BrowserRouter>
      <AuthSessionModal />

      <AnimatePresence exitBeforeEnter>
        <Routes key={location.pathname} location={location}>
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/lay' element={<LayOuts />} />
          <Route
            path='/login/forgot-password'
            element={<ForgotPasswordPage />}
          />
          <Route
            path='/confirm-password/:email'
            element={<ConfirmPassword />}
          />
          <Route path='/etiaba-tnc' element={<TandCPage />} />
          <Route path='/register' element={<SignUp />} />
          <Route path='/register/service-provider' element={<SignUpSP />} />
          <Route path='/register/enterprise' element={<SignUpEnt />} />
          <Route path='/register/verify-otp' element={<VerifyEmail />} />
          <Route
            path='/etiaba-privacy-policy'
            element={<PrivacyPolicyPage />}
          />

          <Route element={<ProtectedRoute />}>
            <Route path='/accounts' element={<Accounts />}>
              <Route
                path='discover/articles/:name'
                element={<ArticleDetail />}
              />
              <Route path='discover' element={<Main />} />
              {/* <Route path='dashboard' element={<Dashboard />} /> */}
              <Route path='profile' element={<ProfilePage />}></Route>
              <Route
                path='settings/user'
                element={<UserSettingsPage />}
              ></Route>
              <Route
                path='notifications'
                element={<NotificationPage />}
              ></Route>
              <Route path='help' element={<HelpPage />} />

              <Route path='pos/quick-sales' element={<PosHome />} />
              <Route path='pos/overview' element={<PosOverview />} />
              <Route path='purchases' element={<InventoryModule />}>
                <Route index element={<Suppliers />} />
                <Route path='suppliers/new' element={<AddSupplier />} />
                <Route path='suppliers/:id' element={<ViewSingle />} />
                <Route path='suppliers' element={<Suppliers />} />

                <Route path='orders/:id' element={<OrderDetails />} />
                <Route path='orders/edit/:id' element={<NewOrder />} />
                <Route path='orders/new' element={<NewOrder />} />
                <Route path='orders' element={<Orders />} />
                <Route path='invoices' element={<Invoice />} />
                <Route path='invoices/new' element={<NewInvoice />} />
                <Route path='invoices/:id' element={<InvoiceDetails />} />
                <Route path='invoices/edit/:id' element={<NewInvoice />} />
                <Route path='payments' element={<Payments />} />
                <Route path='payments/:id' element={<PaymentDetails />} />
                <Route path='payments/new' element={<NewPayment />} />
              </Route>
              <Route path='inventory' element={<Inventory />}>
                <Route index element={<Overview />} />
                <Route path='performance' element={<Overview />} />
                <Route path='products/:id' element={<ProdDetails />} />
                <Route path='products/new' element={<NewProduct />} />
                <Route path='products' element={<Products />} />
                <Route path='services/:id' element={<ServDetails />} />
                <Route path='services/new' element={<NewServices />} />
                <Route path='services' element={<Services />} />
                <Route path='receieved-goods/new' element={<NewGoods />} />
                <Route
                  path='received-goods/existing'
                  element={<ExistingGoods />}
                />
                <Route path='received-goods' element={<GoodsIn />} />
              </Route>
              <Route path='accounting' element={<Reports />}>
                <Route path='coa' element={<Coa />} />
                <Route path='coa/:id' element={<NewCoa />} />
                <Route path='reports' element={<ReportsPath />} />
              </Route>
              <Route path='sales' element={<SalesPage />}>
                <Route index element={<Invoice />} />
                <Route path='invoices' element={<SalesInvoice />} />
                <Route path='invoices/new' element={<NewSalesInvoice />} />
                <Route
                  path='invoices/service/new'
                  element={<SalesServiceInvoice />}
                />
                <Route path='invoices/:id' element={<SalesInvoiceDetails />} />
                <Route
                  path='invoices/service/:id'
                  element={<ServiceInvoiceDetails />}
                />
                <Route path='invoices/edit/:id' element={<NewSalesInvoice />} />
                <Route
                  path='invoices/service/edit/:id'
                  element={<SalesServiceInvoice />}
                />
                <Route path='receipts' element={<Receipts />} />
                <Route path='receipts/new' element={<NewReceipt />} />
                <Route path='receipts/:id' element={<ReceiptDetails />} />
                <Route path='customers/new' element={<NewCustomer />} />
                <Route path='customers' element={<Customers />} />
                <Route path='customers/:id' element={<CustomerDetails />} />
              </Route>
              <Route path='banking' element={<BankingPage />}>
                <Route path='bank-accounts' element={<BankAccounts />} />
                <Route path='bank-accounts/new' element={<NewBankAccount />} />

                <Route path='payments/new' element={<NewBankingPayment />} />
                <Route path='payments' element={<BankingPayments />} />
                <Route
                  path='payments/:id'
                  element={<BankingPaymentDetails />}
                />
                <Route path='receipts' element={<BankingReceipts />} />
                <Route path='receipts/new' element={<NewBankingReceipts />} />
                <Route
                  path='receipts/:id'
                  element={<BankingReceiptDetails />}
                />
              </Route>

              <Route path='expenses' element={<ExpensesPage />} />
              <Route path='expenses/new' element={<NewExpenses />} />
              <Route
                path='expenses/bulk-upload'
                element={<ExpensesBulkUpload />}
              />
              <Route path='expenses/edit/:id' element={<NewExpenses />} />
            </Route>
          </Route>
          <Route path={"*"} element={<NotFoundPage />} />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
};

export default RoutesFile;
