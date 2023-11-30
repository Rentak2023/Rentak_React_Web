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
  units: "https://rentak.azurewebsites.net/Listing/Index",

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
  contactUs: "https://rentak.azurewebsites.net/Home/ContactUs",
  team: "#",
  services: "#",
  
  //Services
  kitchen: "#",
  livingArea: "#",
  bathroom: "#",
  dinningHall: "#",
  bedroom: "#",

  //Properties
  properties: "https://rentakapp.com/Listing/Details",
  viewProperty: "",
  property: (property) => `https://rentakapp.com/Listing/Details/${property.id}`
};

export default URLS;
