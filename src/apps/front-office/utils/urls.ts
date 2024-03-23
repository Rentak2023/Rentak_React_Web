// append urls here, DO NOT remove this line

const URLS = {
  home: "/",
  notFound: "/404",
  blog: {
    root: "/blog",
    viewRoute: "/blog/:id/:slug",
    view: (post: any) => `/blog/${post.id}/${post.slug}`,
  },
  faq: "https://rent-ak.com/Home/FAQs",
  auth: {
    login: "/login-register" || "https://rent-ak.com/Account/Login",
    forgetPassword: "/forget-password",
    resetPassword: "/reset-password",
    register: "/register",
    verify: "/verify",
    verifyForgetPassword: "/verify-forget-password"
  },
  settings: "/settings",
  notifications: "/notifications",
  wallet: "/wallet",
  invoices: "/invoices",
  rentPayment: "/rent-payment" || "https://rent-ak.com/Contract/Form?product_id=1",
  rentCollection: "/rent-collection" ||  "https://rent-ak.com/Contract/RentCollectionForm",
  maintenancePayment: "/maintenance-payment" || "https://rent-ak.com/Contract/Form?product_id=2",
  units: "/units" || "https://rent-ak.com/Listing/Index",

  pages: {
    aboutUs: "/about-us",
    termsConditions: "/terms-conditions",
    privacyPolicy: "/privacy-policy",
    viewRoute: "/pages/:slug",
    view: (page: any) => `/pages/${page.id}/${page.slug}`,
  },
  landlord: "#",
  tenants: "#",

  //Pages
  aboutUs: "#",
  projects: "#",
  contactUs: "https://rent-ak.com/Home/ContactUs",
  team: "#",
  services: "#",
  
  //Services
  kitchen: "#",
  livingArea: "#",
  bathroom: "#",
  dinningHall: "#",
  bedroom: "#",
  serviceOne: "",
  serviceTwo: "",
  serviceThree: "",
  serviceFour: "",

  //Properties
  unit: "/unit/:id",
  property: (property) => `/unit/${property.id}` || `https://rent-ak.com/Listing/Details/${property.id}`,
  //Contract
  contract: "/contract",
  survey: "/survey/:id"

};

export default URLS;
