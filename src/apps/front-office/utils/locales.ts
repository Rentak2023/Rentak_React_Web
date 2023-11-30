import { groupedTranslations, trans } from "@mongez/localization";
import mainTranslation from "shared/localization/index.json";

export { mainTranslation };

groupedTranslations(mainTranslation);

// useful for Arabic language, if not needed you can remove it
export function the(key: string) {
  return trans("the", { key: trans(key) });
}

// Add only common localization
groupedTranslations({
  home: {
    en: "Home Page",
    ar: "الصفحة الرئيسية",
  },
  // Header
  loginRegister:{
    en: "Login | Register",
    ar: "تسجيل الدحول | تسجيل"
  },
  lang: {
    en: "العربية",
    ar: "English",
  },
  landlord: {
    en: "Landlord",
    ar: "المالك"
  },
  tenants:{
    en: "Tenants",
    ar: "مستأجر"
  },
  //Home main Slider
  mainSliderTitle: {
    en: "Your Doorway to Smart Rent Solutions",
    ar: "بوابتك إلى حلول الإيجار الذكية"
  },
  mainSliderDesc: {
    en: "At Rentak, we redefine the rental experience, making it hassle-free and secure for both homeowners and tenants. Discover the ease of worry-free property management and transparent rental transactions.",
    ar: "في Rentak، نقوم بإعادة تعريف تجربة الإيجار، مما يجعلها خالية من المتاعب وآمنة لكل من أصحاب المنازل والمستأجرين. اكتشف سهولة إدارة العقارات الخالية من القلق ومعاملات الإيجار الشفافة."
  },
  //Footer Desc
  footerDesc: {
    en: "It is a long established fact that a reader will be distracted lookings.",
    ar: "إنها حقيقة ثابتة منذ زمن طويل أن القارئ سوف يتشتت انتباهه."
  },
  //Footer contact us
  contactUs: {
    en: "Contact Us",
    ar: "اتصل بنا",
  },
  address: {
    en: "Smart Village, Linx Business Park, B115, Giza, Egypt.",
    ar: "Smart Village, Linx Business Park, B115, Giza, Egypt."
  },
  //Footer Pages
  pages: {
    en: "Pages",
    ar: "الصفحات"
  },
  aboutUs: {
    en: "About Us",
    ar: "عنَا"
  },
  ourProjects: {
    en: "Our Projects",
    ar: "مشاريعنا"
  },
  ourTeam: {
    en: "Our Team",
    ar: "فريقنا"
  },
  //Footer Services
  services: {
    en: "Services",
    ar: "خدماتنا"
  },
  kitchen: {
    en: "Kitchen",
    ar: "مطبخ"
  },
  livingArea: {
    en: "Living Area",
    ar: "منطقة سكنية"
  },
  bathroom: {
    en: "Bathroom",
    ar: "حمام"
  },
  dinningHall: {
    en: "Dinning Hall",
    ar: "قاعة الطعام"
  },
  bedroom: {
    en: "Bedroom",
    ar: "غرفة نوم"
  },
  //Home Page
  ourServices: {
    en: "Our Services",
    ar: "خدماتنا"
  },
  serviceOneTitle: {
    en: "Manage Your Property",
    ar: "دعنا ندير ممتلكاتك"
  },
  serviceOneDescription: {
    en: "Rentak ensures on-time rent payments, guarantees the property condition and handles legalities till the end of the rent duration.",
    ar: "تضمن شركة Rentak دفع الإيجار في الوقت المحدد، وتضمن حالة العقار وتتعامل مع الأمور القانونية حتى نهاية مدة الإيجار."
  },
  serviceOneButtonText: {
    en: "Learn more",
    ar: "أعرف أكثر"
  },
  serviceTwoTitle: {
    en: "Rent collection",
    ar: "تحصيل الإيجار"
  },
  serviceTwoDescription: {
    en: "Timely reminders to tenants and multiple payment options, including credit card and cash payments.",
    ar: "تذكير في الوقت المناسب للمستأجرين وخيارات دفع متعددة، بما في ذلك بطاقات الائتمان والمدفوعات النقدية."
  },
  serviceTwoButtonText: {
    en: "Start here",
    ar: "أبدأ هنا"
  },
  serviceThreeTitle: {
    en: "Pay Your Rent",
    ar: "ادفع إيجارك"
  },
  serviceThreeDescription: {
    en: "Choose from multiple payment methods, such as paying with credit cards or different installment companies. To pay any rent with ease.",
    ar: "اختار من طرق دفع متعددة كالدفع بكروت الاتمان او شركات التقسيط المختلفة. لدفع اي ايجار بكل سهولة."
  },
  serviceThreeButtonText: {
    en: "Pay Now",
    ar: "ادفع الآن"
  },
  serviceFourTitle: {
    en: "Rent Your Ideal Home",
    ar: "استأجر منزلك المثالي"
  },
  serviceFourDescription: {
    en: "Timely reminders to tenants and multiple payment options, including credit card and cash payments.",
    ar: "تذكير في الوقت المناسب للمستأجرين وخيارات دفع متعددة، بما في ذلك بطاقات الائتمان والمدفوعات النقدية."
  },
  serviceFourButtonText: {
    en: "Explore Properties",
    ar: "اكتشف الخصائص"
  },
  whyRentakHeader: {
    en: "Owners’ Hub",
    ar: "مركز المالكين"
  },
  whyRentakSubTitle: {
    en: '"Effortless, Efficient, Expert Property Management with Rentak"',
    ar: '"إدارة العقارات بسهولة وكفاءة وخبرة مع Rentak!"'
  }, 
  whyRentak: {
    en: "Why Rentak ?",
    ar: "لماذا Rentak ?"
  },
  reasonOne: {
    en: "Guaranteed monthly rental income",
    ar: "دخل شهري ثابت"
  },
  reasonTwo: {
    en: "Guaranteed your property condition",
    ar: "ضمان حالة وحداتك"
  },
  plans: {
    en: "Plans",
    ar: "فارق كبير"
  },
  rentak: {
    en: "Rentak",
    ar: "Rentak"
  },
  trinationalRenting: {
    en: "Trinational Renting",
    ar: "الإيجار التقليدي"
  },
  planOne: {
    en: "Monthly rent reminders can be inconvenient.",
    ar: "قد تكون تذكيرات الإيجار الشهري غير مريحة."
  },
  planTwo: {
    en: "Renters risk property damages, leading to potential disputes.",
    ar: "يخاطر المستأجرون بأضرار في الممتلكات، مما يؤدي إلى نزاعات محتملة."
  },
  planThree: {
    en: "Unpaid utility bills can cause financial stress and disputes.",
    ar: "يمكن أن تسبب فواتير الخدمات غير المدفوعة ضغوطًا مالية ونزاعات."
  },
  planFour: {
    en: "Limited legal support and protection for landlords and tenants.",
    ar: "محدودية الدعم القانوني والحماية لأصحاب العقارات والمستأجرين."
  },
  planOneTitle: {
    en: "Monthly Rent Reminders",
    ar: "تذكير الإيجار الشهري"
  },
  planOneSubTitle: {
    en: "Guaranteed On-Time Rent Collection",
    ar: "ضمان تحصيل الإيجار في الوقت المحدد"
  },
  planOneDescription: {
    en: "Hassle-free, automated rent collection without the need for reminders.",
    ar: "تحصيل الإيجارات آليًا بدون متاعب دون الحاجة إلى تذكير." 
  },
  planTwoTitle: {
    en: "Unit Conditions",
    ar: "حالة الوحدة"
  },
  planTwoSubTitle: {
    en: "Guaranteed Unit Conditions",
    ar: "شروط الوحدة المضمونة"
  },
  planTwoDescription: {
    en: "We ensure the property's condition at the end of the lease, minimizing risks for landlords.",
    ar: "نحن نضمن حالة العقار في نهاية عقد الإيجار، مما يقلل من المخاطر التي يتعرض لها الملاك." 
  },
  planThreeTitle: {
    en: "Unpaid Bills",
    ar: "الفواتير غير المسددة"
  },
  planThreeSubTitle: {
    en: "Bill Payment Assurance",
    ar: "ضمان دفع الفواتير"
  },
  planThreeDescription: {
    en: "We handle all bills promptly, eliminating the risk of unpaid utility bills.",
    ar: "نحن نتعامل مع جميع الفواتير على الفور، مما يلغي مخاطر فواتير الخدمات غير المدفوعة." 
  },
  planFourTitle: {
    en: "Legal Support",
    ar: "الدعم القانوني"
  },
  planFourSubTitle: {
    en: "Rent Fully Guaranteed till Eviction",
    ar: "الإيجار مضمون بالكامل حتى الإخلاء"
  },
  planFourDescription: {
    en: "Legal protection and expert support provided throughout the tenancy period.",
    ar: "يتم توفير الحماية القانونية ودعم الخبراء طوال فترة الإيجار." 
  },
  howItWorks:{
    en: "How It Works",
    ar: "كيف نعمل"
  },
  stepOneTitle: {
    en: "Submit your property",
    ar: "أرسل الممتلكات الخاصة بك"
  },
  stepOneDescription: {
    en: "Homeowners submit their property details to Rentak for comprehensive management.",
    ar: "يقدم أصحاب المنازل تفاصيل ممتلكاتهم إلى Rentak لإدارة شاملة."
  },
  stepTwoTitle: {
    en: "Effortless Management",
    ar: "إدارة سهلة"
  },
  stepTwoDescription: {
    en: "Rentak handles legalities, rent collection, property maintenance, and ensures a smooth tenant experience.",
    ar: "تتولى شركة Rentak الإجراءات القانونية وتحصيل الإيجارات وصيانة العقارات وتضمن تجربة سلسة للمستأجر."
  },
  stepThreeTitle: {
    en: "Secure Transactions",
    ar: "المعاملات الآمنة"
  },
  stepThreeDescription: {
    en: "Homeowners receive on-time payments, and tenants enjoy transparent transactions and hassle-free living.",
    ar: "يتلقى أصحاب المنازل الدفعات في الوقت المحدد، ويتمتع المستأجرون بمعاملات شفافة وحياة خالية من المتاعب."
  },
  stepFourTitle: {
    en: "End of Rent",
    ar: "نهاية الإيجار"
  },
  stepFourDescription: {
    en: "Rentak guarantees the unit's condition, settles bills, and manages the transition for both parties.",
    ar: "تضمن شركة Rentak حالة الوحدة، وتسدد الفواتير، وتدير عملية الانتقال لكلا الطرفين."
  },
  tenantsHubTitle: {
    en: "Tenants’ Hub",
    ar: "مركز المستأجرين"
  },
  tenantsHubSubTitle:{
    en: "Swift, Secure, Simple Living with Rentak!",
    ar: "حياة سريعة وآمنة وبسيطة مع Rentak!"
  },
  tenantsHubOneTitle: {
    en: "Pay Your Way",
    ar: "ادفع على طريقتك"
  },
  tenantsHubOneDescription: {
    en: "Choose your payment method. Whether it’s cash, bank transfer, Consumer Financing, or credit card, the choice is yours.",
    ar: "اختر طريقتك في الدفع. سواء كان ذلك نقدًا، أو تحويل مصرفي، أو تمويل استهلاكي، أو بطاقة ائتمان، فالخيار لك."
  },
  tenantsHubTwoTitle: {
    en: "Easy Move-In",
    ar: "سهولة الحركة"
  },
  tenantsHubTwoDescription: {
    en: "Bid farewell to heavy cash deposits. With us, pay only the first month's rent.",
    ar: "وداعا للودائع النقدية الثقيلة. معنا ادفع إيجار الشهر الأول فقط."
  },
  tenantsHubThreeTitle: {
    en: "Explore Listings with Clarity",
    ar: "استكشف القوائم بوضوح"
  },
  tenantsHubThreeDescription: {
    en: "Browse our curated listings showcasing available units, complete with real photos and transparent rental prices. No surprises, just straightforward options.",
    ar: "تصفح قوائمنا المنسقة التي تعرض الوحدات المتاحة، كاملة مع الصور الحقيقية وأسعار الإيجار الشفافة. لا توجد مفاجآت، مجرد خيارات واضحة."
  },
  commentsTitle: {
    en: "Few Smiles and Comments",
    ar: "بعض من الابتسامات والتعليقات"
  },
  commentOne: {
    en: "Moderate children at of outweigh it. Unsatiable it considered invitation he travelling insensible. Consulted admitting oh mr up as described.",
    ar: "الأطفال المعتدلون في سن الخامسة يتفوقون عليه. لا يشبع فهو يعتبر دعوة السفر غير معقولة. استشارة الاعتراف يا السيد كما هو موضح."
  },
  userNameOne: {
    en: "Jane Cooper",
    ar: "جين كوبر"
  },
  facebookComment: {
    en: "Facebook Comment",
    ar: "تعليق على فيس بوك"
  },
  commentTwo: {
    en: "Moderate children at of outweigh it. Unsatiable it considered invitation he travelling insensible. Consulted admitting oh mr up as described.",
    ar: "الأطفال المعتدلون في سن الخامسة يتفوقون عليه. لا يشبع فهو يعتبر دعوة السفر غير معقولة. استشارة الاعتراف يا السيد كما هو موضح."
  },
  userNameTwo: {
    en: "Jane Cooper",
    ar: "جين كوبر"
  },
  instagramComment: {
    en: "Instagram Comment",
    ar: "تعبيق عللي انستاجرام"
  },
  commentThree: {
    en: "Moderate children at of outweigh it. Unsatiable it considered invitation he travelling insensible. Consulted admitting oh mr up as described.",
    ar: "الأطفال المعتدلون في سن الخامسة يتفوقون عليه. لا يشبع فهو يعتبر دعوة السفر غير معقولة. استشارة الاعتراف يا السيد كما هو موضح."
  },
  userNameThree: {
    en: "Jane Cooper",
    ar: "جين كوبر"
  },
  twitterComment: {
    en: "Twitter Comment",
    ar: "تعليق على تويتر"
  },
  haveAQuestion: {
    en: "Have A Question ?",
    ar: "لديك سؤال ؟"
  },
  firstName: {
    en: "First Name",
    ar: "الإسم الأول"
  },
  lastName: {
    en: "Last Name",
    ar: "الإسم الأخير"
  },
  availableRental:{
    en: 'Available Rental',
    ar: "الإيجار المتاح"
  },
  seeAllUnits: {
    en: "See All Units",
    ar: "رؤية كافة الوحدات"
  },
  perMonth: {
    en: "Per Month",
    ar: "كل شهر"
  },
  rentPayment: {
    en: "Rent Payment",
    ar: "دفع الايجار"
  },
  rentCollection: {
    en: "Rent Collection",
    ar: "تحصيل الإيجار"
  },
  maintenancePayment:{
    en: "Maintenance Payment",
    ar: "دفع التأمين"
  },
  needHelp:{
    en: "Need help? Talk to our experts.",
    ar: "تحتاج مساعدة؟ تحدث إلى خبرائنا."
  },
  talkToExperts: {
    en: "Talk to our experts or Browse through more properties.",
    ar: "تحدث إلى خبرائنا أو تصفح المزيد من العقارات."
  },
  copyright: {
    en: "2023 © Rentak - All rights reserved",
    ar: "2023 © Rentak - جميع الحقوق محفوظة"
  },
  invoices:{
    en: "Invoices",
    ar: "الفواتير"
  }
});
