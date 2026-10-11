// Quick facts + callout UI, 4 languages. Values are general type facts (NFPA 10 intervals), not model-specific numbers.
const T=(ar,en,ku,ckb)=>({ar,en,ku,ckb});
export const FX_UI={
ar:{facts:'معلومات سريعة',gauge:'مقياس الضغط',yes:'موجود',no:'غير موجود — يُفحص بالوزن',prop:'طريقة الدفع',nozzle:'نوع الفوهة',monthly:'الفحص البصري',monthlyV:'شهرياً',annual:'الصيانة',annualV:'سنوياً لدى جهة معتمدة',hydro:'الاختبار الهيدروستاتيكي',years:'كل {n} سنوات (NFPA 10)',suits:'يُستخدم على',notFor:'لا يُستخدم على',labels:'أسماء القطع',cmp:'مقارنة الأنواع',cmpT:'مقارنة جميع أنواع الطفايات',safety:'تذكير السلامة'},
en:{facts:'Quick facts',gauge:'Pressure gauge',yes:'Yes',no:'No — checked by weight',prop:'Expulsion',nozzle:'Nozzle type',monthly:'Visual check',monthlyV:'Monthly',annual:'Maintenance',annualV:'Annually, by an approved company',hydro:'Hydrostatic test',years:'Every {n} years (NFPA 10)',suits:'Use on',notFor:'Do not use on',labels:'Part labels',cmp:'Compare types',cmpT:'Compare all extinguisher types',safety:'Safety reminder'},
ku:{facts:'زانیاریێن لەز',gauge:'پەستانپێڤ',yes:'هەیە',no:'نینە — ب کێشانێ دهێتە پشکنین',prop:'رێکا پالدانێ',nozzle:'جۆرێ دەڤکی',monthly:'پشکنینا چاڤی',monthlyV:'هەر هەیڤ',annual:'چاککرن',annualV:'سالانە لای لایەنەکێ پەسەندکری',hydro:'تاقیکرنا هایدرۆستاتیکی',years:'هەر {n} سال (NFPA 10)',suits:'بکاربینە ل سەر',notFor:'بکار نەئینە ل سەر',labels:'ناڤێن پارچان',cmp:'بەراوردکرنا جۆران',cmpT:'بەراوردکرنا هەمی جۆرێن ئاگرکوژێ',safety:'بیرئینانا سەلامەتیێ'},
ckb:{facts:'زانیاریی خێرا',gauge:'پێوەری پەستان',yes:'هەیە',no:'نییە — بە کێشان دەپشکنرێت',prop:'ڕێگای پاڵنان',nozzle:'جۆری سەری بۆری',monthly:'پشکنینی بینراو',monthlyV:'مانگانە',annual:'چاککردنەوە',annualV:'ساڵانە لای لایەنێکی مۆڵەتدار',hydro:'تاقیکردنەوەی هایدرۆستاتیکی',years:'هەر {n} ساڵ (NFPA 10)',suits:'بەکاری بهێنە لەسەر',notFor:'بەکاری مەهێنە لەسەر',labels:'ناوی پارچەکان',cmp:'بەراوردی جۆرەکان',cmpT:'بەراوردی هەموو جۆرەکانی ئاگرکوژێنەوە',safety:'بیرخستنەوەی سەلامەتی'}};
const STORED=T('ضغط مخزّن بالنيتروجين','Stored pressure (nitrogen)','پەستانا هەلگرتی (نایترۆجین)','پەستانی هەڵگیراو (نایترۆجین)');
export const FX_TYPE={
abc:{hydro:12,prop:STORED,noz:T('بوق قصير','Short horn','بۆقێ کورت','شەیپووری کورت')},
co2:{hydro:5,prop:T('ذاتي الدفع (CO2 المسال)','Self-expelling (liquefied CO2)','خۆ-پالدان (CO2 یا شل)','خۆ-پاڵنان (CO2 ی شل)'),noz:T('بوق كبير بمقبض معزول','Large horn with insulated grip','بۆقێ مەزن ب دەستکێ ئیزۆلەکری','شەیپووری گەورە بە دەسکی ئیزۆلەکراو')},
water:{hydro:5,prop:STORED,noz:T('فوهة نفث','Jet nozzle','دەڤکێ فیشەک','سەری فیشەکی')},
foam:{hydro:5,prop:STORED,noz:T('فوهة رغوة هوائية','Aspirating foam nozzle','دەڤکێ کەفێ یێ هەوایی','سەری کەفی هەوایی')},
wetchem:{hydro:5,prop:STORED,noz:T('رمح رش','Applicator lance','لانسا رشاندنێ','لانسی پرژاندن')},
clean:{hydro:12,prop:STORED,noz:T('بوق','Horn','بۆق','شەیپوور')}};
