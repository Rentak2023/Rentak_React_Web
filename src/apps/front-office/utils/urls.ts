// append urls here, DO NOT remove this line

const URLS = {
  home: "/",
  notFound: "/404",
  blog: {
    root: "/blog",
    viewRoute: "/blog/:id/:slug",
    view: (post: any) => `/blog/${post.id}/${post.slug}`,
  },
  faq: "https://rentak.azurewebsites.net/Home/FAQs",
  auth: {
    login: "https://rentak.azurewebsites.net/Account/Login",
    forgetPassword: "/forget-password",
    resetPassword: "/rest-password",
    register: "/register",
    verifyForgetPassword: "/forget-password/verify",
  },
  settings: "/settings",
  notifications: "/notifications",
  wallet: "/wallet",
  invoices: "/invoices",
  rentPayment: "https://rentak.azurewebsites.net/Contract/Form?product_id=1",
  rentCollection: "https://rentak.azurewebsites.net/Contract/RentCollectionForm",
  maintenancePayment: "https://rentak.azurewebsites.net/Contract/Form?product_id=2",

  pages: {
    aboutUs: "/about-us",
    termsConditions: "/terms-conditions",
    privacyPolicy: "/privacy-policy",
    viewRoute: "/pages/:slug",
    view: (page: any) => `/pages/${page.id}/${page.slug}`,
  },
  landlord: "/landlord",
  tenants: "/tenants",

  //Pages
  aboutUs: "/about-us",
  projects: "/projects",
  contactUs: "https://rentak.azurewebsites.net/Home/ContactUs",
  team: "/team",
  services: "/services",
  
  //Services
  kitchen: "/kitchen",
  livingArea: "/livingArea",
  bathroom: "/bathroom",
  dinningHall: "/dinningHall",
  bedroom: "/bedroom"
};

export default URLS;
