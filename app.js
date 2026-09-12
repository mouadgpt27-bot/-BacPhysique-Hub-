/* ═══════════════════════════════════════════
   BacPhysique Hub — Complete Application Logic
   2BAC PC BIOF — Interactive Learning Platform
   ═══════════════════════════════════════════ */

// ======================== DATA: LESSONS DATABASE ========================

const lessonsData = {
    semester1: {
        physics: [
            {
                id: 'p1s1',
                num: 1,
                title: 'الموجات الميكانيكية المتوالية',
                titleFr: 'Ondes mécaniques progressives',
                description: 'تعريف الموجة الميكانيكية، الموجات الطولية والمستعرضة، سرعة الانتشار، التأخر الزمني.',
                tags: ['الموجات', 'الانتشار', 'التأخر الزمني'],
                pdfUrl: '#',
                videos: [
                    { title: 'الموجات الميكانيكية - الأستاذ نورالدين', channel: 'Noureddine Amarkhodja', url: 'https://www.youtube.com/results?search_query=ondes+mecaniques+progressives+2bac+pc+biof' },
                    { title: 'شرح مبسط للموجات الميكانيكية', channel: 'Physique Chimie BAC', url: 'https://www.youtube.com/results?search_query=موجات+ميكانيكية+متوالية+2+باك' },
                    { title: 'تمارين محلولة - الموجات', channel: 'Prof Rachid', url: 'https://www.youtube.com/results?search_query=exercices+ondes+mecaniques+2bac+pc' }
                ]
            },
            {
                id: 'p2s1',
                num: 2,
                title: 'الموجات الميكانيكية المتوالية الدورية',
                titleFr: 'Ondes mécaniques progressives périodiques',
                description: 'الموجات الدورية، الدور والتواتر، الطول الموجي، ظاهرة الحيود.',
                tags: ['الدور', 'الطول الموجي', 'الحيود'],
                pdfUrl: '#',
                videos: [
                    { title: 'الموجات الدورية - شرح كامل', channel: 'BAC Libre PC', url: 'https://www.youtube.com/results?search_query=ondes+periodiques+2bac+pc+biof' },
                    { title: 'ظاهرة الحيود - تمارين', channel: 'Prof Physique', url: 'https://www.youtube.com/results?search_query=diffraction+2bac+pc+biof' }
                ]
            },
            {
                id: 'p3s1',
                num: 3,
                title: 'التحولات النووية',
                titleFr: 'Transformations nucléaires',
                description: 'النشاط الإشعاعي، قانون التفكك، عمر النصف، الطاقة النووية، علاقة أينشتاين.',
                tags: ['النشاط الإشعاعي', 'التفكك', 'E=mc²'],
                pdfUrl: '#',
                videos: [
                    { title: 'التحولات النووية - شرح شامل', channel: 'Noureddine', url: 'https://www.youtube.com/results?search_query=transformations+nucleaires+2bac+pc+biof' },
                    { title: 'تمارين النشاط الإشعاعي', channel: 'Prof Rachid', url: 'https://www.youtube.com/results?search_query=radioactivite+exercices+2bac+pc' }
                ]
            },
            {
                id: 'p4s1',
                num: 4,
                title: 'التناقص الإشعاعي',
                titleFr: 'Décroissance radioactive',
                description: 'قانون التناقص الإشعاعي N(t)=N₀e^(-λt)، ثابت التفكك، عمر النصف t₁/₂.',
                tags: ['التناقص', 'عمر النصف', 'الدالة الأسية'],
                pdfUrl: '#',
                videos: [
                    { title: 'التناقص الإشعاعي - ملخص + تمارين', channel: 'Physique Maroc', url: 'https://www.youtube.com/results?search_query=decroissance+radioactive+2bac+pc' }
                ]
            },
            {
                id: 'p5s1',
                num: 5,
                title: 'الكهرباء: ثنائي القطب RC',
                titleFr: 'Dipôle RC',
                description: 'شحن وتفريغ المكثف، المعادلة التفاضلية، ثابت الزمن τ=RC.',
                tags: ['المكثف', 'RC', 'ثابت الزمن'],
                pdfUrl: '#',
                videos: [
                    { title: 'دارة RC - الشحن والتفريغ', channel: 'Prof Noureddine', url: 'https://www.youtube.com/results?search_query=dipole+RC+2bac+pc+biof' },
                    { title: 'المعادلة التفاضلية لـ RC', channel: 'Physique BAC', url: 'https://www.youtube.com/results?search_query=equation+differentielle+RC+2bac' }
                ]
            },
            {
                id: 'p6s1',
                num: 6,
                title: 'الكهرباء: ثنائي القطب RL',
                titleFr: 'Dipôle RL',
                description: 'استجابة دارة RL لإقلاع وقطع التيار، المعادلة التفاضلية، τ=L/R.',
                tags: ['الوشيعة', 'RL', 'المعادلة التفاضلية'],
                pdfUrl: '#',
                videos: [
                    { title: 'دارة RL - شرح كامل', channel: 'Prof Physique', url: 'https://www.youtube.com/results?search_query=dipole+RL+2bac+pc+biof' }
                ]
            },
            {
                id: 'p7s1',
                num: 7,
                title: 'الكهرباء: الذبذبات الحرة في دارة RLC',
                titleFr: 'Oscillations libres dans un circuit RLC',
                description: 'الذبذبات الحرة غير المخمدة والمخمدة، الدور الخاص T₀=2π√(LC).',
                tags: ['RLC', 'الذبذبات', 'الدور الخاص'],
                pdfUrl: '#',
                videos: [
                    { title: 'دارة RLC - الذبذبات الحرة', channel: 'BAC PC', url: 'https://www.youtube.com/results?search_query=oscillations+libres+RLC+2bac+pc+biof' }
                ]
            }
        ],
        chemistry: [
            {
                id: 'c1s1',
                num: 1,
                title: 'التحولات السريعة والبطيئة',
                titleFr: 'Transformations rapides et lentes',
                description: 'التمييز بين التحولات السريعة والبطيئة، العوامل الحركية (درجة الحرارة، التركيز، المحفز).',
                tags: ['سريعة', 'بطيئة', 'العوامل الحركية'],
                pdfUrl: '#',
                videos: [
                    { title: 'التحولات السريعة والبطيئة', channel: 'Prof Chimie', url: 'https://www.youtube.com/results?search_query=transformations+rapides+lentes+2bac+pc' }
                ]
            },
            {
                id: 'c2s1',
                num: 2,
                title: 'قياس سرعة التفاعل - المتابعة الزمنية',
                titleFr: 'Suivi temporel - Vitesse de réaction',
                description: 'سرعة التفاعل الحجمية، طرق المتابعة (قياس الضغط، الناقلية، قياس الحجم...).',
                tags: ['سرعة التفاعل', 'المتابعة الزمنية', 'التركيز'],
                pdfUrl: '#',
                videos: [
                    { title: 'سرعة التفاعل الكيميائي', channel: 'Chimie BAC', url: 'https://www.youtube.com/results?search_query=vitesse+reaction+2bac+pc+biof' },
                    { title: 'المتابعة الزمنية - تمارين', channel: 'Prof Rachid', url: 'https://www.youtube.com/results?search_query=suivi+temporel+2bac+pc' }
                ]
            },
            {
                id: 'c3s1',
                num: 3,
                title: 'التحولات الكيميائية التي تحدث في المنحيين',
                titleFr: 'Transformations dans les deux sens - Équilibre',
                description: 'حالة التوازن الكيميائي، خارج التفاعل Qr، ثابت التوازن K.',
                tags: ['التوازن', 'Qr', 'K'],
                pdfUrl: '#',
                videos: [
                    { title: 'التوازن الكيميائي - مفهوم K و Qr', channel: 'Prof Chimie', url: 'https://www.youtube.com/results?search_query=equilibre+chimique+2bac+pc+biof' }
                ]
            },
            {
                id: 'c4s1',
                num: 4,
                title: 'التحولات المقرونة بالتفاعلات حمض-قاعدة',
                titleFr: 'Réactions acido-basiques',
                description: 'مزدوجات حمض-قاعدة، pH، Ka، pKa، المحاليل المنظمة، المعايرة.',
                tags: ['حمض-قاعدة', 'pH', 'المعايرة'],
                pdfUrl: '#',
                videos: [
                    { title: 'تفاعلات حمض-قاعدة - شرح كامل', channel: 'Prof Noureddine', url: 'https://www.youtube.com/results?search_query=reactions+acido+basiques+2bac+pc+biof' },
                    { title: 'المعايرة pH-مترية', channel: 'Chimie BAC', url: 'https://www.youtube.com/results?search_query=titrage+acide+base+2bac+pc' }
                ]
            }
        ],
        math: [
            {
                id: 'm1s1',
                num: 1,
                title: 'المتتاليات العددية',
                titleFr: 'Suites numériques',
                description: 'المتتالية الحسابية والهندسية، التقارب، الاتجاه نحو ∞، المتتاليات المعرفة بالتراجع.',
                tags: ['متتاليات', 'تقارب', 'حسابية', 'هندسية'],
                pdfUrl: '#',
                videos: [
                    { title: 'المتتاليات العددية - ملخص شامل', channel: 'Math Maroc', url: 'https://www.youtube.com/results?search_query=suites+numeriques+2bac+pc+biof' }
                ]
            },
            {
                id: 'm2s1',
                num: 2,
                title: 'النهايات والاتصال',
                titleFr: 'Limites et continuité',
                description: 'نهايات الدوال، الأشكال غير المحددة، الاتصال، مبرهنة القيم المتوسطة.',
                tags: ['نهايات', 'اتصال', 'القيم المتوسطة'],
                pdfUrl: '#',
                videos: [
                    { title: 'النهايات والاتصال - 2BAC', channel: 'Prof Math', url: 'https://www.youtube.com/results?search_query=limites+continuite+2bac+pc+biof' }
                ]
            },
            {
                id: 'm3s1',
                num: 3,
                title: 'الاشتقاق وتطبيقاته',
                titleFr: 'Dérivation et applications',
                description: 'قواعد الاشتقاق، الاشتقاق المركب، دراسة الدوال، المماس، التقعر.',
                tags: ['الاشتقاق', 'دراسة الدوال', 'المماس'],
                pdfUrl: '#',
                videos: [
                    { title: 'الاشتقاق - تمارين وتطبيقات', channel: 'Math BAC', url: 'https://www.youtube.com/results?search_query=derivation+applications+2bac+pc+biof' }
                ]
            },
            {
                id: 'm4s1',
                num: 4,
                title: 'الدوال الأسية واللوغاريتمية',
                titleFr: 'Fonctions exponentielles et logarithmiques',
                description: 'الدالة exp، الدالة ln، خاصيات، اشتقاق، دراسة دوال، مقارنة النمو.',
                tags: ['exp', 'ln', 'مقارنة النمو'],
                pdfUrl: '#',
                videos: [
                    { title: 'الدالة الأسية واللوغاريتمية', channel: 'Prof Math Maroc', url: 'https://www.youtube.com/results?search_query=fonction+exponentielle+logarithme+2bac+pc' }
                ]
            },
            {
                id: 'm5s1',
                num: 5,
                title: 'الدوال الأصلية والحساب التكاملي',
                titleFr: 'Primitives et calcul intégral',
                description: 'الدالة الأصلية، التكامل المحدد، خاصيات التكامل، حساب المساحات.',
                tags: ['التكامل', 'الدالة الأصلية', 'المساحة'],
                pdfUrl: '#',
                videos: [
                    { title: 'الحساب التكاملي - 2BAC PC', channel: 'Math BAC', url: 'https://www.youtube.com/results?search_query=calcul+integral+2bac+pc+biof' }
                ]
            }
        ],
        svt: [
            {
                id: 'sv1s1',
                num: 1,
                title: 'استهلاك المادة العضوية وتدفق الطاقة',
                titleFr: 'Consommation de la matière organique et flux d\'énergie',
                description: 'التفاعلات المسؤولة عن تحرير الطاقة (التنفس، التخمر)، حصيلة الطاقة.',
                tags: ['التنفس', 'التخمر', 'ATP'],
                pdfUrl: '#',
                videos: [
                    { title: 'استهلاك المادة العضوية', channel: 'SVT Maroc', url: 'https://www.youtube.com/results?search_query=consommation+matiere+organique+2bac+pc' }
                ]
            },
            {
                id: 'sv2s1',
                num: 2,
                title: 'طبيعة السيالة العصبية',
                titleFr: 'Nature du message nerveux',
                description: 'كمون الراحة، كمون العمل، انتشار السيالة العصبية، المشبك.',
                tags: ['السيالة العصبية', 'كمون العمل', 'المشبك'],
                pdfUrl: '#',
                videos: [
                    { title: 'السيالة العصبية - شرح مبسط', channel: 'SVT BAC', url: 'https://www.youtube.com/results?search_query=message+nerveux+2bac+svt' }
                ]
            },
            {
                id: 'sv3s1',
                num: 3,
                title: 'مفهوم الخبر الوراثي',
                titleFr: 'Notion d\'information génétique',
                description: 'ADN، النسخ، الترجمة، الطفرات، الهندسة الوراثية.',
                tags: ['ADN', 'النسخ', 'الترجمة'],
                pdfUrl: '#',
                videos: [
                    { title: 'التعبير الجيني - من ADN إلى البروتين', channel: 'Prof SVT', url: 'https://www.youtube.com/results?search_query=expression+genetique+2bac+pc+svt' }
                ]
            }
        ]
    },
    semester2: {
        physics: [
            {
                id: 'p1s2',
                num: 1,
                title: 'الموجات الضوئية',
                titleFr: 'Ondes lumineuses',
                description: 'حيود الضوء، التبدد، الأشعة X، الطيف الكهرومغناطيسي.',
                tags: ['الحيود', 'التبدد', 'الطيف'],
                pdfUrl: '#',
                videos: [
                    { title: 'الموجات الضوئية - 2BAC PC', channel: 'Prof Physique', url: 'https://www.youtube.com/results?search_query=ondes+lumineuses+2bac+pc+biof' }
                ]
            },
            {
                id: 'p2s2',
                num: 2,
                title: 'الذرة والميكانيك الكمية',
                titleFr: 'Atome et mécanique quantique',
                description: 'طيف الذرة، نموذج بور، مستويات الطاقة، الليزر.',
                tags: ['الطيف', 'بور', 'الليزر'],
                pdfUrl: '#',
                videos: [
                    { title: 'ميكانيك الكم والذرة', channel: 'Physique BAC', url: 'https://www.youtube.com/results?search_query=atome+mecanique+quantique+2bac+pc' }
                ]
            },
            {
                id: 'p3s2',
                num: 3,
                title: 'قوانين نيوتن',
                titleFr: 'Lois de Newton',
                description: 'القانون الأول والثاني والثالث، تطبيقات: السقوط الحر، المقذوفات، القمر الاصطناعي.',
                tags: ['نيوتن', 'السقوط الحر', 'المقذوفات'],
                pdfUrl: '#',
                videos: [
                    { title: 'قوانين نيوتن - تطبيقات', channel: 'Prof Rachid', url: 'https://www.youtube.com/results?search_query=lois+newton+2bac+pc+biof' }
                ]
            },
            {
                id: 'p4s2',
                num: 4,
                title: 'المجموعات المتذبذبة',
                titleFr: 'Systèmes oscillants mécaniques',
                description: 'النواس الوازن، النواس المرن، المعادلة التفاضلية، الدور الخاص.',
                tags: ['النواس', 'الذبذبات', 'الدور'],
                pdfUrl: '#',
                videos: [
                    { title: 'المجموعات المتذبذبة الميكانيكية', channel: 'Physique Maroc', url: 'https://www.youtube.com/results?search_query=systemes+oscillants+2bac+pc+biof' }
                ]
            },
            {
                id: 'p5s2',
                num: 5,
                title: 'الذبذبات القسرية في دارة RLC',
                titleFr: 'Oscillations forcées en RLC',
                description: 'الذبذبات القسرية، الرنين، الممانعة، عرض النطاق.',
                tags: ['الرنين', 'الممانعة', 'RLC'],
                pdfUrl: '#',
                videos: [
                    { title: 'الذبذبات القسرية والرنين', channel: 'Prof PC', url: 'https://www.youtube.com/results?search_query=oscillations+forcees+RLC+2bac+pc' }
                ]
            }
        ],
        chemistry: [
            {
                id: 'c1s2',
                num: 1,
                title: 'التحولات التلقائية لأعمدة وتحصيل الطاقة',
                titleFr: 'Piles et récupération d\'énergie',
                description: 'أعمدة الأكسدة-اختزال، القوة المحركة، سعة العمود.',
                tags: ['الأعمدة', 'القوة المحركة', 'أكسدة-اختزال'],
                pdfUrl: '#',
                videos: [
                    { title: 'الأعمدة الكهروكيميائية', channel: 'Prof Chimie', url: 'https://www.youtube.com/results?search_query=piles+electrochimiques+2bac+pc+biof' }
                ]
            },
            {
                id: 'c2s2',
                num: 2,
                title: 'التحولات القسرية - التحليل الكهربائي',
                titleFr: 'Électrolyse',
                description: 'مبدأ التحليل الكهربائي، التطبيقات الصناعية، كمية الكهرباء.',
                tags: ['التحليل الكهربائي', 'الطلاء', 'فاراداي'],
                pdfUrl: '#',
                videos: [
                    { title: 'التحليل الكهربائي - شرح وتمارين', channel: 'Chimie BAC', url: 'https://www.youtube.com/results?search_query=electrolyse+2bac+pc+biof' }
                ]
            },
            {
                id: 'c3s2',
                num: 3,
                title: 'التفاعلات في الكيمياء العضوية',
                titleFr: 'Réactions en chimie organique',
                description: 'تفاعلات الأسترة والحلمأة، الصابون، البوليميرات.',
                tags: ['الأسترة', 'الحلمأة', 'البوليميرات'],
                pdfUrl: '#',
                videos: [
                    { title: 'الكيمياء العضوية - الأسترة', channel: 'Prof Chimie Maroc', url: 'https://www.youtube.com/results?search_query=esterification+chimie+organique+2bac+pc' }
                ]
            }
        ],
        math: [
            {
                id: 'm1s2',
                num: 1,
                title: 'المعادلات التفاضلية',
                titleFr: 'Équations différentielles',
                description: 'المعادلات التفاضلية من الرتبة الأولى y\'+ay=b، والرتبة الثانية y\"+ω²y=0.',
                tags: ['معادلات تفاضلية', 'رتبة أولى', 'رتبة ثانية'],
                pdfUrl: '#',
                videos: [
                    { title: 'المعادلات التفاضلية - شرح كامل', channel: 'Math BAC', url: 'https://www.youtube.com/results?search_query=equations+differentielles+2bac+pc+biof' }
                ]
            },
            {
                id: 'm2s2',
                num: 2,
                title: 'الأعداد المركبة',
                titleFr: 'Nombres complexes',
                description: 'الشكل الجبري، المطلق، العمدة، الشكل المثلثي والأسي، صيغة أويلر.',
                tags: ['أعداد مركبة', 'المطلق', 'العمدة'],
                pdfUrl: '#',
                videos: [
                    { title: 'الأعداد المركبة - 2BAC PC', channel: 'Prof Math', url: 'https://www.youtube.com/results?search_query=nombres+complexes+2bac+pc+biof' }
                ]
            },
            {
                id: 'm3s2',
                num: 3,
                title: 'الهندسة الفضائية',
                titleFr: 'Géométrie dans l\'espace',
                description: 'المستقيمات والمستويات في الفضاء، التعامد، الحاصل السلمي، المسافات.',
                tags: ['الفضاء', 'المستويات', 'الحاصل السلمي'],
                pdfUrl: '#',
                videos: [
                    { title: 'الهندسة الفضائية - ملخص وتمارين', channel: 'Math Maroc', url: 'https://www.youtube.com/results?search_query=geometrie+espace+2bac+pc+biof' }
                ]
            },
            {
                id: 'm4s2',
                num: 4,
                title: 'الاحتمالات',
                titleFr: 'Probabilités',
                description: 'الاحتمال المشروط، الأحداث المستقلة، المتغير العشوائي، قانون الاحتمال.',
                tags: ['الاحتمالات', 'المتغير العشوائي', 'الأمل الرياضي'],
                pdfUrl: '#',
                videos: [
                    { title: 'الاحتمالات - 2BAC PC', channel: 'Prof Math', url: 'https://www.youtube.com/results?search_query=probabilites+2bac+pc+biof' }
                ]
            }
        ],
        svt: [
            {
                id: 'sv1s2',
                num: 1,
                title: 'علم الوراثة البشرية',
                titleFr: 'Génétique humaine',
                description: 'وراثة الصفات، شجرة النسب، الوراثة المرتبطة بالجنس، الشذوذات الصبغية.',
                tags: ['شجرة النسب', 'الجنس', 'الصبغيات'],
                pdfUrl: '#',
                videos: [
                    { title: 'علم الوراثة البشرية - شرح مبسط', channel: 'SVT BAC', url: 'https://www.youtube.com/results?search_query=genetique+humaine+2bac+svt' }
                ]
            },
            {
                id: 'sv2s2',
                num: 2,
                title: 'علم المناعة',
                titleFr: 'Immunologie',
                description: 'الاستجابة المناعية النوعية، الخلطية والخلوية، اللقاحات والأمصال.',
                tags: ['المناعة', 'اللقاح', 'الأجسام المضادة'],
                pdfUrl: '#',
                videos: [
                    { title: 'علم المناعة - شرح شامل', channel: 'Prof SVT Maroc', url: 'https://www.youtube.com/results?search_query=immunologie+2bac+svt+pc' }
                ]
            },
            {
                id: 'sv3s2',
                num: 3,
                title: 'الظواهر الجيولوجية المصاحبة لنشأة السلاسل الجبلية',
                titleFr: 'Phénomènes géologiques liés à l\'orogenèse',
                description: 'التحول، الكرانيتية، بنية السلاسل الجبلية.',
                tags: ['السلاسل الجبلية', 'التحول', 'الصفائح'],
                pdfUrl: '#',
                videos: [
                    { title: 'الجيولوجيا - نشأة السلاسل الجبلية', channel: 'SVT Maroc', url: 'https://www.youtube.com/results?search_query=orogene+chaines+montagnes+2bac+svt' }
                ]
            }
        ]
    }
};

