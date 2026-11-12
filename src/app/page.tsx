import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fdfbf7] text-[#0e2047]">
      {/* Top Bar */}
      <div className="bg-[#08122a] text-slate-300 py-2.5 px-4 text-xs sm:text-sm border-b border-[#18336d]/40">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4 sm:gap-6">
            <span className="flex items-center gap-1.5">
              <span className="text-[#c29a93]">📍</span>
              برج العاصمة سيتي لايت - الدور السادس مكتب (601) - اللبيني - الجيزة
            </span>
          </div>
          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href="tel:+201110359358"
              className="hover:text-white transition-colors flex items-center gap-1.5 font-medium"
              dir="ltr"
            >
              <span className="text-[#c29a93]">📞</span>
              +20 11 10359358
            </a>
            <a
              href="mailto:Contact@ElGendyandPartners.com"
              className="hover:text-white transition-colors hidden md:inline"
            >
              Contact@ElGendyandPartners.com
            </a>
          </div>
        </div>
      </div>

      {/* Main Header / Nav */}
      <header className="sticky top-0 z-50 bg-[#0e2047]/95 backdrop-blur-md text-white border-b border-[#18336d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-[#c29a93] to-[#5e5646] flex items-center justify-center font-serif text-2xl font-bold text-white shadow-md">
              G
            </div>
            <div>
              <div className="text-lg sm:text-xl font-bold tracking-tight text-white leading-tight">
                الجندي للمحاماة
              </div>
              <div className="text-[11px] tracking-widest uppercase text-[#c29a93] font-medium leading-none mt-0.5 font-serif">
                El Gendy & Partners
              </div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-200">
            <Link href="#about" className="hover:text-[#c29a93] transition-colors">
              عن المكتب
            </Link>
            <Link href="#practice-areas" className="hover:text-[#c29a93] transition-colors">
              مجالات الممارسة
            </Link>
            <Link href="#why-us" className="hover:text-[#c29a93] transition-colors">
              لماذا تختارنا
            </Link>
            <Link href="#contact" className="hover:text-[#c29a93] transition-colors">
              تواصل معنا
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/201110359358?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D8%AD%D8%AC%D8%B2%20%D8%A7%D8%B3%D8%AA%D8%B4%D8%A7%D8%B1%D8%A9%20%D9%82%D8%A7%D9%86%D9%88%D9%86%D9%8A%D8%A9%20%D9%84%D8%AF%D9%89%20%D9%85%D9%83%D8%AA%D8%A8%20%D8%A7%D9%84%D8%AC%D9%86%D8%AF%D9%8A%20%D9%84%D9%84%D9%85%D8%AD%D8%A7%D9%85%D8%A7%D8%A9"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-md bg-gradient-to-r from-[#c29a93] to-[#a97f78] hover:from-[#a97f78] hover:to-[#c29a93] text-white text-sm font-semibold shadow transition-all duration-200 transform hover:-translate-y-0.5"
            >
              حجز استشارة قانونية
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-[#0e2047] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#c29a93_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#18336d]/60 border border-[#c29a93]/30 text-[#c29a93] text-xs font-semibold mb-6">
              <span>🏛️</span>
              <span>خبرة رائدة في قانون الشركات والمحاكم الاقتصادية</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight font-serif mb-6">
              شريككم القانوني الموثوق لحماية وتنمية استثماراتكم
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-10">
              نقدم حلولاً واستشارات قانونية متكاملة للشركات ورجال الأعمال، بدءاً من التأسيس والحوكمة وحتى الترافع أمام المحاكم الاقتصادية والجنائية والمدنية بأعلى معايير الاحترافية.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="px-8 py-3.5 rounded-md bg-[#c29a93] hover:bg-[#a97f78] text-white font-semibold text-base shadow-lg transition-all duration-200"
              >
                طلب استشارة خاصة
              </a>
              <a
                href="#practice-areas"
                className="px-8 py-3.5 rounded-md bg-transparent hover:bg-white/10 text-white font-semibold text-base border border-slate-400 transition-all duration-200"
              >
                استكشف مجالات الممارسة
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section id="practice-areas" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs uppercase tracking-widest text-[#c29a93] font-bold mb-2">
              تخصصاتنا القانونية
            </h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-[#0e2047] font-serif">
              مجالات الممارسة والتمثيل القضائي
            </h3>
            <div className="w-20 h-1 bg-[#c29a93] mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="p-8 rounded-xl bg-[#fdfbf7] border border-slate-200/80 hover:border-[#c29a93] transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between group">
              <div>
                <div className="w-14 h-14 rounded-lg bg-[#0e2047] text-[#c29a93] flex items-center justify-center text-2xl mb-6 group-hover:scale-105 transition-transform">
                  🏢
                </div>
                <h4 className="text-xl font-bold text-[#0e2047] mb-3 font-serif">
                  قانون الشركات والتأسيس
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  تأسيس كافة أشكال الشركات التجارية (أموال، أشخاص، مساهمة، وشركات الشخص الواحد)، صياغة عقود التأسيس، والتعامل مع الهيئة العامة للاستثمار (GAFI).
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-200/60 text-xs font-semibold text-[#c29a93]">
                تأسيس • تراخيص • حوكمة
              </div>
            </div>

            {/* Card 2 */}
            <div className="p-8 rounded-xl bg-[#fdfbf7] border border-slate-200/80 hover:border-[#c29a93] transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between group">
              <div>
                <div className="w-14 h-14 rounded-lg bg-[#0e2047] text-[#c29a93] flex items-center justify-center text-2xl mb-6 group-hover:scale-105 transition-transform">
                  📈
                </div>
                <h4 className="text-xl font-bold text-[#0e2047] mb-3 font-serif">
                  قانون سوق المال والاستثمار
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  الاستشارات لعمليات الطرح، الاستحواذ والاندماج (M&A)، والامتثال لمعايير الهيئة العامة للرقابة المالية والبورصة المصرية.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-200/60 text-xs font-semibold text-[#c29a93]">
                رقابة مالية • طروحات • صفقات
              </div>
            </div>

            {/* Card 3 */}
            <div className="p-8 rounded-xl bg-[#fdfbf7] border border-slate-200/80 hover:border-[#c29a93] transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between group">
              <div>
                <div className="w-14 h-14 rounded-lg bg-[#0e2047] text-[#c29a93] flex items-center justify-center text-2xl mb-6 group-hover:scale-105 transition-transform">
                  ⚖️
                </div>
                <h4 className="text-xl font-bold text-[#0e2047] mb-3 font-serif">
                  المحاكم الاقتصادية
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  الترافع أمام الدوائر الابتدائية والاستئنافية في قضايا الإفلاس، الشيكات التجارية، الملكية الفكرية، والمنازعات المصرفية والتجارية المعقدة.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-200/60 text-xs font-semibold text-[#c29a93]">
                منازعات تجارية • إفلاس • بنوك
              </div>
            </div>

            {/* Card 4 */}
            <div className="p-8 rounded-xl bg-[#fdfbf7] border border-slate-200/80 hover:border-[#c29a93] transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between group">
              <div>
                <div className="w-14 h-14 rounded-lg bg-[#0e2047] text-[#c29a93] flex items-center justify-center text-2xl mb-6 group-hover:scale-105 transition-transform">
                  📜
                </div>
                <h4 className="text-xl font-bold text-[#0e2047] mb-3 font-serif">
                  المحاكم الجنائية والمدنية
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  الدفاع في قضايا الأموال العامة والجرائم المالية للشركات، فضلاً عن الدعاوى المدنية والتعويضات والنزاعات العقارية الكبرى.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-200/60 text-xs font-semibold text-[#c29a93]">
                أموال عامة • تعويضات • عقود
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us / Firm Ethos */}
      <section id="why-us" className="py-20 bg-[#08122a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-xs uppercase tracking-widest text-[#c29a93] font-bold mb-2">
                قيم المكتب وركائز العمل
              </h2>
              <h3 className="text-3xl sm:text-4xl font-bold text-white font-serif leading-tight mb-6">
                رؤية قانونية دقيقة تُترجم إلى أمان استثماري لشركائنا
              </h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                نؤمن في مكتب الجندي للمحاماة بأن المشورة القانونية الوقائية هي الدرع الحقيقي لأي نشاط تجاري. لذلك، لا يقتصر دورنا على تمثيل العملاء في ساحات المحاكم، بل نسعى لبناء هياكل قانونية صلبة تقي من النزاعات وتدعم النمو المستدام.
              </p>
              <ul className="space-y-4 text-slate-200 text-sm">
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#c29a93]/20 text-[#c29a93] flex items-center justify-center text-xs font-bold">✓</span>
                  <span>سرية مطلقة والتزام صارم بأخلاقيات المهنة وميثاق الشرف القضائي.</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#c29a93]/20 text-[#c29a93] flex items-center justify-center text-xs font-bold">✓</span>
                  <span>فريق عمل متخصص ذو باع طويل أمام المحاكم الاقتصادية والتجارية.</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#c29a93]/20 text-[#c29a93] flex items-center justify-center text-xs font-bold">✓</span>
                  <span>استجابة سريعة ومتابعة دورية مستمرة لملفات وقضايا الموكلين.</span>
                </li>
              </ul>
            </div>
            <div className="p-8 rounded-2xl bg-[#0e2047] border border-[#18336d] shadow-xl">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div className="p-6 rounded-xl bg-[#08122a]/60 border border-[#18336d]/60">
                  <div className="text-3xl sm:text-4xl font-bold text-[#c29a93] font-serif">100%</div>
                  <div className="text-xs text-slate-300 mt-2">سرية وخصوصية البيانات</div>
                </div>
                <div className="p-6 rounded-xl bg-[#08122a]/60 border border-[#18336d]/60">
                  <div className="text-3xl sm:text-4xl font-bold text-[#c29a93] font-serif">+20</div>
                  <div className="text-xs text-slate-300 mt-2">تخصص فرعي وتجاري</div>
                </div>
                <div className="p-6 rounded-xl bg-[#08122a]/60 border border-[#18336d]/60">
                  <div className="text-3xl sm:text-4xl font-bold text-[#c29a93] font-serif">GAFI</div>
                  <div className="text-xs text-slate-300 mt-2">اعتماد وتأسيس سريع</div>
                </div>
                <div className="p-6 rounded-xl bg-[#08122a]/60 border border-[#18336d]/60">
                  <div className="text-3xl sm:text-4xl font-bold text-[#c29a93] font-serif">24/7</div>
                  <div className="text-xs text-slate-300 mt-2">استجابة فورية للأزمات</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 lg:py-28 bg-[#fdfbf7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs uppercase tracking-widest text-[#c29a93] font-bold mb-2">
              تواصل مباشر
            </h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-[#0e2047] font-serif">
              تفضل بزيارتنا أو احجز موعد استشارة
            </h3>
            <div className="w-20 h-1 bg-[#c29a93] mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="p-8 rounded-xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between space-y-6">
              <div>
                <h4 className="text-xl font-bold text-[#0e2047] mb-6 font-serif">
                  بيانات الاتصال والمقر
                </h4>
                <div className="space-y-6 text-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#0e2047] text-[#c29a93] flex items-center justify-center shrink-0">
                      📍
                    </div>
                    <div>
                      <div className="font-bold text-[#0e2047]">عنوان المكتب</div>
                      <div className="text-slate-600 mt-1 leading-relaxed">
                        برج العاصمة سيتي لايت - الدور السادس مكتب رقم (601) - اللبيني - فيصل / الهرم - الجيزة
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#0e2047] text-[#c29a93] flex items-center justify-center shrink-0">
                      📞
                    </div>
                    <div>
                      <div className="font-bold text-[#0e2047]">الهاتف / واتساب</div>
                      <div className="mt-1 leading-relaxed">
                        <a href="tel:+201110359358" className="text-slate-700 hover:text-[#c29a93] font-medium" dir="ltr">
                          +20 11 10359358
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#0e2047] text-[#c29a93] flex items-center justify-center shrink-0">
                      ✉️
                    </div>
                    <div>
                      <div className="font-bold text-[#0e2047]">البريد الإلكتروني
                      </div>
                      <div className="mt-1 leading-relaxed">
                        <a href="mailto:Contact@ElGendyandPartners.com" className="text-slate-700 hover:text-[#c29a93]">
                          Contact@ElGendyandPartners.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100">
                <div className="text-xs text-slate-500 mb-3">ساعات العمل الرسمية:</div>
                <div className="text-sm text-slate-800 font-semibold">
                  الأحد - الخميس: 9:00 صباحاً - 6:00 مساءً
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2 p-8 rounded-xl bg-white border border-slate-200 shadow-sm">
              <h4 className="text-xl font-bold text-[#0e2047] mb-2 font-serif">
                طلب استشارة قانونية سرية
              </h4>
              <p className="text-slate-600 text-sm mb-6">
                يرجى ملء النموذج أدناه، وسيقوم أحد مستشارينا بالتواصل معكم خلال 24 ساعة عمل.
              </p>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      الاسم الكامل / اسم الشركة *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="أدخل اسمكم أو اسم الكيان"
                      className="w-full px-4 py-2.5 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#c29a93] focus:border-transparent text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      رقم الهاتف (واتساب) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="01xxxxxxxxx"
                      className="w-full px-4 py-2.5 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#c29a93] focus:border-transparent text-sm"
                      dir="ltr"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    مجال الاستشارة المطلوب *
                  </label>
                  <select className="w-full px-4 py-2.5 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#c29a93] focus:border-transparent text-sm bg-white">
                    <option>تأسيس شركات وتراخيص تجارية</option>
                    <option>سوق المال والرقابة المالية والاستحواذ</option>
                    <option>قضايا المحاكم الاقتصادية والمنازعات التجارية</option>
                    <option>قضايا جنائية ومدنية وأموال عامة</option>
                    <option>صياغة ومراجعة عقود واتفاقيات</option>
                    <option>استشارة قانونية عامة</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    موضوع الاستشارة بإيجاز
                  </label>
                  <textarea
                    rows={4}
                    placeholder="اذكر ملخصاً موجزاً عن الموضوع أو القضية..."
                    className="w-full px-4 py-2.5 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#c29a93] focus:border-transparent text-sm"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-md bg-[#0e2047] hover:bg-[#18336d] text-white font-semibold text-sm transition-colors shadow-md"
                >
                  إرسال الطلب الآن
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#08122a] text-slate-400 py-12 border-t border-[#18336d]/50 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-lg font-bold text-white mb-2 font-serif">
                الجندي للمحاماة والاستشارات القانونية
              </div>
              <div className="text-xs text-[#c29a93] tracking-wider uppercase font-serif mb-4">
                El Gendy & Partners
              </div>
              <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
                مكتب استشارات قانونية متكامل يجمع بين الفهم العميق للبيئة الاستثمارية المصرية وأعلى معايير التمثيل القضائي أمام كافة المحاكم الاقتصادية والمدنية والجنائية.
              </p>
            </div>
            <div>
              <div className="text-white font-bold text-sm mb-3">روابط سريعة</div>
              <ul className="space-y-2 text-xs">
                <li><Link href="#about" className="hover:text-white transition-colors">عن المكتب</Link></li>
                <li><Link href="#practice-areas" className="hover:text-white transition-colors">مجالات الممارسة</Link></li>
                <li><Link href="#why-us" className="hover:text-white transition-colors">قيمنا ومبادئنا</Link></li>
                <li><Link href="#contact" className="hover:text-white transition-colors">حجز استشارة</Link></li>
              </ul>
            </div>
            <div>
              <div className="text-white font-bold text-sm mb-3">المقر الرئيسي</div>
              <p className="text-xs text-slate-400 leading-relaxed mb-3">
                برج العاصمة سيتي لايت - الدور السادس مكتب (601) - اللبيني - فيصل / الهرم - الجيزة، جمهورية مصر العربية.
              </p>
              <p className="text-xs text-slate-400">
                هاتف: <span dir="ltr" className="text-slate-200 font-medium">+20 11 10359358</span>
              </p>
            </div>
          </div>
          <div className="pt-6 border-t border-slate-800 text-center text-xs text-slate-500">
            جميع الحقوق محفوظة © 2026 الجندي للمحاماة والاستشارات القانونية | El Gendy & Partners.
          </div>
        </div>
      </footer>
    </div>
  );
}
