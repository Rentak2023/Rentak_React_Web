// append urls here, DO NOT remove this line

const URLS = {
  home: "/",
  notFound: "/404",
  blog: {
    root: "/blog",
    viewRoute: "/blog/:id/:slug",
    view: (post: any) => `/blog/${post.id}/${post.slug}`,
  },
  faq: "/faq",
  auth: {
    login: "/login",
    forgetPassword: "/forget-password",
    resetPassword: "/rest-password",
    register: "/register",
    verifyForgetPassword: "/forget-password/verify",
  },
  settings: "/settings",
  notifications: "/notifications",
  wallet: "/wallet",
  invoices: "/invoices",
  rentPayment: "/rent-payment",
  rentCollection: "/rent-collection",
  maintenancePayment: "/maintenance-payment",

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
  contactUs: "/contact-us",
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