// ======================== DATA: EXAMS DATABASE ========================

const examsData = [];
const subjects = ['physique', 'math', 'svt'];
const sessions = ['normale', 'rattrapage'];
const years = [2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016];

years.forEach(year => {
    sessions.forEach(session => {
        subjects.forEach(subject => {
            const subjectNames = {
                physique: 'الفيزياء والكيمياء',
                math: 'الرياضيات',
                svt: 'علوم الحياة والأرض'
            };
            const sessionNames = {
                normale: 'الدورة العادية',
                rattrapage: 'الدورة الاستدراكية'
            };
            examsData.push({
                id: `exam-${year}-${session}-${subject}`,
                year: year,
                session: session,
                sessionLabel: sessionNames[session],
                subject: subject,
                subjectLabel: subjectNames[subject],
                title: `${subjectNames[subject]} — ${sessionNames[session]} ${year}`,
                examUrl: '#',
                corrigeUrl: '#'
            });
        });
    });
});

// ======================== DATA: FORMULAS ========================

const formulasData = {
    'physics-formulas': [
        {
            group: '⚡ الكهرباء',
            items: [
                { name: 'قانون أوم', equation: 'U = R × I' },
                { name: 'شحنة المكثف', equation: 'q = C × Uc' },
                { name: 'طاقة المكثف', equation: 'E = ½ × C × Uc²' },
                { name: 'طاقة الوشيعة', equation: 'E = ½ × L × i²' },
                { name: 'الدور الخاص LC', equation: 'T₀ = 2π√(LC)' },
                { name: 'ثابت الزمن RC', equation: 'τ = R × C' },
                { name: 'ثابت الزمن RL', equation: 'τ = L / R' },
                { name: 'التيار والمكثف', equation: 'i = C × dUc/dt' },
                { name: 'توتر الوشيعة', equation: 'u_L = L × di/dt' },
                { name: 'القدرة الكهربائية', equation: 'P = U × I = R × I²' }
            ]
        },
        {
            group: '🌊 الموجات',
            items: [
                { name: 'سرعة الانتشار', equation: 'v = d / Δt' },
                { name: 'الطول الموجي', equation: 'λ = v × T = v / f' },
                { name: 'التأخر الزمني', equation: 'τ = d / v' },
                { name: 'شرط الحيود', equation: 'θ = λ / a' },
                { name: 'طاقة الفوتون', equation: 'E = h × ν = h × c / λ' }
            ]
        },
        {
            group: '🚀 الميكانيك',
            items: [
                { name: 'القانون الثاني لنيوتن', equation: 'ΣF⃗ = m × a⃗' },
                { name: 'الطاقة الحركية', equation: 'Ec = ½ × m × v²' },
                { name: 'طاقة الوضع', equation: 'Ep = m × g × h' },
                { name: 'دور النواس البسيط', equation: 'T₀ = 2π√(l/g)' },
                { name: 'دور النواس المرن', equation: 'T₀ = 2π√(m/k)' }
            ]
        },
        {
            group: '☢️ النووي',
            items: [
                { name: 'قانون التناقص', equation: 'N(t) = N₀ × e^(-λt)' },
                { name: 'عمر النصف', equation: 't₁/₂ = ln(2) / λ' },
                { name: 'علاقة أينشتاين', equation: 'E = Δm × c²' },
                { name: 'طاقة الربط', equation: 'Eℓ = Δm × c²' }
            ]
        }
    ],
    'chemistry-formulas': [
        {
            group: '🧪 كميات المادة والتراكيز',
            items: [
                { name: 'كمية المادة', equation: 'n = m / M' },
                { name: 'التركيز المولي', equation: 'C = n / V' },
                { name: 'التخفيف', equation: 'C₁V₁ = C₂V₂' },
                { name: 'كمية مادة الغاز', equation: 'n = V / Vm = PV / RT' }
            ]
        },
        {
            group: '⚗️ التوازن والحمض-قاعدة',
            items: [
                { name: 'pH', equation: 'pH = -log[H₃O⁺]' },
                { name: 'تركيز H₃O⁺', equation: '[H₃O⁺] = 10^(-pH)' },
                { name: 'الجداء الأيوني', equation: 'Ke = [H₃O⁺]×[OH⁻] = 10⁻¹⁴' },
                { name: 'Ka', equation: 'Ka = [A⁻]×[H₃O⁺] / [AH]' },
                { name: 'Henderson-Hasselbalch', equation: 'pH = pKa + log([A⁻]/[AH])' },
                { name: 'سرعة التفاعل', equation: 'v = (1/V) × dx/dt' },
                { name: 'نسبة التقدم النهائي', equation: 'τ = x_f / x_max' }
            ]
        },
        {
            group: '🔋 الأكسدة والاختزال',
            items: [
                { name: 'كمية الكهرباء', equation: 'Q = I × Δt' },
                { name: 'علاقة فاراداي', equation: 'n = Q / (n_e × F)' },
                { name: 'ثابت فاراداي', equation: 'F = 96500 C/mol' }
            ]
        }
    ],
    'math-formulas': [
        {
            group: '📐 الاشتقاق',
            items: [
                { name: 'مشتقة xⁿ', equation: '(xⁿ)\' = n × x^(n-1)' },
                { name: 'مشتقة eˣ', equation: '(eˣ)\' = eˣ' },
                { name: 'مشتقة ln(x)', equation: '(ln x)\' = 1/x' },
                { name: 'مشتقة sin(x)', equation: '(sin x)\' = cos(x)' },
                { name: 'مشتقة cos(x)', equation: '(cos x)\' = -sin(x)' },
                { name: 'مشتقة u×v', equation: '(uv)\' = u\'v + uv\'' },
                { name: 'مشتقة u/v', equation: '(u/v)\' = (u\'v - uv\') / v²' },
                { name: 'مشتقة مركبة', equation: '(f∘u)\' = u\' × f\'(u)' }
            ]
        },
        {
            group: '∫ التكامل',
            items: [
                { name: 'تكامل xⁿ', equation: '∫xⁿ dx = x^(n+1)/(n+1) + C' },
                { name: 'تكامل eˣ', equation: '∫eˣ dx = eˣ + C' },
                { name: 'تكامل 1/x', equation: '∫(1/x) dx = ln|x| + C' },
                { name: 'تكامل cos(x)', equation: '∫cos(x) dx = sin(x) + C' },
                { name: 'تكامل sin(x)', equation: '∫sin(x) dx = -cos(x) + C' }
            ]
        },
        {
            group: '📊 النهايات والدوال',
            items: [
                { name: 'مقارنة النمو', equation: 'lim(eˣ/xⁿ) = +∞ عند +∞' },
                { name: 'مقارنة النمو', equation: 'lim(ln(x)/xⁿ) = 0 عند +∞' },
                { name: 'نهاية مرجعية', equation: 'lim(sin(x)/x) = 1 عند 0' },
                { name: 'معادلة تفاضلية', equation: 'y\' + ay = b → y = Ce^(-ax) + b/a' },
                { name: 'معادلة تفاضلية', equation: 'y\\" + ω²y = 0 → y = Acos(ωt+φ)' }
            ]
        }
    ]
};

