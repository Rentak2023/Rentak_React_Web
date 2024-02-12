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
  rentakApp: {
    en: "rentak App",
    ar: "رينتك"
  },
  // Header
  loginRegister:{
    en: "Login | Register",
    ar: "تسجيل الدخول | تسجيل"
  },
  lang: {
    en: "العربية",
    ar: "English",
  },
  landlord: {
    en: "Landlord",
    ar: "مالك"
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
    ar: "في Rentak، نقوم بإعادة تعريف تجربة الإيجار، مما يجعلها خالية من المتاعب وآمنة لكل من أصحاب المنازل والمستأجرين. اكتشف سهولة إدارة العقارات الخالية من القلق ومعاملات إيجاريه شفافة."
  },
  //Footer Desc
  footerDesc: {
    en: "It is a long established fact that a reader will be distracted lookings.",
    ar: "إنها حقيقة ثابتة منذ زمن طويل أن القارئ سوف يتشتت انتباهه."
  },
  //Footer contact us
  contactUs: {
    en: "Contact Us",
    ar: "تواصل معنا",
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
    ar: "عن رينتك"
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
    ar: "غرفة معيشة "
  },
  bathroom: {
    en: "Bathroom",
    ar: "حمام"
  },
  dinningHall: {
    en: "Dinning Hall",
    ar: "غرفة الطعام"
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
    ar: "تضمن رينتك دفع الإيجار في ميعاده كل شهر ، كما تضمن حالة الوحدة و تتولي كافة المعاملات القانونية حتي نهاية مدة العقد"
  },
  serviceOneButtonText: {
    en: "Learn more",
    ar: "إعرف المزيد"
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
    ar: "ابدأ هنا"
  },
  serviceThreeTitle: {
    en: "Pay Your Rent",
    ar: "دفع الإيجار"
  },
  serviceThreeDescription: {
    en: "Choose from multiple payment methods, such as paying with credit cards or different installment companies. To pay any rent with ease.",
    ar: "اختار من طرق دفع متعددة كالدفع بكروت الاتمان او شركات التقسيط المختلفة، لدفع اي ايجار بكل سهولة."
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
    en: "Explore trustworthy listings with real availability, secure transactions, and no upfront cash security deposit.",
    ar: "تصفح قائمة من الوحدات المختارة بعناية لتلائم كافة احتياجاتك."
  },
  serviceFourButtonText: {
    en: "Explore Properties",
    ar: "الوحدات المتاحة"
  },
  serviceFiveTitle: {
    en: "Rent Contract",
    ar: "عقد الإيجار"
  },
  serviceFiveDescription: {
    en: "Create a rent contract for free just by scanning the tenant and landlord's IDs",
    ar: "انشئ عقد ايجار في ثواني معدودة برفع صورة بطاقات المالك و المستاجر الشخصية"
  },
  whyRentakHeader: {
    en: "Owners’ Hub",
    ar: "للملاك"
  },
  whyRentakSubTitle: {
    en: '"Effortless, Efficient, Expert Property Management with Rentak"',
    ar: '"إدارة العقارات بسهولة وكفاءة وخبرة مع رينتك '
  }, 
  whyRentak: {
    en: "Why Rentak ?",
    ar: "لماذا رينتك؟"
  },
  reasonOneTitle: {
    en: "Monthly Income",
    ar: "الإيجار الشهري"
  },
  reasonOne: {
    en: "Guaranteed against any unexpected surprises",
    ar: "مضمون ضد أي مفاجآت غير متوقعة"
  },
  reasonTwoTitle: {
    en: "Unit condition",
    ar: "حالة الوحدة"
  },
  reasonTwo: {
    en: "Guaranteed against damages",
    ar: "مضمون ضد الأضرار"
  },
  plans: {
    en: "Big Difference",
    ar: "فارق كبير"
  },
  rentak: {
    en: "Rentak",
    ar: "رينتك"
  },
  trinationalRenting: {
    en: "Traditional Renting",
    ar: "الإيجار التقليدي"
  },
  planOne: {
    en: "Monthly rent reminder can be inconvenient.",
    ar: "التذكيرات المستمرة لدفع الإيجار غير مريحة."
  },
  planTwo: {
    en: "Renters are always at risk for severe damages, leading to probable disputes.",
    ar: "يخاطر الملاك بأضرار تلحق بوحداتهم، مما يؤدي إلى النزاعات."
  },
  planThree: {
    en: "Late or unpaid bills definitely cause stress and grudge",
    ar: "تسبب الفواتير غير المدفوعة ضغوطًا مالية ونزاعات."
  },
  planFour: {
    en: "Limited legal support and protection for landlords and tenants.",
    ar: "محدودية الدعم القانوني والحماية للملاك والمستأجرين."
  },
  planOneTitle: {
    en: "Monthly Rent Reminders",
    ar: "تذكير دوري لدفع الإيجار "
  },
  planOneSubTitle: {
    en: "Guaranteed On-Time Rent Collection",
    ar: "ضمان تحصيل الإيجار في الوقت المحدد" 
  },
  planOneDescription: {
    en: "Hassle-free, automated rent collection without the need for reminders.",
    ar: "تحصيل الإيجارات بدون متاعب و دون الحاجة إلى تذكير." 
  },
  planTwoTitle: {
    en: "Unit Condition",
    ar: "حالة الوحدة"
  },
  planTwoSubTitle: {
    en: "Guaranteed Unit Condition",
    ar: "ضمان حالة الوحدة "
  },
  planTwoDescription: {
    en: "We ensure the property's condition at the end of the lease, minimizing risks for landlords.",
    ar: "نحن نضمن حالة العقار في نهاية مدة العقد ، مما يقلل من المخاطر التي يتعرض لها الملاك." 
  },
  planThreeTitle: {
    en: "Unpaid Bills",
    ar: "فواتير غير مسددة"
  },
  planThreeSubTitle: {
    en: "Bill Payment Assurance",
    ar: "ضمان دفع الفواتير"
  },
  planThreeDescription: {
    en: "We handle all bills promptly, eliminating the risk of unpaid utility bills.",
    ar: "نحن نتاكد من سداد جميع الفواتير ، مما يلغي مخاطر الفواتير غير المدفوعة."
  },
  planFourTitle: {
    en: "Legal Support",
    ar: "دعم قانوني"
  },
  planFourSubTitle: {
    en: "Rent Fully Guaranteed till Eviction",
    ar: "ضمان الايجار حتى الإخلاء"
  },
  planFourDescription: {
    en: "Legal protection and expert support provided throughout the tenancy period.",
    ar: " توفير الحماية القانونية والدعم المستمر طوال فترة الإيجار."  
  },
  howItWorks:{
    en: "How It Works",
    ar: "كيف نعمل"
  },
  stepOneTitle: {
    en: "Submit your property",
    ar: "اضف بيانات وحدتك"
  },
  stepOneDescription: {
    en: "Homeowners submit their property details to Rentak for comprehensive management.",
    ar: "يضيف الملاك بيانات وحداتهم التفصيلية، لتقوم رينتك بادارتها."
  },
  stepTwoTitle: {
    en: "Effortless Management",
    ar: "إدارة سهلة"
  },
  stepTwoDescription: {
    en: "Rentak handles legalities, rent collection, property maintenance, and ensures a smooth experience.",
    ar: "تتولي شركة رينتك كل الإجراءات القانونية وتحصيل الإيجار والصيانة السنوية وتضمن تجربة سلسة للمالك."
  },
  stepThreeTitle: {
    en: "Secure Transactions",
    ar: "معاملات آمنة"
  },
  stepThreeDescription: {
    en: "Homeowners receive on-time payments, and tenants enjoy transparent transactions and hassle-free living.",
    ar: "يتلقى الملاك الايجار في الوقت المحدد، ويتمتع المستأجرون بشفافية المعاملات و إيجار خالي من المتاعب."
  },
  stepFourTitle: {
    en: "End of Rent",
    ar: "نهاية الإيجار"
  },
  stepFourDescription: {
    en: "Rentak guarantees the unit's condition, settles bills, and manages the transition for both parties.",
    ar: " تضمن رينتك حالة الوحدة، وتسديد الفواتير، وتدير عملية الايجار لكلا الطرفين."
  },
  tenantsHubTitle: {
    en: "Tenants’ Hub",
    ar: "للمستأجرين"
  },
  tenantsHubSubTitle:{
    en: "Swift, Secure, Simple Living with Rentak!",
    ar: "حياة سريعة وآمنة وبسيطة مع رينتك!"
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
    ar: "سهولة النقل"
  },
  tenantsHubTwoDescription: {
    en: "Bid farewell to heavy cash deposits. With us, pay only the first month's rent.",
    ar: "وداعا للمقدم . معنا ادفع إيجار الشهر الأول فقط."
  },
  tenantsHubThreeTitle: {
    en: "Explore Listings with Clarity",
    ar: "ابحث عن وحدات بسهولة"
  },
  tenantsHubThreeDescription: {
    en: "Browse our curated listings showcasing available units, complete with real photos and transparent rental prices. No surprises, just straightforward options.",
    ar: "تصفح قوائمنا التي تعرض الوحدات المتاحة، كاملة مع الصور الحقيقية وأسعار الإيجار. لا توجد مفاجآت، مجرد خيارات واضحة."
  },
  commentsTitle: {
    en: "Few Smiles and Comments",
    ar: "بعض الابتسامات والتعليقات"
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
    ar: "تعليق عللي انستاجرام"
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
    ar: "الاسم الأول"
  },
  lastName: {
    en: "Last Name",
    ar: "الاسم الأخير"
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
    ar: "دفع الإيجار"
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
  },
  submit: {
    en: "Submit",
    ar: "إرسال"
  },
  //Contract Page 
  insuranceAmount: {
    en: "Insurance Amount",
    ar: "مبلغ التأمين"
  },
  contractInfo: {
    en: "Contract Info",
    ar: "معلومات العقد"
  },
  contractSubTitle: {
    en: "Easily create contract by filling data and we will create to you a contract document",
    ar: "أنشئ عقدًا بسهولة عن طريق ملء البيانات وسنقوم بإنشاء مستند عقد لك"
  },
  personalInfo: {
    en: "Personal Info",
    ar: "معلومات شخصية"
  },
  landlordIdentity:{
    en: "Landlord Identity Front Image",
    ar: "الصورة الأمامية لهوية المالك"
  },
  tenantIdentity: {
    en: "Tenant Identity Front Image",
    ar: "الصورة الأمامية لهوية المستأجر"
  },
  landlordPhone: {
    en: "Landlord Phone",
    ar: "هاتف المالك"
  },
  tenantPhone: {
    en: "Tenant Phone",
    ar: "هاتف المستأجر"
  },
  phone:{
    en: "Phone Number",
    ar: "رقم الهاتف"
  },
  uploadId: {
    en: "Upload ID",
    ar: "تحميل البطاقة"
  },
  unitDescription: {
    en: "Unit description",
    ar: "وصف الوحدة"
  },
  unitArea: {
    en: "Unit Area",
    ar: "مساحة الوحدة"
  },
  contractPeriod: {
    en: "Contract duration (In Months)",
    ar: "مدة العقد (بالشهور)"
  },
  startDate:{
    en: "Contract start date",
    ar: "تاريخ بدء العقد"
  },
  rentAmount:{
    en: "Rent Amount",
    ar: "مقدار الايجار"
  },
  purposeOfRenting:{
    en: "Purpose of renting",
    ar: "الغرض من الإيجار"
  },
  residential: {
    en: "Residential",
    ar: "سكني"
  },
  managerial:{
    en: "Administrative",
    ar: "إداري"
  },
  createContract:{
    en: "Create Contract",
    ar: "إنشاء العقد"
  },
  vacationFinancing: {
    en: "Vacation financing",
    ar: "تمويل الاجازة"
  },
  vacayNow: {
    en: "vacay now and pay later",
    ar: "إجازة الآن والدفع في وقت لاحق"
  },
  fillForm: {
    en: "Fill in the form",
    ar: "إملأ الإستمارة"
  },
  completeForm: {
    en: "Please complete the form to enjoy our available payment options",
    ar: "يرجى إكمال النموذج للاستمتاع بخيارات الدفع المتاحة لدينا"
  },
  //Forms
  profileInfo:{
    en: "Profile Info",
    ar: "المعلومات الشخصية"
  },
  ownerInfo: {
    en: "Owner Info",
    ar: "معلومات المالك"
  },
  confirmation: {
    en: "Confirmation",
    ar: "تأكيد"
  },
  fullName:{
    en: "Full Name",
    ar: "الإسم"
  },
  nationalId: {
    en: "National Id",
    ar: "الهوية الوطنية"
  },
  otp: {
    en: "OTP",
    ar: "الرقم التعريفي المتغير"
  },
  ownerFullName: {
    en: "Owner’s Full Name ",
    ar: "الاسم الكامل للمالك"
  },
  ownerPhone: {
    en: "Owner’s Phone Number",
    ar: "رقم هاتف المالك"
  },
  transferTo:{
    en: "Transfer To",
    ar: "تحويل إلى"
  },
  bank: {
    en: "Bank",
    ar: "بنك"
  },
  unitDescriptionHint:{
    en: "Type the unit description as you want it to appear on the transfer form",
    ar: "اكتب وصف الوحدة كما تريد أن يظهر في نموذج النقل"
  },
  totalAmountHint: {
    en: "Rent Amount + :fees% Admin Fees",
    ar: "مبلغ الإيجار + :fees% رسوم إدارية"
  },
  serviceFees: {
    en: "Service Fees",
    ar: "رسوم الخدمة"
  },
  promoCode: {
    en: "Promo Code",
    ar: "الرمز الترويجي"
  },
  totalAmount: {
    en: "Total Amount",
    ar: "المبلغ الإجمالي"
  },
  tenantFullName:{
    en: "Tenant Full Name",
    ar: "الاسم الكامل للمستأجر"
  },
  tenantPhoneNumber: {
    en: "Tenant Phone Number",
    ar: "رقم هاتف المستأجر"
  },
  contractStartDate: {
    en: "Contract Start Date",
    ar: "تاريخ بداية العقد"
  },
  contractEndDate: {
    en: "Contract End Date",
    ar: "تاريخ انتهاء العقد"
  },
  annualIncreasePercentage:{
    en: "Annual Increase Percentage",
    ar: "نسبة الزيادة السنوية"
  },
  collectionDay:{
    en: "Collection Day",
    ar: "يوم التحصيل"
  },
  tenantInfo:{
    en: "Tenant Info",
    ar: "معلومات المستأجر"
  },
  sendOtp:{
    en: 'Send OTP',
    ar: "إرسال الرقم التعريفي المتغير"
  },
  verifyOtp: {
    en: "Verify OTP",
    ar: "تأكيد الرقم التعريفي المتغير"
  },
  verifySuccess: {
    en: "OTP verification done Successfully",
    ar: "تم التحقق من OTP بنجاح"
  },
  continue: {
    en: "continue",
    ar: "استمرار"
  },
  rentCollectionSubTitle: {
    en: "Automate your rent collection process",
    ar: " عملية تحصيل الإيجار الخاص بك"
  },
  rentCollectionDescription: {
    en: "Our automated rent collection system ensures seamless payments. Plus, offer your tenants flexible options like credit card payments, with a 55-day grace period, interest-free.",
    ar: "يضمن نظامنا الآلي لتحصيل الإيجار دفعات سلسة. بالإضافة إلى ذلك، قدم للمستأجرين خيارات مرنة مثل الدفع ببطاقات الائتمان، مع فترة سماح مدتها 55 يومًا، بدون فوائد."
  },
  rentNow:{
    en: "Rent now .. Pay Later",
    ar: "استأجر الآن .. ادفع لاحقًا"
  },
  rentPaymentDescription: {
    en: "For any Home, Villa, Chalet or Hotel Room, from any website or even through your connections.",
    ar: "لأي منزل أو فيلا أو شاليه أو غرفة فندق، من أي موقع ويب أو حتى من خلال اتصالاتك."
  },
  completeRentPaymentForm: {
    en: "complete the form below to access our specialized payment service, allowing you to conveniently spread your payments over 60 months or pay your rent with a credit card at zero interest.",
    ar: "أكمل النموذج أدناه للوصول إلى خدمة الدفع المتخصصة لدينا، مما يسمح لك بتوزيع دفعاتك بسهولة على مدى 60 شهرًا أو دفع الإيجار باستخدام بطاقة ائتمان بدون فوائد."
  },

  bankAccountNumber:{
    en: "Bank Account Number",
    ar: "رقم الحساب المصرفي"
  },
  confirmBankAccountNumber:{
    en: "Confirm Bank Account Number",
    ar: "تأكيد رقم الحساب البنكي"
  },
  walletAccountNumber:{
    en: "Wallet Account Number",
    ar: "رقم حساب المحفظة"
  },
  confirmWalletAccountNumber:{
    en: "Confirm Wallet Account Number",
    ar: "تأكيد رقم حساب المحفظة"
  },
  acknowledgmentAndCommitment: {
    en: "Acknowledgment And Commitment",
    ar: "الاعتراف والالتزام"
  },
  agree:{
    en: "Agree",
    ar: "أوافق"
  },
  applyPromoCode: {
    en: "Apply Promo Code",
    ar: "تطبيق الكود الترويجي"
  },
  success: {
    en: "Success",
    ar: "نجاح"
  },
  formWasSuccessfullySubmitted:{
    en: "Your Form was successfully submitted.",
    ar: "تم إرسال النموذج الخاص بك بنجاح."
  },
  error: {
    en: "Error",
    ar: "خطأ"
  },
  formWasFailed: {
    en: "Your Form was unfortunately failed.",
    ar: "لقد فشل النموذج الخاص بك للأسف."
  },
  showing: {
    en: "Showing",
    ar: "عرض"
  },
  results: {
    en: "Results",
    ar: "نتائج"
  },
  page: {
    en: "Page",
    ar: "صفحة"
  },
  of: {
    en: "of",
    ar: 'من'
  },
  listed: {
    en: "Listed",
    ar: "مدرج"
  },
  unitsRenting:{
    en: "Units Renting",
    ar: "إيجار الوحدات"
  },
  selectCity: {
    en: "Select City",
    ar: "اختر مدينة"
  },
  districts: {
    en: "Districts",
    ar: "المناطق"
  },
  selectDistrict: {
    en: "Select District",
    ar: "اختر المنطقة"
  },
  finishingTypes: {
    en: "Finishing Types",
    ar: "أنواع التشطيب"
  },
  propertyType: {
    en: "Property Type",
    ar: "نوع العقار"
  },
  selectRooms: {
    en: "Select number of rooms",
    ar: "اختر عدد الغرف"
  },
  selectToilets:{
    en: "Select number of toilets",
    ar: "اختر عدد الحمامات"
  },
  rooms: {
    en: "Rooms",
    ar: "الغرف"
  },
  toilets: {
    en: "Toilets",
    ar: "الحمامات"
  },
  findPlace: {
    en: "Find your place in",
    ar: ""
  },
  searchPlaceholder: {
    en: 'Search address, city, location',
    ar: "عنوان البحث، المدينة، الموقع"
  },
  resetOptions: {
    en: "Reset all options",
    ar: "إعادة تعيين كافة الخيارات"
  },
  noItems: {
    en: "There are no results for your search.",
    ar: "لا توجد نتائج للبحث."
  },
  unitOverview: {
    en: "Unit Overview",
    ar: "نظرة عامة على الوحدة"
  },
  inspection: {
    en: "Inspection",
    ar: "التفتيش"
  },
  finishType: {
    en: "Finish Type",
    ar: "نوع التشطيب"
  },
  propertyDetails:{
    en: "Property Details",
    ar: "تفاصيل الوحدة"
  },
  availableNow: {
    en: "Available Now",
    ar: "متوفر في الوقت الحاضر"
  },
  m2:{
    en: "m2",
    ar: "متر مربع"
  },
  propertyId:{
    en: "Property ID",
    ar: "معرف الوحدة"
  },
  propertyStatus:{
    en: "Property Status",
    ar: "حالة الوحدة"
  },
  propertySize:{
    en: "Property Size",
    ar: "حجم الوحدة"
  },
  arrangeAVisit: {
    en: "Arrange A Visit",
    ar: "قم بترتيب زيارة"
  },
  submitVisitRequest:{
    en: "Submit a Visit Request",
    ar: "تقديم طلب زيارة"
  },
  unitInspections: {
    en: "Unit Inspections",
    ar: "تفتيش الوحدة"
  },
  selectDate: {
    en: "Select Date",
    ar: "حدد تاريخ"
  },
  specialRequest: {
    en: "Special Request",
    ar: "طلب خاص"
  },
  //auth
  signup: {
    en: "Sign Up",
    ar: "التسجيل"
  },
  yourFullName: {
    en: "Your Full Name",
    ar: "اسمك بالكامل"
  },
  yourPhone: {
    en: "Your Phone",
    ar: "رقم هاتفك"
  },
  yourEmail: {
    en: "Your Email",
    ar: "بريدك الالكتروني"
  },
  forgetPassword: {
    en: "Forget Your Password ?",
    ar: " ؟ نسيت كلمة مرورك"
  },
  yourEmailOrPhone: { 
    en: "Your Email Or Phone Number",
    ar: "البريد الإلكتروني الخاص بك أو رقم الهاتف"
  },
  yourPassword: {
    en: "Your Password",
    ar: "كلمة مرورك"
  },
  hide: {
    en: "Hide",
    ar: "إخفاء"
  },
  show: {
    en: "Show",
    ar: "إظهار"
  },
  notHaveAccount:{
    en: "Don’t have an ccount?",
    ar: "ليس لديك حساب؟"
  },
  alreadyHaveAccount: {
    en: "Already Have an Account?",
    ar: "لديك حساب بالفعل؟"
  },
  backToLogin: {
    en: "Back To Login",
    ar: "الرجوع الي تسجيل الدخول"
  },
  forgetPasswordSubTitle: {
    en: "Don’t worry, happens to all of us. Enter your Phone number below to recover your password",
    ar: "لا تقلق، هذا يحدث لنا جميعاً. أدخل رقم هاتفك أدناه لاستعادة كلمة المرور الخاصة بك"
  },
  tourScheduled:{
    en: "Tour scheduled successfully , rentak agent will contact you in 2 business days , Thanks",
    ar: "تمت جدولة الجولة بنجاح، وسيتصل بك وكيل رينتك خلال يومي عمل، شكرًا"
  },
  createPassword: {
    en: "Create Password",
    ar: "إنشاء كلمة المرور"
  },
  reenterPassword:{
    en: "Re-enter Password",
    ar: "إعادة إدخال كلمة المرور"
  },
  resetPassword: {
    en: "Reset Password",
    ar: "إعادة تعيين كلمة المرور"
  },
  resetPasswordSubTitle: {
    en: "Your previous has been reset. Please set a new password for your account.",
    ar: "تمت إعادة تعيين السابق الخاص بك. يرجى تعيين كلمة مرور جديدة لحسابك."
  }
});