// ======================== DATA: AI TUTOR RESPONSES ========================

const aiResponses = {
    'جدول التقدم': `📊 **جدول التقدم (Tableau d'avancement)** هو أداة منظمة لتتبع كميات المادة أثناء التفاعل الكيميائي.

🔹 **الهيكل:**
| الحالة | التقدم x | المتفاعل A | المتفاعل B | الناتج C |
|---|---|---|---|---|
| ابتدائية | 0 | n₀(A) | n₀(B) | 0 |
| انتقالية | x | n₀(A)-a·x | n₀(B)-b·x | c·x |
| نهائية | x_max | ... | ... | ... |

🔹 **كيفية إيجاد x_max:**
- نضع كمية كل متفاعل ≥ 0
- x_max = min{n₀(A)/a, n₀(B)/b}
- المتفاعل الذي يعطي أصغر قيمة هو **المتفاعل المحد**

💡 هذا الجدول يستعمل في كل فصول الكيمياء بالباكالوريا!`,

    'قانون نيوتن الثاني': `🚀 **القانون الثاني لنيوتن** (Deuxième loi de Newton):

**ΣF⃗ = m × a⃗**

🔹 **المعنى:** مجموع القوى المؤثرة على جسم = كتلته × تسارعه

🔹 **الخطوات التطبيقية:**
1. حدد الجملة المدروسة
2. أحص جميع القوى المؤثرة (الوزن، رد الفعل، الاحتكاك...)
3. اختر معلم مناسب (محور x و y)
4. اسقط القوى على المحاور
5. طبق: ΣFx = m·ax و ΣFy = m·ay

🔹 **مثال:** سقوط حر (بدون احتكاك):
- القوة الوحيدة: الوزن P = m·g
- m·g = m·a → **a = g = 9.81 m/s²**

💡 هذا القانون هو أساس كل تمارين الميكانيك!`,

    'المتتاليات': `📊 **الفرق بين المتتالية الحسابية والهندسية:**

🔹 **المتتالية الحسابية** (Arithmétique):
- التعريف: U(n+1) = U(n) + r (r = الأساس)
- الحد العام: U(n) = U(0) + n×r
- المجموع: S = (n+1)(U₀+Uₙ)/2
- **تعرفها من:** الفرق بين حدين متتاليين ثابت

🔹 **المتتالية الهندسية** (Géométrique):
- التعريف: U(n+1) = U(n) × q (q = الأساس)
- الحد العام: U(n) = U(0) × qⁿ
- المجموع: S = U₀(1-q^(n+1))/(1-q)
- **تعرفها من:** النسبة بين حدين متتاليين ثابتة

💡 **نصيحة:** إذا كان U(n+1)-U(n) ثابت → حسابية
إذا كان U(n+1)/U(n) ثابت → هندسية`,

    'حساب pH': `🧪 **حساب pH محلول حمضي:**

🔹 **القاعدة الأساسية:**
**pH = -log[H₃O⁺]**

🔹 **حالة حمض قوي** (تفاعل تام):
- HCl, HNO₃, H₂SO₄...
- [H₃O⁺] = C (تركيز الحمض)
- **pH = -log(C)**
- مثال: C = 0.01 mol/L → pH = -log(0.01) = 2

🔹 **حالة حمض ضعيف** (تفاعل غير تام):
- CH₃COOH, ...
- [H₃O⁺] ≠ C (يجب حسابها من τ أو Ka)
- **pH > -log(C)**

🔹 **التحقق:** 
- محلول حمضي → pH < 7
- محلول قاعدي → pH > 7
- محلول محايد → pH = 7

💡 تذكر: pH = -log₁₀ وليس ln!`
};

// ======================== APP INITIALIZATION ========================

document.addEventListener('DOMContentLoaded', () => {
    initLoadingScreen();
    initNavigation();
    initParticles();
    initHeroStats();
    initLessons();
    initExams();
    initFormulas();
    initPomodoro();
    initAITutor();
    initNotes();
    initMusicPlayer();
    initScrollTop();
    initProgress();
    initScrollAnimations();
});

// ======================== LOADING SCREEN ========================

function initLoadingScreen() {
    setTimeout(() => {
        const loader = document.getElementById('loading-screen');
        loader.classList.add('hidden');
        setTimeout(() => loader.style.display = 'none', 600);
    }, 2200);
}

// ======================== NAVIGATION ========================

function initNavigation() {
    const nav = document.getElementById('main-nav');
    const links = document.querySelectorAll('.nav-link');
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.getElementById('nav-links');

    // Scroll effect
    window.addEventListener('scroll', () => {
        nav.classList.toggle('scrolled', window.scrollY > 50);
    });

    // Active link on scroll
    const sections = document.querySelectorAll('.section');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const top = section.offsetTop - 100;
            if (window.scrollY >= top) {
                current = section.getAttribute('id');
            }
        });
        links.forEach(link => {
            link.classList.remove('active');
            if (link.dataset.section === current) {
                link.classList.add('active');
            }
        });
    });

    // Smooth scroll + close mobile menu
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
            navLinks.classList.remove('open');
        });
    });

    // Mobile menu
    mobileBtn.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });

    // Close mobile menu on outside click
    document.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && !mobileBtn.contains(e.target)) {
            navLinks.classList.remove('open');
        }
    });
}

// ======================== PARTICLES ========================

function initParticles() {
    const container = document.getElementById('particles');
    if (!container) return;
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (10 + Math.random() * 10) + 's';
        const colors = ['#3b82f6', '#8b5cf6', '#10b981', '#f59e0b', '#ec4899'];
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        container.appendChild(particle);
    }
}

// ======================== HERO STATS ANIMATION ========================

function initHeroStats() {
    const stats = [
        { el: 'stat-lessons', target: 28 },
        { el: 'stat-exams', target: 60 },
        { el: 'stat-videos', target: 100 },
        { el: 'stat-hours', target: 250 }
    ];
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                stats.forEach(stat => animateNumber(stat.el, stat.target));
                observer.disconnect();
            }
        });
    }, { threshold: 0.5 });

    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) observer.observe(heroStats);
}

function animateNumber(elementId, target) {
    const el = document.getElementById(elementId);
    if (!el) return;
    let current = 0;
    const step = Math.ceil(target / 60);
    const timer = setInterval(() => {
        current += step;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        el.textContent = current;
    }, 30);
}

// ======================== LESSONS RENDERING ========================

function initLessons() {
    renderLessons('semester1', 'physics');
    renderLessons('semester2', 'physics');

    // Tab switching
    document.querySelectorAll('.subject-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            const semester = tab.dataset.semester;
            const subject = tab.dataset.subject;
            const tabContainer = tab.closest('.subject-tabs');
            tabContainer.querySelectorAll('.subject-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            renderLessons('semester' + semester, subject);
        });
    });
}

function renderLessons(semester, subject) {
    const gridId = semester === 'semester1' ? 's1-lessons-grid' : 's2-lessons-grid';
    const grid = document.getElementById(gridId);
    if (!grid) return;

    const lessons = lessonsData[semester]?.[subject] || [];
    
    if (lessons.length === 0) {
        grid.innerHTML = `
            <div class="empty-state" style="grid-column: 1/-1;">
                <i class="fas fa-book-open"></i>
                <p>لا توجد دروس حالياً في هذا القسم</p>
            </div>`;
        return;
    }

    const numClass = {
        physics: '',
        chemistry: 'green-num',
        math: 'pink-num',
        svt: 'gold-num'
    };

    const checkedLessons = JSON.parse(localStorage.getItem('completedLessons') || '{}');

    grid.innerHTML = lessons.map(lesson => `
        <div class="lesson-card animate-on-scroll" data-lesson-id="${lesson.id}">
            <div class="lesson-check">
                <input type="checkbox" id="check-${lesson.id}" ${checkedLessons[lesson.id] ? 'checked' : ''}>
                <label for="check-${lesson.id}"><i class="fas fa-check"></i></label>
            </div>
            <div class="lesson-card-header">
                <div class="lesson-number ${numClass[subject]}">${lesson.num}</div>
                <div class="lesson-info">
                    <h3>${lesson.title}</h3>
                    <span class="lesson-subtitle">${lesson.titleFr}</span>
                </div>
            </div>
            <div class="lesson-card-body">
                <p>${lesson.description}</p>
                <div class="lesson-tags">
                    ${lesson.tags.map(tag => `<span class="lesson-tag">${tag}</span>`).join('')}
                </div>
            </div>
            <div class="lesson-card-actions">
                <button class="btn btn-primary btn-sm" onclick="openPdfViewer('${lesson.title}', '${lesson.pdfUrl}')">
                    <i class="fas fa-file-pdf"></i> الدرس
                </button>
                <button class="btn btn-outline btn-sm" onclick="openVideoModal('${lesson.title}', '${lesson.id}')">
                    <i class="fas fa-play-circle"></i> فيديوهات
                </button>
                <a href="${lesson.pdfUrl}" class="btn btn-outline btn-sm" download>
                    <i class="fas fa-download"></i> تحميل
                </a>
            </div>
        </div>
    `).join('');

    // Checkbox event listeners
    grid.querySelectorAll('input[type="checkbox"]').forEach(cb => {
        cb.addEventListener('change', (e) => {
            const lessonId = e.target.id.replace('check-', '');
            const completed = JSON.parse(localStorage.getItem('completedLessons') || '{}');
            if (e.target.checked) {
                completed[lessonId] = true;
            } else {
                delete completed[lessonId];
            }
            localStorage.setItem('completedLessons', JSON.stringify(completed));
            updateProgress();
        });
    });

    // Trigger scroll animations for new elements
    setTimeout(initScrollAnimations, 100);
}

// ======================== PDF VIEWER ========================

function openPdfViewer(title, url) {
    const modal = document.getElementById('pdf-modal');
    document.getElementById('pdf-modal-title').innerHTML = `<i class="fas fa-file-pdf"></i> ${title}`;
    
    if (url === '#') {
        document.getElementById('pdf-viewer-frame').src = '';
        document.getElementById('pdf-viewer-frame').style.display = 'none';
        const body = document.querySelector('.pdf-modal-body');
        // Show placeholder
        let placeholder = body.querySelector('.pdf-placeholder');
        if (!placeholder) {
            placeholder = document.createElement('div');
            placeholder.className = 'pdf-placeholder';
            placeholder.style.cssText = 'display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;color:var(--text-muted);';
            placeholder.innerHTML = `
                <i class="fas fa-file-pdf" style="font-size:4rem;margin-bottom:20px;opacity:0.3;"></i>
                <p style="font-size:1.1rem;margin-bottom:10px;">ملف PDF سيتم إضافته قريباً</p>
                <p style="font-size:0.85rem;">يمكنك رفع ملفاتك الخاصة عند استضافة الموقع</p>
            `;
            body.appendChild(placeholder);
        }
        placeholder.style.display = 'flex';
    } else {
        const frame = document.getElementById('pdf-viewer-frame');
        frame.style.display = 'block';
        frame.src = url;
        const placeholder = document.querySelector('.pdf-placeholder');
        if (placeholder) placeholder.style.display = 'none';
    }
    
    document.getElementById('pdf-download-link').href = url;
    modal.classList.add('open');
}

document.getElementById('close-pdf-modal')?.addEventListener('click', () => {
    document.getElementById('pdf-modal').classList.remove('open');
    document.getElementById('pdf-viewer-frame').src = '';
});

// ======================== VIDEO MODAL ========================

function openVideoModal(title, lessonId) {
    const modal = document.getElementById('video-modal');
    document.getElementById('video-modal-title').innerHTML = `<i class="fas fa-play-circle"></i> فيديوهات: ${title}`;
    
    // Find lesson
    let lesson = null;
    for (const sem of Object.values(lessonsData)) {
        for (const subj of Object.values(sem)) {
            const found = subj.find(l => l.id === lessonId);
            if (found) { lesson = found; break; }
        }
        if (lesson) break;
    }

    const videoList = document.getElementById('video-list');
    if (lesson && lesson.videos.length > 0) {
        videoList.innerHTML = lesson.videos.map(video => `
            <a href="${video.url}" target="_blank" class="video-item">
                <div class="video-item-icon">
                    <i class="fab fa-youtube"></i>
                </div>
                <div class="video-item-info">
                    <h5>${video.title}</h5>
                    <p><i class="fas fa-user"></i> ${video.channel}</p>
                </div>
                <i class="fas fa-external-link-alt" style="color:var(--text-muted);margin-right:auto;"></i>
            </a>
        `).join('');
    } else {
        videoList.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-video-slash"></i>
                <p>لا توجد فيديوهات متاحة حالياً</p>
            </div>`;
    }

    modal.classList.add('open');
}

document.getElementById('close-video-modal')?.addEventListener('click', () => {
    document.getElementById('video-modal').classList.remove('open');
});

// Close modals on overlay click
document.querySelectorAll('.modal-overlay').forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.remove('open');
    });
});

// ======================== EXAMS ========================

function initExams() {
    renderExams();
    
    document.getElementById('exam-year-filter').addEventListener('change', renderExams);
    document.getElementById('exam-session-filter').addEventListener('change', renderExams);
    document.getElementById('exam-subject-filter').addEventListener('change', renderExams);
}

function renderExams() {
    const yearFilter = document.getElementById('exam-year-filter').value;
    const sessionFilter = document.getElementById('exam-session-filter').value;
    const subjectFilter = document.getElementById('exam-subject-filter').value;

    let filtered = examsData.filter(exam => {
        if (yearFilter !== 'all' && exam.year !== parseInt(yearFilter)) return false;
        if (sessionFilter !== 'all' && exam.session !== sessionFilter) return false;
        if (subjectFilter !== 'all' && exam.subject !== subjectFilter) return false;
        return true;
    });

    // Show max 18 by default
    filtered = filtered.slice(0, 18);

    const grid = document.getElementById('exams-grid');
    if (filtered.length === 0) {
        grid.innerHTML = `
            <div class="empty-state" style="grid-column:1/-1;">
                <i class="fas fa-search"></i>
                <p>لا توجد نتائج تطابق البحث</p>
            </div>`;
        return;
    }

    grid.innerHTML = filtered.map(exam => `
        <div class="exam-card animate-on-scroll">
            <div class="exam-card-header">
                <span class="exam-year-badge">${exam.year}</span>
                <div>
                    <h4>${exam.subjectLabel}</h4>
                    <span class="exam-session-badge ${exam.session === 'normale' ? 'session-normale' : 'session-rattrapage'}">
                        ${exam.sessionLabel}
                    </span>
                </div>
            </div>
            <div class="exam-card-actions">
                <button class="btn btn-primary btn-sm" onclick="openPdfViewer('${exam.title}', '${exam.examUrl}')">
                    <i class="fas fa-eye"></i> المسالك
                </button>
                <button class="btn btn-outline btn-sm" onclick="openPdfViewer('تصحيح: ${exam.title}', '${exam.corrigeUrl}')">
                    <i class="fas fa-check-circle"></i> التصحيح
                </button>
            </div>
        </div>
    `).join('');

    setTimeout(initScrollAnimations, 100);
}

// ======================== FORMULAS ========================

function initFormulas() {
    renderFormulas('physics-formulas');

    document.querySelectorAll('.formula-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.formula-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            renderFormulas(tab.dataset.formula);
        });
    });
}

function renderFormulas(type) {
    const container = document.getElementById('formula-content');
    const data = formulasData[type] || [];

    container.innerHTML = data.map(group => `
        <div class="formula-group">
            <h4>${group.group}</h4>
            ${group.items.map(item => `
                <div class="formula-item">
                    <span class="formula-name">${item.name}</span>
                    <span class="formula-equation">${item.equation}</span>
                </div>
            `).join('')}
        </div>
    `).join('');
}

// ======================== POMODORO TIMER ========================

function initPomodoro() {
    let timeLeft = 25 * 60;
    let totalTime = 25 * 60;
    let isRunning = false;
    let isBreak = false;
    let interval = null;
    let sessions = parseInt(localStorage.getItem('pomoSessions') || '0');
    let totalStudyTime = parseInt(localStorage.getItem('pomoTotalTime') || '0');

    const timeDisplay = document.getElementById('pomodoro-time');
    const miniDisplay = document.getElementById('pomodoro-mini-display');
    const labelDisplay = document.getElementById('pomodoro-label');
    const progressCircle = document.getElementById('pomodoro-svg-progress');
    const startBtn = document.getElementById('pomodoro-start');
    const pauseBtn = document.getElementById('pomodoro-pause');
    const resetBtn = document.getElementById('pomodoro-reset');
    const sessionsDisplay = document.getElementById('pomo-sessions');
    const totalTimeDisplay = document.getElementById('pomo-total-time');
    const circumference = 2 * Math.PI * 90;

    if (progressCircle) {
        progressCircle.style.strokeDasharray = circumference;
        progressCircle.style.strokeDashoffset = 0;
    }

    sessionsDisplay.textContent = sessions;
    totalTimeDisplay.textContent = totalStudyTime;

    function updateDisplay() {
        const mins = Math.floor(timeLeft / 60).toString().padStart(2, '0');
        const secs = (timeLeft % 60).toString().padStart(2, '0');
        const display = `${mins}:${secs}`;
        if (timeDisplay) timeDisplay.textContent = display;
        if (miniDisplay) miniDisplay.textContent = display;

        // Update circle progress
        if (progressCircle) {
            const progress = (totalTime - timeLeft) / totalTime;
            progressCircle.style.strokeDashoffset = circumference * (1 - progress);
        }
    }

    function start() {
        if (isRunning) return;
        isRunning = true;
        startBtn.disabled = true;
        pauseBtn.disabled = false;

        interval = setInterval(() => {
            timeLeft--;
            updateDisplay();
            if (timeLeft <= 0) {
                clearInterval(interval);
                isRunning = false;
                
                if (!isBreak) {
                    sessions++;
                    totalStudyTime += 25;
                    localStorage.setItem('pomoSessions', sessions);
                    localStorage.setItem('pomoTotalTime', totalStudyTime);
                    sessionsDisplay.textContent = sessions;
                    totalTimeDisplay.textContent = totalStudyTime;
                    
                    // Switch to break
                    isBreak = true;
                    timeLeft = 5 * 60;
                    totalTime = 5 * 60;
                    labelDisplay.textContent = 'وقت الراحة ☕';
                    progressCircle.style.stroke = '#10b981';
                    
                    // Notify
                    showNotification('🎉 أحسنت! استراحة 5 دقائق');
                } else {
                    // Switch to work
                    isBreak = false;
                    timeLeft = 25 * 60;
                    totalTime = 25 * 60;
                    labelDisplay.textContent = 'وقت العمل';
                    progressCircle.style.stroke = '#3b82f6';
                    
                    showNotification('💪 هيا! وقت العمل 25 دقيقة');
                }
                
                updateDisplay();
                startBtn.disabled = false;
                pauseBtn.disabled = true;
            }
        }, 1000);
    }

    function pause() {
        clearInterval(interval);
        isRunning = false;
        startBtn.disabled = false;
        pauseBtn.disabled = true;
    }

    function reset() {
        clearInterval(interval);
        isRunning = false;
        isBreak = false;
        timeLeft = 25 * 60;
        totalTime = 25 * 60;
        labelDisplay.textContent = 'وقت العمل';
        if (progressCircle) {
            progressCircle.style.stroke = '#3b82f6';
            progressCircle.style.strokeDashoffset = 0;
        }
        updateDisplay();
        startBtn.disabled = false;
        pauseBtn.disabled = true;
    }

    startBtn?.addEventListener('click', start);
    pauseBtn?.addEventListener('click', pause);
    resetBtn?.addEventListener('click', reset);

    // Mini pomodoro btn
    document.getElementById('pomodoro-mini-btn')?.addEventListener('click', () => {
        document.getElementById('tools')?.scrollIntoView({ behavior: 'smooth' });
    });

    updateDisplay();
}

function showNotification(message) {
    // Simple notification
    if ('Notification' in window && Notification.permission === 'granted') {
        new Notification('BacPhysique Hub', { body: message });
    }
    
    // Also show in-app notification
    const notif = document.createElement('div');
    notif.style.cssText = `
        position: fixed; bottom: 30px; right: 30px; 
        background: var(--bg-card); border: 1px solid var(--border-color);
        padding: 16px 24px; border-radius: 12px;
        color: var(--text-primary); font-family: var(--font-primary);
        z-index: 3000; box-shadow: 0 8px 32px rgba(0,0,0,0.5);
        animation: fadeInUp 0.3s ease;
        font-size: 0.95rem;
    `;
    notif.textContent = message;
    document.body.appendChild(notif);
    setTimeout(() => {
        notif.style.opacity = '0';
        notif.style.transition = 'opacity 0.3s';
        setTimeout(() => notif.remove(), 300);
    }, 3000);
}

// Request notification permission
if ('Notification' in window && Notification.permission === 'default') {
    Notification.requestPermission();
}

// ======================== AI TUTOR ========================

function initAITutor() {
    const input = document.getElementById('ai-input');
    const sendBtn = document.getElementById('ai-send-btn');
    const messagesContainer = document.getElementById('ai-messages');

    function sendMessage(text) {
        if (!text.trim()) return;

        // Add user message
        addMessage(text, 'user');
        input.value = '';

        // Simulate thinking delay
        setTimeout(() => {
            const response = generateResponse(text);
            addMessage(response, 'bot');
        }, 800);
    }

    function addMessage(text, type) {
        const msg = document.createElement('div');
        msg.className = `ai-message ${type}-message`;
        msg.innerHTML = `
            <div class="message-avatar">
                <i class="fas fa-${type === 'bot' ? 'robot' : 'user'}"></i>
            </div>
            <div class="message-content">
                <p>${formatMessage(text)}</p>
            </div>
        `;
        messagesContainer.appendChild(msg);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    function formatMessage(text) {
        // Simple markdown-like formatting
        return text
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\n/g, '<br>');
    }

    function generateResponse(question) {
        const q = question.toLowerCase();
        
        // Check predefined responses
        for (const [key, response] of Object.entries(aiResponses)) {
            if (q.includes(key.toLowerCase()) || q.includes(key)) {
                return response;
            }
        }

        // Keyword-based responses
        if (q.includes('مشتق') || q.includes('derivation') || q.includes('اشتقاق')) {
            return `📐 **الاشتقاق** هو أساس دراسة الدوال!\n\nالمشتقات الأساسية:\n• (xⁿ)' = n·xⁿ⁻¹\n• (eˣ)' = eˣ\n• (ln x)' = 1/x\n• (sin x)' = cos x\n• (cos x)' = -sin x\n\n**القواعد:**\n• (u×v)' = u'v + uv'\n• (u/v)' = (u'v - uv')/v²\n• (f∘u)' = u' × f'(u)\n\n💡 f'(x) > 0 → الدالة متزايدة\n💡 f'(x) < 0 → الدالة متناقصة`;
        }

        if (q.includes('تكامل') || q.includes('integral') || q.includes('أصلية')) {
            return `∫ **الحساب التكاملي:**\n\nالأصليات الأساسية:\n• ∫xⁿ dx = xⁿ⁺¹/(n+1) + C\n• ∫eˣ dx = eˣ + C\n• ∫(1/x) dx = ln|x| + C\n• ∫cos(x) dx = sin(x) + C\n• ∫sin(x) dx = -cos(x) + C\n\n**التكامل المحدد:**\n∫[a,b] f(x)dx = F(b) - F(a)\n\n💡 يُستخدم لحساب المساحات والحجوم!`;
        }

        if (q.includes('rc') || q.includes('مكثف') || q.includes('condensateur')) {
            return `⚡ **دارة RC:**\n\n**الشحن:**\n• Uc(t) = E(1 - e^(-t/τ))\n• i(t) = (E/R)·e^(-t/τ)\n• τ = R×C (ثابت الزمن)\n\n**التفريغ:**\n• Uc(t) = E·e^(-t/τ)\n• i(t) = -(E/R)·e^(-t/τ)\n\n**المعادلة التفاضلية:**\n• RC·dUc/dt + Uc = E (شحن)\n• RC·dUc/dt + Uc = 0 (تفريغ)\n\n💡 عند t = τ: يصل المكثف إلى 63% من القيمة النهائية\n💡 عند t = 5τ: نعتبر العملية منتهية (99%)`;
        }

        if (q.includes('نووي') || q.includes('إشعاع') || q.includes('radioactiv')) {
            return `☢️ **التحولات النووية:**\n\n**قانون التناقص الإشعاعي:**\nN(t) = N₀ × e^(-λt)\n\n**عمر النصف:**\nt₁/₂ = ln(2) / λ\n\n**طاقة الربط:**\nEℓ = Δm × c²\nΔm = Z×mp + (A-Z)×mn - m(noyau)\n\n**أنواع التفكك:**\n• α: ₂⁴He (فقدان 4 من العدد الكتلي)\n• β⁻: إلكترون (زيادة العدد الذري)\n• β⁺: بوزيترون (نقص العدد الذري)\n• γ: فوتون (لا تغيير)\n\n💡 1 u × c² = 931.5 MeV`;
        }

        // Default response
        return `🤔 سؤال جيد! إليك بعض النصائح:\n\n1. حاول البحث عن "${question}" في الدروس أعلاه\n2. شاهد الفيديوهات المقترحة لكل درس\n3. حل تمارين الامتحانات الوطنية السابقة\n\n💡 **نصيحة:** أفضل طريقة للفهم هي حل التمارين بنفسك ثم مقارنة حلك مع التصحيح.\n\nهل تريد مساعدة في موضوع محدد آخر؟`;
    }

    sendBtn?.addEventListener('click', () => sendMessage(input.value));
    input?.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage(input.value);
    });

    // Quick questions
    document.querySelectorAll('.quick-q').forEach(btn => {
        btn.addEventListener('click', () => {
            sendMessage(btn.dataset.q);
        });
    });
}

// ======================== NOTES ========================

function initNotes() {
    renderNotes();

    const addBtn = document.getElementById('add-note-btn');
    const modal = document.getElementById('note-modal');
    const closeBtn = document.getElementById('close-note-modal');
    const cancelBtn = document.getElementById('cancel-note-btn');
    const saveBtn = document.getElementById('save-note-btn');
    const searchInput = document.getElementById('notes-search-input');
    const exportBtn = document.getElementById('export-notes-btn');

    addBtn?.addEventListener('click', () => {
        document.getElementById('note-title-input').value = '';
        document.getElementById('note-content-input').value = '';
        document.getElementById('note-subject-select').value = 'general';
        modal.classList.add('open');
        modal.dataset.editId = '';
    });

    closeBtn?.addEventListener('click', () => modal.classList.remove('open'));
    cancelBtn?.addEventListener('click', () => modal.classList.remove('open'));

    saveBtn?.addEventListener('click', () => {
        const title = document.getElementById('note-title-input').value.trim();
        const content = document.getElementById('note-content-input').value.trim();
        const subject = document.getElementById('note-subject-select').value;

        if (!title || !content) {
            alert('يرجى ملء جميع الحقول');
            return;
        }

        const notes = JSON.parse(localStorage.getItem('userNotes') || '[]');
        const editId = modal.dataset.editId;

        if (editId) {
            const idx = notes.findIndex(n => n.id === editId);
            if (idx !== -1) {
                notes[idx] = { ...notes[idx], title, content, subject, updatedAt: new Date().toISOString() };
            }
        } else {
            notes.unshift({
                id: 'note-' + Date.now(),
                title,
                content,
                subject,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
            });
        }

        localStorage.setItem('userNotes', JSON.stringify(notes));
        modal.classList.remove('open');
        renderNotes();
    });

    searchInput?.addEventListener('input', () => {
        renderNotes(searchInput.value);
    });

    exportBtn?.addEventListener('click', exportNotes);
}

function renderNotes(searchTerm = '') {
    const grid = document.getElementById('notes-grid');
    if (!grid) return;

    let notes = JSON.parse(localStorage.getItem('userNotes') || '[]');

    if (searchTerm) {
        notes = notes.filter(n =>
            n.title.includes(searchTerm) || n.content.includes(searchTerm)
        );
    }

    if (notes.length === 0) {
        grid.innerHTML = `
            <div class="empty-state" style="grid-column:1/-1;">
                <i class="fas fa-sticky-note"></i>
                <p>${searchTerm ? 'لا توجد نتائج' : 'لا توجد ملاحظات بعد — أضف ملاحظتك الأولى!'}</p>
            </div>`;
        return;
    }

    const subjectLabels = {
        general: 'عام',
        physics: 'الفيزياء',
        chemistry: 'الكيمياء',
        math: 'الرياضيات',
        svt: 'علوم الحياة والأرض'
    };

    grid.innerHTML = notes.map(note => `
        <div class="note-card">
            <div class="note-card-header">
                <h4>${note.title}</h4>
                <span class="note-card-date">${new Date(note.createdAt).toLocaleDateString('ar-MA')}</span>
            </div>
            <span class="note-card-subject note-subject-${note.subject}">${subjectLabels[note.subject]}</span>
            <div class="note-card-content">${note.content}</div>
            <div class="note-card-actions">
                <button class="note-action-btn" onclick="editNote('${note.id}')">
                    <i class="fas fa-edit"></i> تعديل
                </button>
                <button class="note-action-btn delete-btn" onclick="deleteNote('${note.id}')">
                    <i class="fas fa-trash"></i> حذف
                </button>
            </div>
        </div>
    `).join('');
}

function editNote(id) {
    const notes = JSON.parse(localStorage.getItem('userNotes') || '[]');
    const note = notes.find(n => n.id === id);
    if (!note) return;

    document.getElementById('note-title-input').value = note.title;
    document.getElementById('note-content-input').value = note.content;
    document.getElementById('note-subject-select').value = note.subject;
    
    const modal = document.getElementById('note-modal');
    modal.dataset.editId = id;
    modal.classList.add('open');
}

function deleteNote(id) {
    if (!confirm('هل أنت متأكد من حذف هذه الملاحظة؟')) return;
    let notes = JSON.parse(localStorage.getItem('userNotes') || '[]');
    notes = notes.filter(n => n.id !== id);
    localStorage.setItem('userNotes', JSON.stringify(notes));
    renderNotes();
}

function exportNotes() {
    const notes = JSON.parse(localStorage.getItem('userNotes') || '[]');
    if (notes.length === 0) {
        alert('لا توجد ملاحظات للتصدير');
        return;
    }

    let text = '📝 ملاحظاتي — BacPhysique Hub\n';
    text += '═'.repeat(40) + '\n\n';
    notes.forEach(note => {
        text += `📌 ${note.title}\n`;
        text += `📂 ${note.subject} | 📅 ${new Date(note.createdAt).toLocaleDateString('ar-MA')}\n`;
        text += `${'─'.repeat(30)}\n`;
        text += `${note.content}\n\n`;
    });

    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'mes-notes-bac.txt';
    a.click();
    URL.revokeObjectURL(url);
}

// ======================== MUSIC PLAYER ========================

function initMusicPlayer() {
    const toggleBtn = document.getElementById('music-toggle-btn');
    const panel = document.getElementById('music-panel');
    const closePanel = document.getElementById('close-music-panel');
    const playPauseBtn = document.getElementById('play-pause-btn');
    const volumeSlider = document.getElementById('volume-slider');
    const trackBtns = document.querySelectorAll('.track-btn');

    let isPlaying = false;
    let audioContext = null;
    let currentSource = null;
    let gainNode = null;
    let noiseInterval = null;

    toggleBtn?.addEventListener('click', () => {
        panel.classList.toggle('open');
    });

    closePanel?.addEventListener('click', () => {
        panel.classList.remove('open');
    });

    function initAudioContext() {
        if (!audioContext) {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
            gainNode = audioContext.createGain();
            gainNode.connect(audioContext.destination);
            gainNode.gain.value = 0.3;
        }
    }

    function generateWhiteNoise() {
        initAudioContext();
        stopCurrentAudio();

        const bufferSize = 2 * audioContext.sampleRate;
        const buffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
        const data = buffer.getChannelData(0);

        for (let i = 0; i < bufferSize; i++) {
            data[i] = Math.random() * 2 - 1;
        }

        currentSource = audioContext.createBufferSource();
        currentSource.buffer = buffer;
        currentSource.loop = true;

        // Add a filter for softer sound
        const filter = audioContext.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.value = 1000;

        currentSource.connect(filter);
        filter.connect(gainNode);
        currentSource.start();
    }

    function generateLoFi() {
        initAudioContext();
        stopCurrentAudio();

        // Create a simple ambient chord-like sound
        const oscillators = [];
        const freqs = [220, 277.18, 329.63, 415.30]; // Am7 chord
        
        freqs.forEach(freq => {
            const osc = audioContext.createOscillator();
            const oscGain = audioContext.createGain();
            
            osc.type = 'sine';
            osc.frequency.value = freq;
            oscGain.gain.value = 0.05;
            
            osc.connect(oscGain);
            oscGain.connect(gainNode);
            osc.start();
            oscillators.push({ osc, gain: oscGain });
        });

        // Slowly modulate
        let time = 0;
        noiseInterval = setInterval(() => {
            time += 0.1;
            oscillators.forEach((o, i) => {
                o.gain.gain.value = 0.03 + 0.02 * Math.sin(time * (0.5 + i * 0.1));
            });
        }, 100);

        currentSource = { 
            stop: () => {
                oscillators.forEach(o => {
                    try { o.osc.stop(); } catch(e) {}
                });
                clearInterval(noiseInterval);
            }
        };
    }

    function generateRain() {
        initAudioContext();
        stopCurrentAudio();

        const bufferSize = 4 * audioContext.sampleRate;
        const buffer = audioContext.createBuffer(2, bufferSize, audioContext.sampleRate);
        
        for (let channel = 0; channel < 2; channel++) {
            const data = buffer.getChannelData(channel);
            for (let i = 0; i < bufferSize; i++) {
                // Brown noise (more natural, rain-like)
                let lastOut = 0;
                const white = Math.random() * 2 - 1;
                data[i] = (lastOut + (0.02 * white)) / 1.02;
                lastOut = data[i];
                data[i] *= 3.5;
            }
        }

        currentSource = audioContext.createBufferSource();
        currentSource.buffer = buffer;
        currentSource.loop = true;

        const filter = audioContext.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.value = 800;
        filter.Q.value = 0.5;

        currentSource.connect(filter);
        filter.connect(gainNode);
        currentSource.start();
    }

    function generateNature() {
        // Similar to rain but with different filter
        initAudioContext();
        stopCurrentAudio();

        const bufferSize = 4 * audioContext.sampleRate;
        const buffer = audioContext.createBuffer(2, bufferSize, audioContext.sampleRate);
        
        for (let channel = 0; channel < 2; channel++) {
            const data = buffer.getChannelData(channel);
            for (let i = 0; i < bufferSize; i++) {
                data[i] = (Math.random() * 2 - 1) * 0.5;
                // Occasional "chirps"
                if (Math.random() < 0.0001) {
                    for (let j = 0; j < 500 && i + j < bufferSize; j++) {
                        data[i + j] += Math.sin(j * 0.05) * 0.3 * Math.exp(-j * 0.01);
                    }
                }
            }
        }

        currentSource = audioContext.createBufferSource();
        currentSource.buffer = buffer;
        currentSource.loop = true;

        const filter = audioContext.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.value = 2000;

        currentSource.connect(filter);
        filter.connect(gainNode);
        currentSource.start();
    }

    function stopCurrentAudio() {
        if (currentSource) {
            try { currentSource.stop(); } catch(e) {}
            currentSource = null;
        }
        if (noiseInterval) {
            clearInterval(noiseInterval);
            noiseInterval = null;
        }
    }

    const trackGenerators = {
        lofi: generateLoFi,
        rain: generateRain,
        nature: generateNature,
        whitenoise: generateWhiteNoise
    };

    let currentTrack = 'lofi';

    trackBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            trackBtns.forEach(b => b.classList.remove('active-track'));
            btn.classList.add('active-track');
            currentTrack = btn.dataset.track;
            if (isPlaying) {
                trackGenerators[currentTrack]();
            }
        });
    });

    playPauseBtn?.addEventListener('click', () => {
        if (isPlaying) {
            stopCurrentAudio();
            isPlaying = false;
            playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
        } else {
            trackGenerators[currentTrack]();
            isPlaying = true;
            playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
        }
    });

    volumeSlider?.addEventListener('input', (e) => {
        if (gainNode) {
            gainNode.gain.value = e.target.value / 100;
        }
    });
}

// ======================== PROGRESS TRACKING ========================

function initProgress() {
    updateProgress();
}

function updateProgress() {
    const completed = JSON.parse(localStorage.getItem('completedLessons') || '{}');
    
    const counts = {
        physics: { total: 0, done: 0 },
        chemistry: { total: 0, done: 0 },
        math: { total: 0, done: 0 },
        svt: { total: 0, done: 0 }
    };

    // Count all lessons
    for (const semester of Object.values(lessonsData)) {
        for (const [subject, lessons] of Object.entries(semester)) {
            if (counts[subject]) {
                counts[subject].total += lessons.length;
                lessons.forEach(lesson => {
                    if (completed[lesson.id]) {
                        counts[subject].done++;
                    }
                });
            }
        }
    }

    // Update progress bars
    for (const [subject, data] of Object.entries(counts)) {
        const pct = data.total > 0 ? Math.round((data.done / data.total) * 100) : 0;
        const bar = document.getElementById(`${subject}-progress`);
        const pctEl = document.getElementById(`${subject}-progress-pct`);
        if (bar) bar.style.width = pct + '%';
        if (pctEl) pctEl.textContent = pct + '%';
    }
}

// ======================== SCROLL TO TOP ========================

function initScrollTop() {
    const btn = document.getElementById('scroll-top-btn');
    
    window.addEventListener('scroll', () => {
        btn?.classList.toggle('visible', window.scrollY > 500);
    });

    btn?.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ======================== SCROLL ANIMATIONS ========================

function initScrollAnimations() {
    const elements = document.querySelectorAll('.animate-on-scroll:not(.visible)');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 80);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    elements.forEach(el => observer.observe(el));
}

// ======================== KEYBOARD SHORTCUTS ========================

document.addEventListener('keydown', (e) => {
    // ESC to close modals
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal-overlay.open').forEach(m => m.classList.remove('open'));
        document.getElementById('music-panel')?.classList.remove('open');
        document.getElementById('nav-links')?.classList.remove('open');
    }
});
