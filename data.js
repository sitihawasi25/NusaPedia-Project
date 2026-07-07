const provinces = [
    {
        name: "Aceh",
        logo: "Data/Logo_Prov/aceh.jpeg",
        audio: "Data/Aceh/bungongjeumpa_aceh.mp3",
        budaya: {
            makananKhas: { 
                name: "Mie Aceh", 
                desc_id: "Mie Aceh adalah mie tebal dengan kuah kari kaya rempah, disajikan dengan daging sapi, kambing, atau seafood. Cita rasanya kuat, pedas, dan khas.", 
                desc_en: "Mie Aceh is a thick noodle dish served in a rich and spicy curry soup, combined with beef, mutton, or seafood. Its flavor profile is strong, spicy, and distinctive.",
                image: "Data/Aceh/makanan_aceh.jpg"
            },
            tarianDaerah: { 
                name: "Tari Saman", 
                desc_id: "Tari Saman adalah tarian massal yang dibawakan secara duduk berbaris, dengan gerakan tangan dan badan yang cepat dan serentak. Diakui sebagai Warisan Budaya Tak Benda oleh UNESCO pada tahun 2011.", 
                desc_en: "Tari Saman is a mass dance performed by dancers sitting in a row, featuring fast and synchronized hand and body movements. It was recognized as an Intangible Cultural Heritage by UNESCO in 2011.",
                image: "Data/Aceh/tari_aceh.jpg"
            },
            rumahAdat: { 
                name: "Rumah Krong Bade", 
                desc_id: "Rumah Krong Bade adalah rumah panggung khas Aceh dengan atap melengkung menyerupai perahu, dihiasi ukiran tradisional dan memiliki tangga di bagian depan.", 
                desc_en: "Rumah Krong Bade is a traditional Acehnese stilt house with a curved roof resembling a boat, adorned with traditional carvings and featuring a staircase at the front.",
                image: "Data/Aceh/rmhadat_aceh.jpg"
            },
            pakaianAdat: { 
                name: "Ulee Balang", 
                desc_id: "Ulee Balang adalah busana adat kebesaran Aceh berwarna hitam dan emas, dilengkapi aksesoris emas dan penutup kepala khas yang mencerminkan keagungan budaya Aceh.", 
                desc_en: "Ulee Balang is the royal traditional attire of Aceh in black and gold colors, equipped with gold accessories and a distinctive headpiece that reflects the grandeur of Acehnese culture.",
                image: "Data/Aceh/pakaian_aceh.jpg"
            },
            senjataTradisional: { 
                name: "Rencong", 
                desc_id: "Rencong adalah senjata tikam khas Aceh berbentuk huruf \"L\", melambangkan keteguhan dan semangat pejuang rakyat Aceh. Kini menjadi simbol identitas budaya provinsi ini.", 
                desc_en: "Rencong is a traditional Acehnese dagger shaped like the letter \"L\", symbolizing the steadfastness and fighting spirit of the Acehnese people. It has now become a symbol of the province's cultural identity.",
                image: "Data/Aceh/senjata_aceh.jpg"
            },
            alatMusikTradisional: { 
                name: "Serune Kalee", 
                desc_id: "Serune Kalee adalah alat musik tiup seperti seruling dengan suara melengking khas, digunakan dalam upacara adat dan pertunjukan seni budaya Aceh.", 
                desc_en: "Serune Kalee is a wind instrument similar to a flute with a distinctive high-pitched sound, used in traditional ceremonies and Acehnese cultural arts performances.",
                image: "Data/Aceh/alatmusik_aceh.jpg"
            },
            bahasaDaerah: { 
                name: "Bahasa Aceh", 
                desc_id: "Bahasa Aceh termasuk dalam rumpun bahasa Melayu-Polinesia dan merupakan bahasa utama masyarakat Aceh. Contoh: \"Saleum\" = Salam.", 
                desc_en: "Bahasa Aceh belongs to the Malayo-Polynesian language family and is the primary language of the Acehnese people. Example: \"Saleum\" = Greetings.",
                image: ""
            },
            laguDaerah: { 
                name: "Bungong Jeumpa", 
                desc_id: "Bungong Jeumpa adalah lagu daerah yang melambangkan keindahan bunga jeumpa (cempaka) sebagai simbol keanggunan dan keindahan alam Aceh.", 
                desc_en: "Bungong Jeumpa is a folk song that symbolizes the beauty of the jeumpa (magnolia) flower as a symbol of elegance and the natural beauty of Aceh.",
                image: ""
            }
        }
    },
    {
        name: "Sumatera Utara",
        logo: "Data/Logo_Prov/sumut.jpeg",
        audio: "Data/Sumatera_Utara/sinanggartullo_sumut.mp3",
        budaya: {
            makananKhas: { 
                name: "Arsik", 
                desc_id: "Arsik adalah masakan ikan mas khas Batak yang dimasak dengan bumbu rempah khas andaliman, berwarna kuning dan sangat aromatik. Andaliman menjadi pembeda utama dari masakan daerah lain.", 
                desc_en: "Arsik is a traditional Batak carp fish dish cooked with distinctive andaliman spices, yellow-colored and highly aromatic. Andaliman is the main differentiator from other regional dishes.",
                image: "Data/Sumatera_Utara/makanan_sumut.jpg"
            },
            tarianDaerah: { 
                name: "Tor-Tor", 
                desc_id: "Tor-Tor adalah tarian sakral suku Batak yang dibawakan dalam upacara adat, diiringi musik gondang dan penuh makna spiritual serta nilai kebersamaan.", 
                desc_en: "Tor-Tor is a sacred dance of the Batak tribe performed in traditional ceremonies, accompanied by gondang music and filled with spiritual meaning and values of togetherness.",
                image: "Data/Sumatera_Utara/tari_sumut.jpg"
            },
            rumahAdat: { 
                name: "Rumah Bolon", 
                desc_id: "Rumah Bolon adalah rumah panggung besar khas suku Batak dengan atap pelana melengkung tinggi dan dihiasi ukiran bermotif kerbau, berfungsi sebagai tempat tinggal dan pusat kegiatan adat.", 
                desc_en: "Rumah Bolon is a large traditional stilt house of the Batak tribe with a high curved gable roof adorned with buffalo-motif carvings, serving as a residence and a center for traditional activities.",
                image: "Data/Sumatera_Utara/rmhadat_sumut.jpg"
            },
            pakaianAdat: { 
                name: "Ulos", 
                desc_id: "Ulos adalah kain tenun tradisional Batak yang digunakan sebagai selendang atau penutup tubuh. Memiliki makna spiritual dan sosial yang mendalam dalam kehidupan adat Batak.", 
                desc_en: "Ulos is a traditional Batak woven cloth used as a shawl or body covering. It holds deep spiritual and social meaning in Batak traditional life.",
                image: "Data/Sumatera_Utara/pakaian_sumut.jpg"
            },
            senjataTradisional: { 
                name: "Piso Gaja Dompak", 
                desc_id: "Piso Gaja Dompak adalah keris atau pisau upacara khas Batak yang digunakan oleh raja dan diwariskan sebagai pusaka leluhur lintas generasi.", 
                desc_en: "Piso Gaja Dompak is a traditional Batak ceremonial dagger or knife used by kings and passed down as an ancestral heirloom across generations.",
                image: "Data/Sumatera_Utara/senjata_sumut.jpg"
            },
            alatMusikTradisional: { 
                name: "Gondang Sabangunan", 
                desc_id: "Gondang Sabangunan adalah ansambel musik Batak yang terdiri dari beberapa taganing (drum) dan gordang, dimainkan dalam ritual dan upacara adat Batak.", 
                desc_en: "Gondang Sabangunan is a Batak musical ensemble consisting of several taganing (drums) and gordang, played in traditional Batak rituals and ceremonies.",
                image: "Data/Sumatera_Utara/alatmusik_sumut.jpg"
            },
            bahasaDaerah: { 
                name: "Bahasa Batak", 
                desc_id: "Bahasa Batak memiliki beberapa dialek, di antaranya Toba, Karo, Simalungun, dan Mandailing. Contoh (Batak Toba): \"Horas!\" = Salam sejahtera.", 
                desc_en: "Bahasa Batak has several dialects, including Toba, Karo, Simalungun, and Mandailing. Example (Batak Toba): \"Horas!\" = Peace/Greetings.",
                image: ""
            },
            laguDaerah: { 
                name: "Sinanggar Tulo", 
                desc_id: "Sinanggar Tulo adalah lagu rakyat Batak yang menggambarkan nasihat orang tua kepada anaknya, penuh nilai budaya dan kekeluargaan.", 
                desc_en: "Sinanggar Tulo is a Batak folk song depicting parents' advice to their children, filled with cultural and family values.",
                image: ""
            }
        }
    },
    {
        name: "Sumatera Barat",
        logo: "Data/Logo_Prov/sumbar.jpeg",
        audio: "Data/Sumatera_Barat/taragapulang_sumbar.mp3",
        budaya: {
            makananKhas: { 
                name: "Rendang", 
                desc_id: "Rendang adalah masakan daging khas Minangkabau yang dimasak dengan santan dan rempah hingga kering. Dinobatkan sebagai salah satu makanan terenak di dunia dan melambangkan kesabaran serta kekayaan budaya.", 
                desc_en: "Rendang is a traditional Minangkabau meat dish cooked with coconut milk and spices until dry. It has been crowned as one of the most delicious foods in the world and symbolizes patience and cultural richness.",
                image: "Data/Sumatera_Barat/makanan_sumbar.jpeg"
            },
            tarianDaerah: { 
                name: "Tari Piring", 
                desc_id: "Tari Piring adalah tarian tradisional Minangkabau yang menggunakan piring sebagai properti dan melambangkan rasa syukur atas hasil panen yang melimpah.", 
                desc_en: "Tari Piring is a traditional Minangkabau dance that uses plates as properties and symbolizes gratitude for an abundant harvest.",
                image: "Data/Sumatera_Barat/tari_sumbar.jpeg"
            },
            rumahAdat: { 
                name: "Rumah Gadang", 
                desc_id: "Rumah Gadang adalah rumah adat Minangkabau dengan atap gonjong berbentuk tanduk kerbau, berfungsi sebagai tempat tinggal sekaligus pusat kegiatan adat keluarga.", 
                desc_en: "Rumah Gadang is the traditional Minangkabau house with a gonjong roof shaped like buffalo horns, serving as a residence as well as a center for family traditional activities.",
                image: "Data/Sumatera_Barat/rmhadat_sumbar.jpeg"
            },
            pakaianAdat: { 
                name: "Bundo Kanduang", 
                desc_id: "Bundo Kanduang adalah busana adat wanita Minangkabau dengan suntiang (hiasan kepala berbentuk tanduk) yang melambangkan kehormatan dan status sosial pemakainya.", 
                desc_en: "Bundo Kanduang is the traditional attire of Minangkabau women with a suntiang (horn-shaped headpiece) that symbolizes the honor and social status of the wearer.",
                image: "Data/Sumatera_Barat/pakaian_sumbar.jpeg"
            },
            senjataTradisional: { 
                name: "Karambiak (Kerambit)", 
                desc_id: "Karambiak adalah senjata kecil berbentuk melengkung seperti cakar harimau, digunakan dalam seni bela diri tradisional Minangkabau yang dikenal sebagai Silek.", 
                desc_en: "Karambiak is a small curved weapon shaped like a tiger's claw, used in the traditional Minangkabau martial art known as Silek.",
                image: "Data/Sumatera_Barat/senjata_sumbar.jpeg"
            },
            alatMusikTradisional: { 
                name: "Talempong", 
                desc_id: "Talempong adalah alat musik pukul dari logam berbentuk gong kecil, dimainkan dalam upacara adat dan berbagai pertunjukan budaya Minangkabau.", 
                desc_en: "Talempong is a metal percussion instrument shaped like small gongs, played in traditional ceremonies and various Minangkabau cultural performances.",
                image: "Data/Sumatera_Barat/alatmusik_sumbar.jpeg"
            },
            bahasaDaerah: { 
                name: "Bahasa Minangkabau", 
                desc_id: "Bahasa Minangkabau memiliki berbagai dialek seperti Padang dan Bukittinggi, digunakan dalam kehidupan sehari-hari dan upacara adat. Contoh: \"Apo kaba?\" = Apa kabar?", 
                desc_en: "Bahasa Minangkabau has various dialects such as Padang and Bukittinggi, used in daily life and traditional ceremonies. Example: \"Apo kaba?\" = How are you?",
                image: ""
            },
            laguDaerah: { 
                name: "Kampuang Nan Jauh di Mato", 
                desc_id: "Kampuang Nan Jauh di Mato adalah lagu yang menggambarkan kerinduan perantau terhadap kampung halaman, sangat populer dan menjadi kebanggaan masyarakat Minang.", 
                desc_en: "Kampuang Nan Jauh di Mato is a song that depicts a migrant's longing for their hometown, highly popular and a source of pride for the Minang community.",
                image: ""
            }
        }
    },
    {
        name: "Riau",
        logo: "Data/Logo_Prov/riau.jpeg",
        audio: "Data/Riau/lancangkuning_riau.mp3",
        budaya: {
            makananKhas: { 
                name: "Gulai Ikan Patin", 
                desc_id: "Gulai Ikan Patin adalah masakan khas Riau berupa ikan patin dalam kuah gulai kuning berbumbu rempah, santan, dan asam. Rasanya kaya, gurih, dan sangat aromatik.", 
                desc_en: "Gulai Ikan Patin is a traditional Riau dish consisting of pangasius catfish in a yellow curry soup seasoned with spices, coconut milk, and tamarind. The taste is rich, savory, and highly aromatic.",
                image: "Data/Riau/makanan_riau.jpg"
            },
            tarianDaerah: { 
                name: "Tari Zapin", 
                desc_id: "Tari Zapin adalah tarian tradisional berpengaruh Melayu-Arab yang dibawakan berpasangan dengan gerakan kaki yang dinamis dan khas, diiringi musik gambus dan marwas.", 
                desc_en: "Tari Zapin is a traditional Malay-Arabic influenced dance performed in pairs with dynamic and distinctive footwork, accompanied by gambus and marwas music.",
                image: "Data/Riau/tari_riau.jpeg"
            },
            rumahAdat: { 
                name: "Rumah Selaso Jatuh Kembar", 
                desc_id: "Rumah Selaso Jatuh Kembar adalah rumah adat Melayu Riau dengan dua selasar di kanan dan kiri bangunan, digunakan sebagai tempat musyawarah dan kegiatan adat.", 
                desc_en: "Rumah Selaso Jatuh Kembar is a traditional Malay Riau house with two verandas on the right and left sides of the building, used as a place for deliberations and traditional activities.",
                image: "Data/Riau/rmhadat_riau.png"
            },
            pakaianAdat: { 
                name: "Baju Kurung Melayu", 
                desc_id: "Baju Kurung Melayu adalah busana khas Riau berupa baju kurung panjang dengan kain songket, mencerminkan nilai kesopanan dan keanggunan budaya Melayu.", 
                desc_en: "Baju Kurung Melayu is a traditional attire of Riau consisting of a long tunic paired with songket cloth, reflecting the values of modesty and elegance of Malay culture.",
                image: "Data/Riau/pakaian_riau.jpg"
            },
            senjataTradisional: { 
                name: "Pedang Jenawi", 
                desc_id: "Pedang Jenawi adalah pedang panjang khas Melayu Riau dengan bilah lurus, digunakan oleh panglima perang dan menjadi pusaka kerajaan Melayu.", 
                desc_en: "Pedang Jenawi is a traditional long sword of Malay Riau with a straight blade, used by warlords and kept as an heirloom of the Malay kingdom.",
                image: "Data/Riau/senjata_riau.png"
            },
            alatMusikTradisional: { 
                name: "Gambus", 
                desc_id: "Gambus adalah alat musik petik berpengaruh Arab yang digunakan dalam pertunjukan musik Melayu dan mengiringi lagu-lagu tradisional Riau.", 
                desc_en: "Gambus is an Arabic-influenced plucked string instrument used in Malay musical performances and to accompany traditional Riau songs.",
                image: "Data/Riau/alatmusik_riau.jpg"
            },
            bahasaDaerah: { 
                name: "Bahasa Melayu Riau", 
                desc_id: "Bahasa Melayu Riau dianggap sebagai salah satu akar Bahasa Indonesia modern karena kedudukannya yang penting dalam sejarah lingua franca Nusantara. Contoh: \"Apa khabar?\" = Apa kabar?", 
                desc_en: "Bahasa Melayu Riau is considered one of the roots of modern Indonesian language due to its important position in the history of the archipelago's lingua franca. Example: \"Apa khabar?\" = How are you?",
                image: ""
            },
            laguDaerah: { 
                name: "Lancang Kuning", 
                desc_id: "Lancang Kuning adalah lagu kebanggaan Riau tentang perahu lancang kuning sebagai simbol kebesaran dan kejayaan kerajaan Melayu.", 
                desc_en: "Lancang Kuning is a proud folk song of Riau about the yellow lancang boat as a symbol of the greatness and glory of the Malay kingdom.",
                image: ""
            }
        }
    },
    {
        name: "Kepulauan_Riau",
        logo: "Data/Logo_Prov/kep_riau.jpeg",
        audio: "Data/Kepulauan_Riau/soleram_kepriau.mp3",
        budaya: {
            makananKhas: { 
                name: "Otak-otak", 
                desc_id: "Otak-otak adalah makanan berbahan ikan tenggiri yang dibungkus daun dan dibakar, khas dari pesisir Kepulauan Riau dengan cita rasa gurih, segar, dan harum.", 
                desc_en: "Otak-otak is a food made from wahoo fish wrapped in leaves and grilled, typical of the coastal areas of Riau Islands with a savory, fresh, and aromatic taste.",
                image: "Data/Kepulauan_Riau/makanan_kepriau.webp"
            },
            tarianDaerah: { 
                name: "Tari Joget Dangkong", 
                desc_id: "Tari Joget Dangkong adalah tarian pergaulan khas masyarakat pesisir Kepulauan Riau yang dibawakan berpasangan dengan gerakan lincah dan penuh keceriaan.", 
                desc_en: "Tari Joget Dangkong is a social dance typical of the coastal communities of Riau Islands performed in pairs with lively movements and full of joy.",
                image: "Data/Kepulauan_Riau/tari_kepriau.jpg"
            },
            rumahAdat: { 
                name: "Rumah Belah Bubung", 
                desc_id: "Rumah Belah Bubung adalah rumah tradisional Melayu Kepri dengan atap berbentuk pelana khas, mencerminkan budaya Melayu pesisir yang sederhana namun penuh nilai.", 
                desc_en: "Rumah Belah Bubung is a traditional Malay house of Riau Islands featuring a distinctive gable roof, reflecting the coastal Malay culture that is simple yet full of values.",
                image: "Data/Kepulauan_Riau/rmhadat_kepriau.jpg"
            },
            pakaianAdat: { 
                name: "Baju Kurung Teluk Belanga", 
                desc_id: "Baju Kurung Teluk Belanga adalah busana adat pria Melayu berupa baju panjang dengan celana longgar, dipadukan kain songket dan tanjak sebagai penutup kepala.", 
                desc_en: "Baju Kurung Teluk Belanga is the traditional attire of Malay men consisting of a long tunic with loose trousers, paired with songket cloth and tanjak as a head covering.",
                image: "Data/Kepulauan_Riau/pakaian_kepriau.jpg"
            },
            senjataTradisional: { 
                name: "Badik Tumbuk Lada", 
                desc_id: "Badik Tumbuk Lada adalah pisau pendek khas Melayu dengan gagang dan sarung berukir, digunakan sebagai senjata sekaligus benda adat bernilai tinggi.", 
                desc_en: "Badik Tumbuk Lada is a traditional Malay short knife with a carved handle and sheath, used as a weapon as well as a highly valuable cultural artifact.",
                image: "Data/Kepulauan_Riau/senjata_kepriau.webp"
            },
            alatMusikTradisional: { 
                name: "Rebana Ubi", 
                desc_id: "Rebana Ubi adalah rebana berukuran besar khas Melayu Kepri, dimainkan dalam acara adat, perayaan, dan pertunjukan seni budaya masyarakat setempat.", 
                desc_en: "Rebana Ubi is a large-sized tambourine typical of Riau Islands Malay, played in traditional events, celebrations, and cultural art performances of the local community.",
                image: "Data/Kepulauan_Riau/alatmusik_kepriau.jpg"
            },
            bahasaDaerah: { 
                name: "Bahasa Melayu Kepri", 
                desc_id: "Bahasa Melayu Kepri dikenal bersih dan jernih, sering disebut mendekati Melayu baku. Contoh: \"Dari mana?\" = Dari mana?", 
                desc_en: "Bahasa Melayu Kepri is known to be clean and clear, often described as close to standard Malay. Example: \"Dari mana?\" = Where are you from?",
                image: ""
            },
            laguDaerah: { 
                name: "Soleram", 
                desc_id: "Soleram adalah lagu daerah Kepulauan Riau yang paling dikenal luas, berisi nasihat untuk menjaga kehormatan dan harga diri, sering digunakan sebagai lagu pengantar tidur anak-anak di Kepri.", 
                desc_en: "Soleram is the most widely known folk song of Riau Islands, containing advice to maintain honor and self-esteem, often used as a lullaby for children in Kepri.",
                image: ""
            }
        }
    },
    {
        name: "Jambi",
        logo: "Data/Logo_Prov/jambi.jpeg",
        audio: "Data/Jambi/injitinjitsemut_jambi.mp3",
        budaya: {
            makananKhas: { 
                name: "Tempoyak", 
                desc_id: "Tempoyak adalah olahan durian yang difermentasi dan dimasak bersama ikan atau sambal, merupakan kuliner khas Melayu Jambi dengan cita rasa asam dan unik.", 
                desc_en: "Tempoyak is a fermented durian product cooked with fish or chili paste, which is a signature culinary item of Malay Jambi with a sour and unique flavor.",
                image: "Data/Jambi/makanan_jambi.jpg"
            },
            tarianDaerah: { 
                name: "Tari Sekapur Sirih", 
                desc_id: "Tari Sekapur Sirih adalah tarian penyambutan tamu kehormatan khas Jambi, dibawakan oleh gadis-gadis dengan membawa cerana berisi sirih sebagai tanda penghormatan.", 
                desc_en: "Tari Sekapur Sirih is a welcoming dance for honored guests in Jambi, performed by young women carrying a metal bowl filled with betel leaves as a sign of respect.",
                image: "Data/Jambi/tari_jambi.jpg"
            },
            rumahAdat: { 
                name: "Rumah Panggung Kajang Lako", 
                desc_id: "Rumah Panggung Kajang Lako adalah rumah tradisional Jambi berbentuk panggung dengan atap menyerupai perahu, dihiasi ukiran khas Melayu Jambi.", 
                desc_en: "Rumah Panggung Kajang Lako is a traditional stilt house of Jambi with a roof resembling a boat, adorned with distinctive Malay Jambi carvings.",
                image: "Data/Jambi/rmhadat_jambi.png"
            },
            pakaianAdat: { 
                name: "Baju Kurung Melayu Jambi", 
                desc_id: "Baju Kurung Melayu Jambi adalah busana adat wanita Jambi dengan kain songket bermotif khas, dilengkapi perhiasan emas sebagai simbol keanggunan dan kemuliaan.", 
                desc_en: "Baju Kurung Melayu Jambi is the traditional attire for Jambi women featuring a distinctively patterned songket cloth, equipped with gold jewelry as a symbol of elegance and nobility.",
                image: "Data/Jambi/pakaian_jambi.jpg"
            },
            senjataTradisional: { 
                name: "Keris Siginjei", 
                desc_id: "Keris Siginjei adalah keris khas Jambi berukuran panjang dengan pamor khusus, memiliki nilai spiritual tinggi dan digunakan dalam berbagai upacara adat kebesaran.", 
                desc_en: "Keris Siginjei is a traditional long dagger of Jambi with a special pamor pattern, possessing high spiritual value and used in various major traditional ceremonies.",
                image: "Data/Jambi/senjata_jambi.png"
            },
            alatMusikTradisional: { 
                name: "Kelintang", 
                desc_id: "Kelintang adalah alat musik pukul dari logam mirip gong kecil yang dimainkan dalam ansambel musik tradisional Melayu Jambi pada acara-acara adat.", 
                desc_en: "Kelintang is a metal percussion instrument similar to small gongs played in the traditional Malay Jambi musical ensemble during cultural events.",
                image: "Data/Jambi/alatmusik_jambi.jpg"
            },
            bahasaDaerah: { 
                name: "Bahasa Melayu Jambi", 
                desc_id: "Bahasa Melayu Jambi adalah bahasa Melayu dengan dialek khas Jambi yang terasa hangat dan ramah. Contoh: \"Apo kabar?\" = Apa kabar?", 
                desc_en: "Bahasa Melayu Jambi is the Malay language spoken with a distinctive Jambi dialect that feels warm and friendly. Example: \"Apo kabar?\" = How are you?",
                image: ""
            },
            laguDaerah: { 
                name: "Injit-Injit Semut", 
                desc_id: "Injit-Injit Semut adalah lagu permainan anak-anak tradisional Jambi yang menggambarkan kebersihan dan keceriaan dalam bermain.", 
                desc_en: "Injit-Injit Semut is a traditional children's game song from Jambi that depicts togetherness and cheerfulness in playing.",
                image: ""
            }
        }
    },
    {
        name: "Sumatera Selatan",
        logo: "Data/Logo_Prov/sumsel.jpeg",
        audio: "Data/Sumatera_Selatan/deksangke_sumsel.mp3",
        budaya: {
            makananKhas: { 
                name: "Pempek", 
                desc_id: "Pempek adalah makanan berbahan ikan dan sagu yang digoreng atau direbus, disajikan dengan kuah cuko asam pedas khas. Menjadi ikon kuliner Palembang yang dikenal di seluruh Indonesia.", 
                desc_en: "Pempek is a savory fish cake made of fish and sago savory dough that is fried or boiled, served with a signature spicy, sweet and sour cuko sauce. It is a culinary icon of Palembang known across Indonesia.",
                image: "Data/Sumatera_Selatan/makanan_sumsel.jpg"
            },
            tarianDaerah: { 
                name: "Tari Gending Sriwijaya", 
                desc_id: "Tari Gending Sriwijaya adalah tarian agung yang menggambarkan kejayaan Kerajaan Sriwijaya, dibawakan oleh penari wanita berpakaian kebesaran dalam acara penyambutan tamu resmi.", 
                desc_en: "Tari Gending Sriwijaya is a grand dance depicting the glory of the Sriwijaya Kingdom, performed by female dancers dressed in royal ceremonial attire during official welcoming events.",
                image: "Data/Sumatera_Selatan/tari_sumsel.jpg"
            },
            rumahAdat: { 
                name: "Rumah Limas", 
                desc_id: "Rumah Limas adalah rumah panggung khas Palembang dengan atap berbentuk lima sudut, didekorasi dengan ukiran indah dan lantai bertingkat yang memiliki makna hierarki sosial.", 
                desc_en: "Rumah Limas is a traditional stilt house of Palembang with a five-cornered roof, decorated with beautiful carvings and tiered floors that represent social hierarchy.",
                image: "Data/Sumatera_Selatan/rmhadat_sumsel.jpg"
            },
            pakaianAdat: { 
                name: "Aesan Gede", 
                desc_id: "Aesan Gede adalah busana adat kebesaran Palembang dengan kain songket emas dan aksesoris lengkap, mencerminkan kejayaan dan kemewahan Kerajaan Sriwijaya.", 
                desc_en: "Aesan Gede is the grand traditional attire of Palembang featuring golden songket cloth and complete accessories, reflecting the glory and luxury of the Sriwijaya Kingdom.",
                image: "Data/Sumatera_Selatan/pakaian_sumsel.jpg"
            },
            senjataTradisional: { 
                name: "Tombak Trisula", 
                desc_id: "Tombak Trisula adalah senjata berbentuk trisula yang digunakan oleh para pemimpin dan dalam upacara adat kebesaran kerajaan Palembang.", 
                desc_en: "Tombak Trisula is a trident-shaped weapon used by leaders and in grand traditional ceremonies of the Palembang kingdom.",
                image: "Data/Sumatera_Selatan/senjata_sumsel.jpg"
            },
            alatMusikTradisional: { 
                name: "Gendang Oku (Burdah)", 
                desc_id: "Gendang Oku atau Burdah adalah alat musik tradisional khas Sumatera Selatan yang terbuat dari kulit hewan dan kayu nangka, dimainkan dengan cara dipukul menggunakan telapak tangan dalam upacara adat dan pertunjukan pencak silat.", 
                desc_en: "Gendang Oku or Burdah is a traditional musical instrument typical of South Sumatra made from animal skin and jackfruit wood, played by striking it with the palm of the hand during custom ceremonies and pencak silat performances.",
                image: "Data/Sumatera_Selatan/alatmusik_sumsel.jpg"
            },
            bahasaDaerah: { 
                name: "Bahasa Palembang", 
                desc_id: "Bahasa Palembang adalah bahasa Melayu dengan logat khas yang merdu dan unik. Contoh: \"Pacak idak?\" = Bisa tidak?", 
                desc_en: "Bahasa Palembang is a Malay language spoken with a melodious and unique local dialect. Example: \"Pacak idak?\" = Can you or not?",
                image: ""
            },
            laguDaerah: { 
                name: "Dek Sangke", 
                desc_id: "Dek Sangke adalah lagu daerah Sumatera Selatan yang bercerita tentang perasaan cinta yang tertukar, kaya akan nuansa Melayu Palembang yang romantis.", 
                desc_en: "Dek Sangke is a folk song of South Sumatra that tells a story about mistaken love, rich with the romantic nuances of Palembang Malay culture.",
                image: ""
            }
        }
    },

    {
        name: "Lampung",
        logo: "Data/Logo_Prov/lampung.jpeg",
        audio: "Data/Lampung/sangbumi_lampung.mp3",
        budaya: {
            makananKhas: { 
                name: "Seruit", 
                desc_id: "Seruit adalah makanan khas Lampung berupa ikan bakar atau goreng yang dicampur dengan terasi, tempoyak, dan sambal, kemudian disajikan bersama dalam satu wadah.", 
                desc_en: "Seruit is a traditional Lampung food consisting of grilled or fried fish mixed with shrimp paste, tempoyak (fermented durian), and chili sauce, served together in a single container.",
                image: "Data/Lampung/makanan_lampung.jpg"
            },
            tarianDaerah: { 
                name: "Tari Sigeh Penguten", 
                desc_id: "Tari Sigeh Penguten adalah tarian penyambutan tamu khas Lampung yang dibawakan oleh penari wanita dengan gerakan lemah gemulai dan kostum yang megah dan berwarna-warni.", 
                desc_en: "Tari Sigeh Penguten is a welcoming dance for guests in Lampung performed by female dancers with graceful movements and majestic, colorful costumes.",
                image: "Data/Lampung/tari_lampung.jpg"
            },
            rumahAdat: { 
                name: "Nuwo Sesat", 
                desc_id: "Nuwo Sesat adalah rumah adat Lampung yang berfungsi sebagai balai pertemuan adat, dibangun di atas tiang kayu dengan ornamen dan ukiran khas Lampung.", 
                desc_en: "Nuwo Sesat is the traditional house of Lampung that serves as a community meeting hall, built on wooden stilts with ornaments and carvings typical of Lampung.",
                image: "Data/Lampung/rmhadat_lampung.webp"
            },
            pakaianAdat: { 
                name: "Pakaian Tulang Bawang", 
                desc_id: "Pakaian adat Lampung menggunakan kain tapis bermotif emas, dilengkapi mahkota dan perhiasan lengkap yang mencerminkan kemewahan dan keagungan budaya Lampung.", 
                desc_en: "The traditional clothing of Lampung uses golden-patterned tapis cloth, equipped with a crown and complete jewelry that reflects the luxury and grandeur of Lampung culture.",
                image: "Data/Lampung/pakaian_lampung.jpg"
            },
            senjataTradisional: { 
                name: "Punduk", 
                desc_id: "Punduk adalah pisau pendek bermata satu khas Lampung yang digunakan untuk kebutuhan sehari-hari maupun sebagai alat perlindungan diri.", 
                desc_en: "Punduk is a single-edged short knife typical of Lampung used for daily necessities as well as a tool for self-defense.",
                image: "Data/Lampung/senjata_lampung.jpg"
            },
            alatMusikTradisional: { 
                name: "Cetik (Gamolan)", 
                desc_id: "Cetik atau Gamolan adalah alat musik pukul dari bambu khas Lampung yang menghasilkan nada jernih dan digunakan dalam pertunjukan budaya tradisional.", 
                desc_en: "Cetik or Gamolan is a bamboo percussion instrument from Lampung that produces clear notes and is used in traditional cultural performances.",
                image: "Data/Lampung/alatmusik_lampung.jpg"
            },
            bahasaDaerah: { 
                name: "Bahasa Lampung", 
                desc_id: "Bahasa Lampung memiliki dua dialek utama yaitu Nyow (api) dan Belalau (nyo). Contoh: \"Haga kemano?\" = Mau ke mana?", 
                desc_en: "Bahasa Lampung has two main dialects, namely Nyow (api) and Belalau (nyo). Example: \"Haga kemano?\" = Where are you going?",
                image: ""
            },
            laguDaerah: { 
                name: "Sang Bumi Ruwa Jurai", 
                desc_id: "Sang Bumi Ruwa Jurai adalah lagu kebangsaan daerah Lampung yang bermakna \"bumi yang dihuni dua golongan\", melambangkan kerukunan antara masyarakat Lampung asli dan pendatang.", 
                desc_en: "Sang Bumi Ruwa Jurai is the regional anthem of Lampung meaning \"one land inhabited by two groups\", symbolizing harmony between the indigenous Lampung people and migrants.",
                image: ""
            }
        }
    },
    
    {
        name: "DKI_Jakarta",
        logo: "Data/Logo_Prov/DKI_jkrta.jpeg",
        audio: "Data/DKI_Jakarta/ondelondel_jkrta.mp3",
        budaya: {
            makananKhas: { 
                name: "Kerak Telor", 
                desc_id: "Kerak Telor adalah makanan tradisional Betawi berbahan beras ketan, telur ayam atau bebek, dan ebi, dimasak di atas bara api dengan cara dibalik. Rasanya gurih dan sedikit pedas, menjadi ikon kuliner Betawi.", 
                desc_en: "Kerak Telor is a traditional Betawi food made of glutinous rice, chicken or duck egg, and dried shrimp, cooked over charcoal and served flipped. It tastes savory and slightly spicy, becoming a Betawi culinary icon.",
                image: "Data/DKI_Jakarta/makanan_jkrta.jpg"
            },
            tarianDaerah: { 
                name: "Tari Topeng Betawi", 
                desc_id: "Tari Topeng Betawi adalah tarian khas Betawi yang menggunakan topeng sebagai properti utama, menggambarkan berbagai karakter tokoh dalam cerita rakyat dan pertunjukan seni tradisional.", 
                desc_en: "Tari Topeng Betawi is a specific Betawi dance that uses masks as the main property, depicting various character personas in folklore and traditional art performances.",
                image: "Data/DKI_Jakarta/tari_jkrta.jpg"
            },
            rumahAdat: { 
                name: "Rumah Kebaya", 
                desc_id: "Rumah Kebaya adalah rumah adat Betawi dengan atap berbentuk pelana yang mirip kebaya jika dilihat dari samping, dilengkapi teras lebar sebagai ruang interaksi sosial.", 
                desc_en: "Rumah Kebaya is a traditional Betawi house featuring a gable roof that resembles a kebaya dress when viewed from the side, equipped with a wide veranda as a space for social interaction.",
                image: "Data/DKI_Jakarta/rmhadat_jkrta.jpg"
            },
            pakaianAdat: { 
                name: "Dandanan Care Haji", 
                desc_id: "Busana adat Betawi untuk pria berupa jas putih dengan celana panjang dan kopiah, sedangkan wanita menggunakan kebaya encim dengan rok batik, mencerminkan akulturasi budaya Melayu, Arab, dan Cina.", 
                desc_en: "Traditional Betawi attire for men consists of a white coat with trousers and a kopiah hat, while women wear a kebaya encim with a batik skirt, reflecting the cultural acculturation of Malay, Arabic, and Chinese elements.",
                image: "Data/DKI_Jakarta/pakaian_jkrta.webp"
            },
            senjataTradisional: { 
                name: "Golok Betawi", 
                desc_id: "Golok Betawi adalah senjata tajam khas masyarakat Betawi dengan bilah lebar dan tebal, digunakan dalam kehidupan sehari-hari maupun seni bela diri Betawi.", 
                desc_en: "Golok Betawi is a sharp weapon characteristic of the Betawi people featuring a wide and thick blade, used in daily life as well as Betawi martial arts.",
                image: "Data/DKI_Jakarta/senjata_jkrta.webp"
            },
            alatMusikTradisional: { 
                name: "Gambang Kromong", 
                desc_id: "Gambang Kromong adalah ansambel musik khas Betawi yang memadukan instrumen seperti gambang, kromong, gendang, rebab, dan gong. Merupakan perpaduan budaya Tionghoa dan Betawi yang lahir sekitar abad ke-18 dan menjadi identitas musik paling ikonik dari Jakarta.", 
                desc_en: "Gambang Kromong is a typical Betawi musical ensemble that combines instruments such as gambang, kromong, drums, rebab, and gongs. It is a blend of Chinese and Betawi cultures born around the 18th century and has become the most iconic musical identity of Jakarta.",
                image: "Data/DKI_Jakarta/alatmusik_jkrta.jpg"
            },
            bahasaDaerah: { 
                name: "Bahasa Betawi", 
                desc_id: "Bahasa Betawi adalah dialek Melayu khas Jakarta yang kaya pengaruh Arab, Belanda, Portugis, dan Cina. Contoh: \"Ente dari mane?\" = Kamu dari mana?", 
                desc_en: "Bahasa Betawi is a Malay dialect native to Jakarta, heavily influenced by Arabic, Dutch, Portuguese, and Chinese. Example: \"Ente dari mane?\" = Where are you from?",
                image: ""
            },
            laguDaerah: { 
                name: "Ondel-Ondel", 
                desc_id: "Ondel-Ondel adalah lagu daerah resmi DKI Jakarta yang menggambarkan boneka raksasa khas Betawi sebagai simbol kegembiraan dan penolak bala dalam budaya masyarakat Betawi.", 
                desc_en: "Ondel-Ondel is the official folk song of DKI Jakarta depicting the giant Betawi puppet as a symbol of joy and a ward against misfortune in the Betawi community culture.",
                image: ""
            }
        }
    },
    {
        name: "Jawa_Barat",
        logo: "Data/Logo_Prov/jabar.jpeg",
        audio: "Data/Jawa_Barat/manukdadali_jabar.mp3",
        budaya: {
            makananKhas: { 
                name: "Karedok", 
                desc_id: "Karedok adalah makanan khas Sunda yang menggunakan sayuran mentah seperti kacang panjang, timun, dan tauge, disajikan dengan bumbu kacang. Dikenal sebagai makanan sehat dan segar.", 
                desc_en: "Karedok is a Sundanese dish that uses raw vegetables like long beans, cucumber, and bean sprouts, served with a peanut sauce. It is known as a healthy and fresh food.",
                image: "Data/Jawa_Barat/makanan_jabar.jpeg"
            },
            tarianDaerah: { 
                name: "Tari Jaipong", 
                desc_id: "Tari Jaipong adalah seni pertunjukan khas Jawa Barat yang berkembang dari tari pergaulan masyarakat Sunda dan menjadi identitas budaya Jawa Barat.", 
                desc_en: "Tari Jaipong is a performing art native to West Java that developed from the social dance of the Sundanese people and has become a cultural identity of West Java.",
                image: "Data/Jawa_Barat/tari_jabar.jpeg"
            },
            rumahAdat: { 
                name: "Rumah Kasepuhan", 
                desc_id: "Rumah adat Sunda khas Cirebon ini memiliki pembagian ruang seperti Jinem (pendopo), Pringgodani (tempat perintah), dan Prabayasa (ruang tamu dan istirahat sultan).", 
                desc_en: "This traditional Sundanese house from Cirebon features a division of spaces such as Jinem (pavilion), Pringgodani (place of command), and Prabayasa (the sultan's living room and rest area).",
                image: "Data/Jawa_Barat/rmhadat_jabar.jpeg"
            },
            pakaianAdat: { 
                name: "Kebaya Sunda", 
                desc_id: "Pakaian adat Sunda umumnya berupa kebaya untuk wanita dan pangsi untuk pria, dipadukan dengan kain batik atau jarik sebagai bawahan, mencerminkan kesederhanaan dan keanggunan.", 
                desc_en: "Traditional Sundanese attire generally consists of a kebaya for women and pangsi for men, paired with batik or jarik cloth as bottoms, reflecting simplicity and elegance.",
                image: "Data/Jawa_Barat/pakaian_jabar.jpeg"
            },
            senjataTradisional: { 
                name: "Kujang", 
                desc_id: "Kujang adalah senjata tradisional berbentuk melengkung unik menyerupai peta wilayahnya, awalnya digunakan untuk bertani dan berburu, kini menjadi simbol budaya dan kekuatan masyarakat Sunda.", 
                desc_en: "Kujang is a traditional weapon with a uniquely curved shape resembling its regional map, originally used for farming and hunting, now a symbol of culture and strength for the Sundanese people.",
                image: "Data/Jawa_Barat/senjata_jabar.jpeg"
            },
            alatMusikTradisional: { 
                name: "Angklung", 
                desc_id: "Angklung adalah alat musik bambu yang dimainkan dengan cara digoyangkan dan menghasilkan nada ganda. Diakui sebagai Warisan Budaya Tak Benda oleh UNESCO pada tahun 2010.", 
                desc_en: "Angklung is a bamboo musical instrument played by shaking it to produce multi-tonal notes. It was recognized as an Intangible Cultural Heritage by UNESCO in 2010.",
                image: "Data/Jawa_Barat/alatmusik_jabar.jpeg"
            },
            bahasaDaerah: { 
                name: "Bahasa Sunda", 
                desc_id: "Bahasa Sunda merupakan bahasa utama di Jawa Barat dan memiliki tingkatan tutur (halus, loma, kasar). Contoh: \"Kumaha damang?\" = Apa kabar?", 
                desc_en: "The Sundanese language is the primary language in West Java and features speech levels (refined, casual, harsh). Example: \"Kumaha damang?\" = How are you?",
                image: ""
            },
            laguDaerah: { 
                name: "Manuk Dadali", 
                desc_id: "Manuk Dadali adalah lagu daerah Jawa Barat yang melambangkan keperkasaan, nasionalisme, dan persatuan bangsa melalui filosofi burung garuda (dadali) yang gagah berani.", 
                desc_en: "Manuk Dadali is a West Java folk song that symbolizes majesty, nationalism, and national unity through the philosophy of the brave and mighty garuda (dadali) bird.",
                image: ""
            }
        }
    },
        {
        name: "Jawa_Tengah",
        logo: "Data/Logo_Prov/jateng.jpeg",
        audio: "Data/Jawa_Tengah/gundulpacul_jateng.mp3",
        budaya: {
            makananKhas: { 
                name: "Lumpia Semarang", 
                desc_id: "Lumpia Semarang adalah makanan khas Jawa Tengah berupa kulit tipis berisi rebung, telur, dan udang atau ayam, disajikan dengan saus manis dan acar. Merupakan perpaduan budaya Cina dan Jawa.", 
                desc_en: "Lumpia Semarang is a traditional Central Java food consisting of a thin skin filled with bamboo shoots, egg, and shrimp or chicken, served with a sweet sauce and pickles. It is a fusion of Chinese and Javanese cultures.",
                image: "Data/Jawa_Tengah/makanan_jateng.jpg"
            },
            tarianDaerah: { 
                name: "Tari Gambyong", 
                desc_id: "Tari Gambyong adalah tarian klasik Jawa Tengah yang dibawakan secara lembut dan anggun, berasal dari tari rakyat yang kemudian berkembang menjadi tarian istana Keraton Surakarta.", 
                desc_en: "Tari Gambyong is a classic Central Java dance performed softly and gracefully, originating from folk dance which later developed into a palace dance of the Surakarta Keraton.",
                image: "Data/Jawa_Tengah/tari_jateng.jpg"
            },
            rumahAdat: { 
                name: "Rumah Joglo", 
                desc_id: "Rumah Joglo adalah rumah adat Jawa dengan atap berbentuk limas bertingkat dan tiang utama yang disebut soko guru, mencerminkan filosofi hidup dan hierarki sosial masyarakat Jawa.", 
                desc_en: "Rumah Joglo is a Javanese traditional house with a tiered pyramid roof and main pillars called soko guru, reflecting the life philosophy and social hierarchy of Javanese society.",
                image: "Data/Jawa_Tengah/rmhadat_jateng.jpg"
            },
            pakaianAdat: { 
                name: "Kebaya Jawa", 
                desc_id: "Kebaya Jawa adalah busana adat wanita Jawa berupa baju kebaya dengan kain batik sebagai bawahan, dilengkapi selendang dan sanggul, melambangkan keanggunan dan kesopanan.", 
                desc_en: "Kebaya Jawa is the traditional attire for Javanese women consisting of a kebaya shirt with batik cloth as a bottom, equipped with a shawl and a hair bun, symbolizing elegance and modesty.",
                image: "Data/Jawa_Tengah/pakaian_jateng.webp"
            },
            senjataTradisional: { 
                name: "Keris", 
                desc_id: "Keris adalah senjata tikam khas Jawa dengan bilah berlekuk dan bermakna spiritual tinggi. Diakui sebagai Warisan Budaya Tak Benda oleh UNESCO pada tahun 2005.", 
                desc_en: "Keris is a Javanese stabbing weapon with a wavy blade and high spiritual meaning. It was recognized as an Intangible Cultural Heritage by UNESCO in 2005.",
                image: "Data/Jawa_Tengah/senjata_jateng.jpg"
            },
            alatMusikTradisional: { 
                name: "Gamelan Jawa", 
                desc_id: "Gamelan Jawa adalah ansambel musik tradisional terdiri dari gong, kendang, saron, dan bonang, dimainkan dalam upacara adat, pertunjukan wayang, dan berbagai acara budaya Jawa.", 
                desc_en: "Gamelan Jawa is a traditional musical ensemble consisting of gongs, kendang drums, saron, and bonang, played in traditional ceremonies, wayang puppet shows, and various Javanese cultural events.",
                image: "Data/Jawa_Tengah/alatmusik_jateng.jpg"
            },
            bahasaDaerah: { 
                name: "Bahasa Jawa", 
                desc_id: "Bahasa Jawa memiliki tingkatan tutur (ngoko, madya, krama) yang mencerminkan nilai sopan santun budaya Jawa. Contoh: \"Piye kabare?\" = Apa kabar?", 
                desc_en: "The Javanese language features speech levels (ngoko, madya, krama) that reflect the politeness values of Javanese culture. Example: \"Piye kabare?\" = How are you?",
                image: ""
            },
            laguDaerah: { 
                name: "Gundul-Gundul Pacul", 
                desc_id: "Gundul-Gundul Pacul adalah lagu daerah Jawa Tengah yang paling dikenal secara nasional, mengandung makna filosofis tentang tanggung jawab seorang pemimpin yang tidak boleh sombong dan harus mengutamakan rakyatnya.", 
                desc_en: "Gundul-Gundul Pacul is a Central Java folk song most widely known nationally, containing a philosophical meaning about the responsibility of a leader who must not be arrogant and must prioritize their people.",
                image: ""
            }
        }
    },
    {
        name: "DI_Yogyakarta",
        logo: "Data/Logo_Prov/DI_yogya.jpeg",
        audio: "Data/DI_Yogyakarta/suweorajamu_yogya.mp3",
        budaya: {
            makananKhas: { 
                name: "Gudeg", 
                desc_id: "Gudeg adalah masakan khas Yogyakarta berbahan nangka muda yang dimasak dengan santan dan rempah berjam-jam hingga berwarna cokelat kemerahan. Rasanya manis dan gurih, menjadi ikon kuliner Yogyakarta.", 
                desc_en: "Gudeg is a signature dish of Yogyakarta made from young jackfruit cooked with coconut milk and spices for hours until it turns a reddish-brown color. It tastes sweet and savory, acting as a culinary icon of Yogyakarta.",
                image: "Data/DI_Yogyakarta/makanan_yogya.jpg"
            },
            tarianDaerah: { 
                name: "Tari Bedhaya", 
                desc_id: "Tari Bedhaya adalah tarian sakral keraton Yogyakarta yang dibawakan oleh sembilan penari wanita, melambangkan kesucian dan hubungan spiritual antara manusia dengan Sang Pencipta.", 
                desc_en: "Tari Bedhaya is a sacred palace dance of Yogyakarta performed by nine female dancers, symbolizing purity and the spiritual relationship between humans and the Creator.",
                image: "Data/DI_Yogyakarta/tari_yogya.jpg"
            },
            rumahAdat: { 
                name: "Rumah Joglo Yogyakarta", 
                desc_id: "Rumah Joglo Yogyakarta adalah rumah adat dengan ciri khas tiang soko guru dan pendopo luas di bagian depan, berfungsi sebagai ruang pertemuan dan pusat kegiatan keluarga.", 
                desc_en: "Rumah Joglo Yogyakarta is a traditional house characterized by soko guru pillars and a spacious front pavilion, serving as a meeting space and a center for family activities.",
                image: "Data/DI_Yogyakarta/rmhadat_yogya.jpg"
            },
            pakaianAdat: { 
                name: "Pakaian Kesatrian Ageng", 
                desc_id: "Pakaian adat Yogyakarta untuk pria berupa beskap dengan kain batik motif keraton, dilengkapi keris di pinggang belakang sebagai simbol keberanian dan kehormatan.", 
                desc_en: "Traditional Yogyakarta attire for men consists of a beskap jacket with palace-patterned batik cloth, equipped with a keris dagger at the back waist as a symbol of bravery and honor.",
                image: "Data/DI_Yogyakarta/pakaian_yogya.webp"
            },
            senjataTradisional: { 
                name: "Keris Yogyakarta", 
                desc_id: "Keris Yogyakarta memiliki ciri khas tersendiri dalam bentuk gagang dan bilahnya, digunakan sebagai pusaka keraton dan simbol status sosial pemiliknya dalam budaya Jawa.", 
                desc_en: "Keris Yogyakarta has its own distinct characteristics in its handle and blade shapes, used as a palace heirloom and a symbol of its owner's social status in Javanese culture.",
                image: "Data/DI_Yogyakarta/senjata_yogya.webp"
            },
            alatMusikTradisional: { 
                name: "Gamelan Yogyakarta", 
                desc_id: "Gamelan Yogyakarta memiliki karakter suara yang lebih halus dan lembut dibanding gamelan daerah lain, digunakan dalam upacara keraton, pertunjukan wayang kulit, dan tari klasik Jawa.", 
                desc_en: "Gamelan Yogyakarta possesses a smoother and softer sound character compared to gamelans of other regions, used in palace ceremonies, wayang kulit puppet shows, and Javanese classical dance.",
                image: "Data/DI_Yogyakarta/alatmusik_yogya.jpg"
            },
            bahasaDaerah: { 
                name: "Bahasa Jawa Yogyakarta", 
                desc_id: "Bahasa Jawa Yogyakarta dikenal sebagai salah satu dialek Jawa yang paling halus dan baku, dengan tingkatan krama inggil yang digunakan dalam lingkungan keraton. Contoh: \"Sugeng rawuh\" = Selamat datang.", 
                desc_en: "Bahasa Jawa Yogyakarta is known as one of the most refined and standard Javanese dialects, with krama inggil level used within the palace environment. Example: \"Sugeng rawuh\" = Welcome.",
                image: ""
            },
            laguDaerah: { 
                name: "Suwe Ora Jamu", 
                desc_id: "Suwe Ora Jamu adalah lagu daerah Yogyakarta yang menggambarkan perasaan kangen kepada seseorang yang lama tidak berjumpa, disampaikan dengan irama yang ringan dan mudah diingat.", 
                desc_en: "Suwe Ora Jamu is a Yogyakarta folk song depicting feelings of longing for someone who hasn't been met for a long time, delivered in a light and easy-to-remember rhythm.",
                image: ""
            }
        }
    },
    {
        name: "Jawa_Timur",
        logo: "Data/Logo_Prov/jatim.jpeg",
        audio: "Data/Jawa_Timur/tandukmajeng_jatim.mp3",
        budaya: {
            makananKhas: { 
                name: "Rawon", 
                desc_id: "Rawon adalah sup daging sapi khas Jawa Timur dengan kuah hitam pekat dari kluwek, disajikan dengan nasi, tauge pendek, dan kerupuk udang. Rasanya kaya, gurih, dan khas.", 
                desc_en: "Rawon is an East Javanese beef soup featuring a deep black broth made from kluwek nuts, served with rice, short bean sprouts, and shrimp crackers. It tastes rich, savory, and distinctive.",
                image: "Data/Jawa_Timur/makanan_jatim.jpg"
            },
            tarianDaerah: { 
                name: "Tari Remo", 
                desc_id: "Tari Remo adalah tarian khas Jawa Timur yang dibawakan dengan gerakan dinamis dan penuh semangat, awalnya merupakan tarian penyambutan tamu dalam pertunjukan Ludruk.", 
                desc_en: "Tari Remo is an East Javanese dance performed with dynamic and spirited movements, originally a welcoming dance for guests in Ludruk performances.",
                image: "Data/Jawa_Timur/tari_jatim.jpg"
            },
            rumahAdat: { 
                name: "Rumah Joglo Jawa Timur", 
                desc_id: "Rumah Joglo Jawa Timur memiliki kesamaan struktur dengan joglo Jawa Tengah namun dengan ornamen dan detail ukiran yang berbeda, mencerminkan kekayaan seni budaya Jawa Timur.", 
                desc_en: "Rumah Joglo Jawa Timur shares a structural similarity with the Central Javanese joglo but features different ornaments and carving details, reflecting the wealth of East Javanese cultural art.",
                image: "Data/Jawa_Timur/rmhadat_jatim.webp"
            },
            pakaianAdat: { 
                name: "Pesa'an (Madura)", 
                desc_id: "Pakaian adat Jawa Timur yang paling khas adalah busana Madura berupa baju sakera untuk pria dengan celana hitam dan ikat kepala, serta kebaya untuk wanita, mencerminkan ketegasan dan keberanian.", 
                desc_en: "The most distinctive traditional clothing of East Java is the Madurese attire consisting of a sakera shirt for men with black trousers and a headscarf, and a kebaya for women, reflecting firmness and bravery.",
                image: "Data/Jawa_Timur/pakaian_jatim.jpg"
            },
            senjataTradisional: { 
                name: "Celurit", 
                desc_id: "Celurit adalah senjata tradisional khas Madura berbentuk melengkung seperti bulan sabit, melambangkan keberanian dan harga diri masyarakat Madura, serta menjadi simbol budaya Jawa Timur.", 
                desc_en: "Celurit is a traditional weapon specific to Madura, curved like a crescent moon, symbolizing the bravery and self-esteem of the Madurese people, as well as a cultural symbol of East Java.",
                image: "Data/Jawa_Timur/senjata_jatim.jpg"
            },
            alatMusikTradisional: { 
                name: "Saronen", 
                desc_id: "Saronen adalah alat musik tiup khas Madura, Jawa Timur, terbuat dari kayu dengan ujung berbentuk corong, menghasilkan suara nyaring dan khas yang mengiringi berbagai acara adat Madura.", 
                desc_en: "Saronen is a wind instrument from Madura, East Java, made of wood with a funnel-shaped end, producing a loud and distinctive sound that accompanies various Madurese traditional events.",
                image: "Data/Jawa_Timur/alatmusik_jatim.jpg"
            },
            bahasaDaerah: { 
                name: "Bahasa Jawa Timuran", 
                desc_id: "Bahasa Jawa Timuran memiliki dialek yang lebih lugas dan tegas dibanding Jawa Tengah, juga terdapat Bahasa Madura yang digunakan oleh masyarakat di Pulau Madura. Contoh: \"Piye kabare?\" = Apa kabar?", 
                desc_en: "Bahasa Jawa Timuran has a more direct and assertive dialect compared to Central Java, and there is also the Madurese language used by communities on Madura Island. Example: \"Piye kabare?\" = How are you?",
                image: ""
            },
            laguDaerah: { 
                name: "Tanduk Majeng", 
                desc_id: "Tanduk Majeng adalah lagu daerah khas Madura, Jawa Timur, yang menggambarkan kehidupan nelayan yang penuh semangat dan keberanian dalam menghadapi ganasnya lautan.", 
                desc_en: "Tanduk Majeng is a folk song from Madura, East Java, depicting the life of fishermen who are full of enthusiasm and bravery in facing the fierce sea.",
                image: ""
            }
        }
    },
    {
        name: "Kalimantan_Tengah",
        logo: "Data/Logo_Prov/kalteng.jpeg",
        audio: "Data/Kalimantan_Tengah/isenmulang_kalteng.mp3",
        budaya: {
            makananKhas: { 
                name: "Juhu Singkah", 
                desc_id: "Juhu Singkah adalah masakan berbahan rotan muda yang dimasak dengan santan dan rempah khas Dayak.", 
                desc_en: "Juhu Singkah is a dish made from young rattan cooked with coconut milk and signature Dayak spices.",
                image: "Data/Kalimantan_Tengah/makanan_kalteng.webp"
            },
            tarianDaerah: { 
                name: "Tari Mandau", 
                desc_id: "Tari Mandau menggambarkan semangat kepahlawanan suku Dayak dan menggunakan properti senjata tradisional.", 
                desc_en: "Tari Mandau depicts the heroic spirit of the Dayak tribe and utilizes traditional weapon properties.",
                image: "Data/Kalimantan_Tengah/tari_kalteng.jpeg"
            },
            rumahAdat: { 
                name: "Rumah Betang", 
                desc_id: "Rumah Betang adalah rumah panjang yang dihuni banyak keluarga dan melambangkan kebersamaan.", 
                desc_en: "Rumah Betang is a longhouse inhabited by many families and symbolizes togetherness.",
                image: "Data/Kalimantan_Tengah/rmhadat_kalteng.jpeg"
            },
            pakaianAdat: { 
                name: "Ta’a dan Sapei Sapaq", 
                desc_id: "Pakaian adat Dayak dihiasi manik-manik dan bulu burung sebagai simbol keindahan dan identitas budaya. Terdiri dari Ta’a (wanita) dan Sapei Sapaq (pria)", 
                desc_en: "Traditional Dayak clothing is adorned with beads and bird feathers as a symbol of beauty and cultural identity. Consists of Ta'a (women) and Sapei Sapaq (men).",
                image: "Data/Kalimantan_Tengah/pakaian_kalteng.jpeg"
            },
            senjataTradisional: { 
                name: "Mandau", 
                desc_id: "Mandau adalah senjata khas Dayak yang memiliki nilai budaya dan spiritual tinggi.", 
                desc_en: "Mandau is a traditional Dayak weapon that possesses high cultural and spiritual value.",
                image: "Data/Kalimantan_Tengah/senjata_kalteng.jpg"
            },
            alatMusikTradisional: { 
                name: "Sape", 
                desc_id: "Sape adalah alat musik petik khas Dayak dengan suara lembut dan khas.", 
                desc_en: "Sape is a traditional plucked string instrument of the Dayak with a soft and distinctive sound.",
                image: "Data/Kalimantan_Tengah/alatmusik_kalteng.jpeg"
            },
            bahasaDaerah: { 
                name: "Bahasa Dayak", 
                desc_id: "Bahasa Dayak terdiri dari sub-bahasa seperti Ngaju dan Ma’anyan yang digunakan oleh suku Dayak dalam kehidupan sehari-hari dan adat Contoh (Ngaju): “Isen mulang” → Pantang menyerah", 
                desc_en: "The Dayak language consists of sub-languages like Ngaju and Ma'anyan used by the Dayak tribe in daily life and rituals. Example (Ngaju): “Isen mulang” → Never give up.",
                image: ""
            },
            laguDaerah: { 
                name: "Lagu Daerah Kalteng", 
                desc_id: "Lagu daerah Kalimantan Tengah yang mencerminkan kehidupan masyarakat adat dan keharmonisan dengan alam sekitar.", 
                desc_en: "Central Kalimantan folk song that reflects indigenous community life and harmony with the surrounding nature.",
                image: ""
            }
        }
    },
    {
        name: "Papua",
        logo: "Data/Logo_Prov/papua.jpeg",
        audio: "Data/Papua/sajojo_papua.mp3",
        budaya: {
            makananKhas: { 
                name: "Papeda", 
                desc_id: "Papeda adalah makanan berbahan sagu dengan tekstur kental, biasanya disajikan dengan ikan kuah kuning.", 
                desc_en: "Papeda is a sago-based food with a thick texture, usually served with yellow fish soup.",
                image: "Data/Papua/makanan_papua.jpeg"
            },
            tarianDaerah: { 
                name: "Tari Yospan", 
                desc_id: "Tari Yospan adalah tarian pergaulan khas Papua yang menggambarkan kebersamaan dan semangat masyarakat.", 
                desc_en: "Yospan dance is a typical Papuan social dance that describes togetherness and community spirit.",
                image: "Data/Papua/tari_papua.jpeg"
            },
            rumahAdat: { 
                name: "Honai", 
                desc_id: "Honai adalah rumah tradisional berbentuk bulat dengan atap jerami, berfungsi melindungi dari cuaca dingin.", 
                desc_en: "Honai is a round traditional house with a thatched roof, functioning to protect from cold weather.",
                image: "Data/Papua/rmhadat_papua.jpeg"
            },
            pakaianAdat: { 
                name: "Koteka dan Rok Rumbai", 
                desc_id: "Pakaian adat Papua menggunakan bahan alami dan aksesoris khas yang mencerminkan budaya papua. Berupa koteka untuk pria dan rok rumbai untuk wanita, dibuat dari bahan alami seperti serat tumbuhan.", 
                desc_en: "Papuan traditional clothing uses natural materials and typical accessories that reflect Papuan culture. In the form of koteka for men and tassel skirts for women, made from natural materials such as plant fibers.",
                image: "Data/Papua/pakaian_papua.jpeg"
            },
            senjataTradisional: { 
                name: "Busur dan Panah", 
                desc_id: "Digunakan untuk berburu dan bertahan hidup serta menjadi bagian penting budaya Masyarakat Papua.", 
                desc_en: "Used for hunting and survival as well as being an important part of Papuan community culture.",
                image: "Data/Papua/senjata_papua.jpeg"
            },
            alatMusikTradisional: { 
                name: "Tifa", 
                desc_id: "Tifa adalah alat musik pukul khas Papua yang digunakan dalam upacara adat dan tarian.", 
                desc_en: "Tifa is a typical Papuan percussion instrument used in traditional ceremonies and dances.",
                image: "Data/Papua/alatmusik_papua.jpeg"
            },
            bahasaDaerah: { 
                name: "Bahasa Papua", 
                desc_id: "Papua memiliki ratusan bahasa daerah yang mencerminkan keberagaman suku dan budaya. seperti Dani, Asmat, dan Biak yang digunakan sesuai suku. Contoh (Biak): “Wari” → Matahari", 
                desc_en: "Papua has hundreds of regional languages that reflect ethnic and cultural diversity, such as Dani, Asmat, and Biak used according to the tribe. Example (Biak): \"Wari\" → Sun.",
                image: ""
            },
            laguDaerah: { 
                name: "Sajojo", 
                desc_id: "Sajojo adalah lagu daerah Papua yang mengisahkan tentang sebuah lagu ceria yang menceritakan seorang gadis cantik yang diidolakan di desanya.", 
                desc_en: "Sajojo is a Papuan folk song that tells a cheerful story about a beautiful girl who is idolized in her village.",
                image: ""
            }
        }
    },
    {
        name: "Bali",
        logo: "Data/Logo_Prov/bali.jpeg",
        audio: "Data/Bali/proyekgede_bali.mp3",
        budaya: {
            makananKhas: { 
                name: "Ayam Betutu", 
                desc_id: "Ayam Betutu adalah masakan khas Bali yang dimasak dengan bumbu lengkap dan proses lama, biasanya disajikan dalam upacara adat.", 
                desc_en: "Ayam Betutu is a typical Balinese dish cooked with complete spices and a long process, usually served in traditional ceremonies.",
                image: "Data/Bali/makanan_bali.jpeg"
            },
            tarianDaerah: { 
                name: "Tari Kecak", 
                desc_id: "Tari Kecak adalah tarian khas Bali yang melibatkan banyak penari pria dengan iringan suara “cak” tanpa alat music, dan menceritakan kisah Ramayana.", 
                desc_en: "Kecak dance is a typical Balinese dance involving many male dancers accompanied by the sound of \"cak\" without musical instruments, and tells the story of Ramayana.",
                image: "Data/Bali/tari_bali.jpeg"
            },
            rumahAdat: { 
                name: "Rumah Adat Bali", 
                desc_id: "Rumah adat Bali terdiri dari beberapa bangunan dalam satu pekarangan, masing-masing memiliki fungsi sesuai filosofi Hindu Bali.", 
                desc_en: "Balinese traditional houses consist of several buildings in one yard, each having a function according to Balinese Hindu philosophy.",
                image: "Data/Bali/rmhadat_bali.jpeg"
            },
            pakaianAdat: { 
                name: "Payas Agung", 
                desc_id: "Pakaian adat Bali seperti payas agung digunakan dalam upacara adat, dengan udeng untuk pria dan kebaya untuk wanita.", 
                desc_en: "Balinese traditional clothing such as payas agung is used in traditional ceremonies, with udeng for men and kebaya for women.",
                image: "Data/Bali/pakaian_bali.jpeg"
            },
            senjataTradisional: { 
                name: "Keris", 
                desc_id: "Keris adalah senjata tradisional yang memiliki nilai budaya dan spiritual tinggi.", 
                desc_en: "Keris is a traditional weapon that has high cultural and spiritual value.",
                image: "Data/Bali/senjata_bali.jpeg"
            },
            alatMusikTradisional: { 
                name: "Gamelan Bali", 
                desc_id: "Gamelan Bali adalah ansambel musik tradisional dengan ritme dinamis yang digunakan dalam upacara dan pertunjukan.", 
                desc_en: "Balinese Gamelan is a traditional music ensemble with dynamic rhythms used in ceremonies and performances.",
                image: "Data/Bali/alatmusik_bali.jpeg"
            },
            bahasaDaerah: { 
                name: "Bahasa Bali", 
                desc_id: "Bahasa Bali memiliki tingkatan bahasa (alus, madya, kasar) sesuai norma sosial masyarakat. Contoh: “Om Swastiastu” = Salam sejahtera.", 
                desc_en: "Balinese language has language levels (alus, madya, kasar) according to community social norms. Example: \"Om Swastiastu\" = Peaceful greetings.",
                image: ""
            },
            laguDaerah: { 
                name: "Proyek Gede", 
                desc_id: "Proyek Gede adalah salah satu lagu daerah kontemporer/populer dari Bali yang sering dinyanyikan dalam berbagai kegiatan kebersamaan.", 
                desc_en: "Proyek Gede is one of the contemporary/popular folk songs from Bali that is often sung in various community activities.",
                image: ""
            }
        }
    },

    {
        name: "Kalimantan_Barat",
        logo: "Data/Logo_Prov/kalbar.jpeg",
        audio: "Data/Kalimantan_Barat/cikcikperiuk_kalbar.mp3",
        budaya: {
            makananKhas: { 
                name: "Bubur Pedas", 
                desc_id: "Bubur Pedas adalah masakan khas Melayu Kalimantan Barat, terutama dari daerah Sambas. Berbahan dasar berbagai sayuran dan rempah yang dimasak bersama beras. Namanya 'pedas' merujuk pada rempah-rempah yang digunakan, bukan cabai, sehingga aman bagi yang tidak tahan pedas. Secara tradisional dibuat dalam jumlah besar untuk acara adat dan kebersamaan.", 
                desc_en: "Bubur Pedas is a traditional Malay dish from West Kalimantan, particularly from the Sambas region. It is made from various vegetables and spices cooked together with rice. The name 'pedas' (spicy) refers to the rich spices used, not chili, making it safe for those who cannot tolerate heat. Traditionally, it is prepared in large quantities for customary events and communal gatherings.",
                image: "Data/Kalimantan_Barat/makanan_kalbar.jpg"
            },
            tarianDaerah: { 
                name: "Tari Monong", 
                desc_id: "Tari Monong adalah tarian pengobatan tradisional suku Dayak Kalimantan Barat yang dipercaya dapat mengusir roh jahat penyebab penyakit. Ditarikan oleh Balian (dukun) dengan gerakan mistis dan sakral. Merupakan salah satu wujud kepercayaan spiritual masyarakat Dayak yang masih dilestarikan.", 
                desc_en: "Tari Monong is a traditional healing dance of the Dayak tribe in West Kalimantan, believed to ward off evil spirits causing illnesses. It is performed by a Balian (shaman) with mystical and sacred movements. It represents one of the spiritual belief forms of the Dayak community that is still preserved today.",
                image: "Data/Kalimantan_Barat/tari_kalbar.jpg"
            },
            rumahAdat: { 
                name: "Rumah Betang (Rumah Panjang)", 
                desc_id: "Rumah Betang atau Rumah Panjang adalah rumah komunal khas suku Dayak Kalimantan Barat. Panjangnya dapat mencapai 150 meter dengan lebar 30 meter, dihuni banyak keluarga sekaligus. Dibangun berbentuk panggung setinggi 3–5 meter dari tanah untuk menghindari banjir, dengan tiang-tiang kayu pilihan tanpa paku.", 
                desc_en: "Rumah Betang or Rumah Panjang is a traditional communal longhouse of the Dayak tribe in West Kalimantan. Its length can reach up to 150 meters with a width of 30 meters, accommodating many families at once. It is built as a stilt house 3-5 meters above the ground to avoid floods, utilizing selected wooden pillars without any nails.",
                image: "Data/Kalimantan_Barat/rmhadat_kalbar.jpg"
            },
            pakaianAdat: { 
                name: "King Baba & King Bibinge", 
                desc_id: "Pakaian adat Dayak Kalimantan Barat dikenal sebagai King Baba untuk pria dan King Bibinge untuk wanita. Terbuat dari kulit kayu (kayu kapua atau ampuro) yang diproses hingga lunak menyerupai kain, dihiasi manik-manik berwarna-warni, bulu burung enggang, dan motif khas Dayak yang bermakna sakral.", 
                desc_en: "The traditional attire of the Dayak tribe in West Kalimantan is known as King Baba for men and King Bibinge for women. Made from processed tree bark (kapua or ampuro wood) until soft like fabric, it is adorned with colorful beads, hornbill feathers, and distinctive Dayak motifs that carry sacred meanings.",
                image: "Data/Kalimantan_Barat/pakaian_kalbar.jpg"
            },
            senjataTradisional: { 
                name: "Mandau", 
                desc_id: "Mandau adalah senjata tradisional suku Dayak berupa parang panjang dengan bilah tajam terbuat dari batu gunung yang mengandung besi. Hiasannya berupa bulu burung enggang atau ukiran pada hulu yang terbuat dari tanduk atau kayu. Memiliki nilai budaya dan spiritual tinggi serta menjadi identitas suku Dayak.", 
                desc_en: "Mandau is a traditional weapon of the Dayak tribe in the form of a long machete with a sharp blade made of iron-bearing mountain stone. It is decorated with hornbill feathers or carvings on the hilt made of horn or wood. It holds high cultural and spiritual value and serves as an identity of the Dayak tribe.",
                image: "Data/Kalimantan_Barat/senjata_kalbar.jpg"
            },
            alatMusikTradisional: { 
                name: "Sape'", 
                desc_id: "Sape' adalah alat musik petik tradisional suku Dayak terbuat dari satu batang kayu utuh. Nadanya lembut dan meditatif, digunakan dalam upacara adat dan pengiringan tarian tradisional Dayak. Di Kalimantan Barat khususnya Kapuas Hulu, Sape' dimainkan oleh masyarakat Dayak Kayaan Mendalam.", 
                desc_en: "Sape' is a traditional plucked string instrument of the Dayak tribe made from a single solid log of wood. Its tone is soft and meditative, used in traditional ceremonies and to accompany traditional Dayak dances. In West Kalimantan, specifically in Kapuas Hulu, Sape' is played by the Dayak Kayaan Mendalam community.",
                image: "Data/Kalimantan_Barat/alatmusik_kalbar.jpg"
            },
            bahasaDaerah: { 
                name: "Bahasa Melayu Pontianak & Dayak", 
                desc_id: "Kalimantan Barat kaya dengan bahasa daerah. Bahasa Melayu Pontianak dan Melayu Sambas digunakan sebagai bahasa penghubung antaretnis. Selain itu terdapat berbagai bahasa suku Dayak seperti Kenyah, Iban, Bidayuh, dan Ot Danun yang mencerminkan kekayaan etnolinguistik daerah ini.", 
                desc_en: "West Kalimantan is rich in regional languages. Bahasa Melayu Pontianak and Melayu Sambas are used as lingua franca between ethnic groups. Additionally, there are various Dayak tribal languages such as Kenyah, Iban, Bidayuh, and Ot Danun, reflecting the region's ethnolinguistic richness.",
                image: ""
            },
            laguDaerah: { 
                name: "Cik-Cik Periuk", 
                desc_id: "Cik-Cik Periuk adalah lagu daerah khas Kalimantan Barat yang riang bertema kehidupan sehari-hari masyarakat Melayu setempat. Liriknya penuh keceriaan dan sering dinyanyikan dalam acara adat dan hiburan rakyat Kalimantan Barat. Menjadi salah satu lagu daerah paling dikenal dari provinsi ini.", 
                desc_en: "Cik-Cik Periuk is a cheerful folk song from West Kalimantan themed around the daily life of the local Malay community. Its lyrics are full of joy and it is frequently sung during customary events and folk entertainment in West Kalimantan. It stands as one of the most widely recognized folk songs from this province.",
                image: ""
            }
        }
    },
    {
        name: "Kalimantan_Timur",
        logo: "Data/Logo_Prov/kaltim.jpeg",
        audio: "Data/Kalimantan_Timur/indungindung_kaltim.mp3",
        budaya: {
            makananKhas: { 
                name: "Ayam Cincane", 
                desc_id: "Ayam Cincane adalah masakan khas Samarinda, Kalimantan Timur, berupa ayam kampung yang dimasak dengan bumbu kuning khas suku Kutai kemudian dibakar. Biasanya disajikan dalam upacara adat dan perayaan masyarakat Kutai Kartanegara sebagai hidangan istimewa yang penuh makna budaya.", 
                desc_en: "Ayam Cincane is a traditional culinary specialty from Samarinda, East Kalimantan, consisting of free-range chicken cooked with the distinctive yellow spices of the Kutai tribe and then grilled. It is usually served during traditional ceremonies and celebrations of the Kutai Kartanegara community as a special dish full of cultural meaning.",
                image: "Data/Kalimantan_Timur/makanan_kaltim.jpg"
            },
            tarianDaerah: { 
                name: "Tari Gantar", 
                desc_id: "Tari Gantar adalah tarian tradisional suku Dayak Benuaq dan Tunjung Kalimantan Timur yang menggambarkan aktivitas bercocok tanam padi. Menggunakan tongkat panjang dan bambu berisi biji-bijian sebagai properti yang berbunyi ritmis. Melambangkan kegembiraan dan syukur atas hasil bumi.", 
                desc_en: "Tari Gantar is a traditional dance of the Dayak Benuaq and Tunjung tribes in East Kalimantan, depicting rice cultivation activities. It utilizes long sticks and bamboo filled with seeds as props that produce rhythmic sounds, symbolizing joy and gratitude for the earth's harvest.",
                image: "Data/Kalimantan_Timur/tari_kaltim.jpg"
            },
            rumahAdat: { 
                name: "Rumah Lamin", 
                desc_id: "Rumah Lamin adalah rumah adat komunal suku Dayak Kalimantan Timur, berupa rumah panggung panjang dihiasi ukiran dan ornamen khas Dayak yang berwarna merah, kuning, dan hitam. Merupakan simbol persatuan, gotong royong, dan identitas budaya masyarakat Dayak Kalimantan Timur.", 
                desc_en: "Rumah Lamin is the communal traditional house of the Dayak tribe in East Kalimantan, built as a long stilt house decorated with distinctive Dayak carvings and ornaments in red, yellow, and black colors. It serves as a symbol of unity, mutual cooperation, and cultural identity for the Dayak people of East Kalimantan.",
                image: "Data/Kalimantan_Timur/rmhadat_kaltim.jpg"
            },
            pakaianAdat: { 
                name: "Kustin (Kutai)", 
                desc_id: "Kalimantan Timur memiliki perpaduan budaya Kesultanan dan Dayak. Pakaian Kustin merupakan busana adat kebesaran dari Suku Kutai yang mewah khas Kerajaan Kutai Kartanegara. Sementara masyarakat suku Dayak Kenyah di wilayah ini mengenakan pakaian Ta'a (untuk wanita) dan Sapei Sapaq (untuk pria) yang kaya akan ornamen manik-manik.", 
                desc_en: "East Kalimantan features a blend of Sultanate and Dayak cultures. Kustin attire is the grand traditional clothing of the Kutai tribe, reflecting the luxury typical of the Kutai Kartanegara Kingdom. Meanwhile, the Dayak Kenyah community in this region wears Ta'a (for women) and Sapei Sapaq (for men), which are rich in bead ornaments.",
                image: "Data/Kalimantan_Timur/pakaian_kaltim.jpg"
            },
            senjataTradisional: { 
                name: "Mandau Kaltim", 
                desc_id: "Mandau khas Kalimantan Timur adalah parang tradisional Dayak dengan bilah besi berkualitas tinggi dan gagang dari tanduk atau tulang dihiasi bulu burung enggang. Menjadi warisan budaya bernilai tinggi dan sering diwariskan sebagai pusaka. Setiap Mandau diyakini memiliki kekuatan spiritual tersendiri.", 
                desc_en: "The distinctive Mandau of East Kalimantan is a traditional Dayak machete featuring a high-quality iron blade and a hilt crafted from horn or bone decorated with hornbill feathers. It stands as a highly valued cultural heritage often passed down as an heirloom. Each Mandau is believed to possess its own spiritual power.",
                image: "Data/Kalimantan_Timur/senjata_kaltim.jpg"
            },
            alatMusikTradisional: { 
                name: "Sape' Kaltim", 
                desc_id: "Sape' adalah alat musik petik tradisional suku Dayak Kalimantan Timur terbuat dari satu batang kayu utuh dengan senar dari bahan alam. Menghasilkan nada yang lembut dan meditatif, digunakan dalam upacara adat Dayak serta festival budaya. Kini mulai dikenal luas dalam pertunjukan musik etnik nasional.", 
                desc_en: "Sape' is a traditional plucked string instrument of the Dayak tribe in East Kalimantan, crafted from a single solid log of wood with strings made from natural materials. It produces soft and meditative tones, used in traditional Dayak ceremonies and cultural festivals, and is now widely recognized in national ethnic music performances.",
                image: "Data/Kalimantan_Timur/alatmusik_kaltim.jpg"
            },
            bahasaDaerah: { 
                name: "Bahasa Kutai & Dayak Benuaq", 
                desc_id: "Bahasa Kutai adalah bahasa yang digunakan Kesultanan Kutai Kartanegara, kerajaan Hindu tertua di Indonesia (berdiri sekitar abad ke-4 M). Kalimantan Timur juga memiliki ragam bahasa Dayak seperti Benuaq dan Tunjung. Contoh: 'Ari antu' → Selamat pagi (Kutai).", 
                desc_en: "Bahasa Kutai is the language used by the Kutai Kartanegara Sultanate, the oldest Hindu kingdom in Indonesia (established around the 4th century AD). East Kalimantan also possesses a variety of Dayak languages such as Benuaq and Tunjung. Example: 'Ari antu' → Good morning (Kutai).",
                image: ""
            },
            laguDaerah: { 
                name: "Indung-Indung", 
                desc_id: "Indung-Indung adalah lagu daerah Kalimantan Timur yang melambangkan kasih sayang seorang ibu kepada anaknya. Melodi yang lembut dan lirik penuh ketulusan mencerminkan nilai budaya masyarakat Kalimantan Timur tentang pentingnya ikatan keluarga dan kasih sayang orang tua.", 
                desc_en: "Indung-Indung is a folk song from East Kalimantan that symbolizes a mother's deep love for her child. The gentle melody and heartfelt lyrics reflect the cultural values of East Kalimantan's society regarding the importance of family bonds and parental affection.",
                image: ""
            }
        }
    },
    {
        name: "Kalimantan_Utara",
        logo: "Data/Logo_Prov/kalut.jpeg",
        audio: "Data/Kalimantan_Utara/bebilin_kalut.mp3",
        budaya: {
            makananKhas: { 
                name: "Kepiting Soka", 
                desc_id: "Kepiting Soka adalah hidangan khas Kalimantan Utara berupa kepiting lunak yang digoreng atau dibumbu dengan rempah khas. Menjadi kebanggaan kuliner daerah yang kaya akan hasil laut dan sungai dari wilayah Kalimantan Utara yang berbatasan langsung dengan Malaysia (Sabah & Sarawak).", 
                desc_en: "Kepiting Soka is a signature dish of North Kalimantan consisting of soft-shell crab that is fried or seasoned with local spices. It is a pride of the regional culinary scene, which is rich in marine and river produce from the North Kalimantan territory that shares a direct border with Malaysia (Sabah & Sarawak).",
                image: "Data/Kalimantan_Utara/makanan_kalut.jpg"
            },
            tarianDaerah: { 
                name: "Tari Kancet Ledo (Tari Gong)", 
                desc_id: "Tari Kancet Ledo atau sering disebut Tari Gong adalah tarian tunggal khas suku Dayak Kenyah di Kalimantan Utara. Tarian ini menceritakan tentang kelembutan seorang gadis yang menari di atas sebuah gong dengan gerakan gemulai, melambangkan keindahan dan keseimbangan hidup.", 
                desc_en: "Tari Kancet Ledo, often referred to as Tari Gong, is a traditional solo dance of the Dayak Kenyah tribe in North Kalimantan. This dance tells the story of a young girl's gentleness dancing gracefully atop a gong, symbolizing beauty and the balance of life.",
                image: "Data/Kalimantan_Utara/tari_kalut.jpg"
            },
            rumahAdat: { 
                name: "Rumah Baloy (Tidung)", 
                desc_id: "Rumah Baloy adalah rumah adat suku Tidung di Kalimantan Utara berbentuk panggung dengan ornamen khas. Merupakan pusat kegiatan adat dan simbol identitas budaya suku Tidung yang merupakan suku terbesar asli Kalimantan Utara. Arsitekturnya mencerminkan adaptasi terhadap iklim tropis Kalimantan.", 
                desc_en: "Rumah Baloy is the traditional stilt house of the Tidung tribe in North Kalimantan, featuring distinctive ornaments. It serves as the center for customary activities and a symbol of cultural identity for the Tidung tribe, which is the largest indigenous tribe in North Kalimantan. Its architecture reflects adaptation to Kalimantan's tropical climate.",
                image: "Data/Kalimantan_Utara/rmhadat_kalut.jpg"
            },
            pakaianAdat: { 
                name: "Pakaian Adat Dayak Kenyah & Tidung", 
                desc_id: "Pakaian adat Kalimantan Utara sangat dipengaruhi oleh budaya Dayak Kenyah (busana Ta'a dan Sapei Sapaq) serta suku Tidung. Pakaian ini dihiasi manik-manik berwarna-warni yang membentuk motif satwa atau alam, dipadukan dengan topi berhiaskan bulu burung enggang yang anggun.", 
                desc_en: "The traditional attire of North Kalimantan is heavily influenced by the Dayak Kenyah culture (Ta'a and Sapei Sapaq garments) as well as the Tidung tribe. These garments are adorned with colorful beads forming animal or nature motifs, paired with elegant hats decorated with hornbill feathers.",
                image: "Data/Kalimantan_Utara/pakaian_kalut.jpg"
            },
            senjataTradisional: { 
                name: "Mandau Dayak Utara", 
                desc_id: "Mandau suku Dayak Kalimantan Utara memiliki ciri khas tersendiri dibanding daerah lain, dengan ornamen dan ukiran yang mencerminkan identitas suku setempat. Berfungsi ganda sebagai alat berburu dan senjata perang, juga merupakan pusaka turun-temurun yang dianggap keramat oleh masyarakat Dayak.", 
                desc_en: "The Mandau of the Dayak tribe in North Kalimantan has its own distinct characteristics compared to other regions, with ornaments and carvings that reflect the local tribal identity. It serves a dual purpose as a hunting tool and a weapon of war, and is also a multi-generational heirloom considered sacred by the Dayak community.",
                image: "Data/Kalimantan_Utara/senjata_kalut.jpg"
            },
            alatMusikTradisional: { 
                name: "Sampe (Sapek)", 
                desc_id: "Sampe atau Sapek adalah alat musik petik tradisional suku Dayak Kalimantan Utara terbuat dari kayu utuh. Menghasilkan nada melankolis yang meditatif, digunakan dalam upacara adat serta hiburan sehari-hari. Instrumen ini memiliki hubungan erat dengan Sape' Kalimantan Timur namun dengan karakter nada yang berbeda.", 
                desc_en: "Sampe or Sapek is a traditional plucked string instrument of the Dayak tribe in North Kalimantan made from a solid log of wood. It produces meditative, melancholic tones used in traditional ceremonies as well as daily entertainment. This instrument has a close relationship with East Kalimantan's Sape' but possesses a different tonal character.",
                image: "Data/Kalimantan_Utara/alatmusik_kalut.jpg"
            },
            bahasaDaerah: { 
                name: "Bahasa Tidung & Bulungan", 
                desc_id: "Bahasa Tidung adalah bahasa utama suku Tidung yang mendiami wilayah Kalimantan Utara. Selain itu, terdapat bahasa Bulungan (bahasa resmi Kesultanan Bulungan) dan berbagai dialek suku Dayak lainnya yang hidup berdampingan. Contoh: 'Salamat' → Selamat (Tidung).", 
                desc_en: "Bahasa Tidung is the primary language of the Tidung tribe inhabiting the North Kalimantan area. Furthermore, there is Bahasa Bulungan (the official language of the Bulungan Sultanate) and various other Dayak tribal dialects living side by side. Example: 'Salamat' → Congratulations/Safe (Tidung).",
                image: ""
            },
            laguDaerah: { 
                name: "Bebilin / Tuyang", 
                desc_id: "Bebilin adalah lagu daerah asli Kalimantan Utara (suku Tidung) yang berisi pesan persatuan, gotong royong, dan kebersamaan dalam hidup bermasyarakat. Selain itu, terdapat lagu Tuyang yang merupakan lagu tradisional suku Dayak Kenyah di wilayah utara Kalimantan.", 
                desc_en: "Bebilin is an authentic folk song from North Kalimantan (Tidung tribe) that contains messages of unity, mutual cooperation, and togetherness in community life. In addition, there is the song Tuyang, which is a traditional song of the Dayak Kenyah tribe in the northern region of Kalimantan.",
                image: ""
            }
        }
    },
    {
        name: "Sulawesi_Utara",
        logo: "Data/Logo_Prov/sulut.jpeg",
        audio: "Data/Sulawesi_Utara/OInaNiKeke_sulut.mp3",
        budaya: {
            makananKhas: { 
                name: "Tinutuan (Bubur Manado)", 
                desc_id: "Tinutuan adalah bubur khas Manado dari beras yang dimasak bersama berbagai sayuran seperti labu kuning, singkong, jagung, dan bayam. Dikenal sangat sehat, bergizi tinggi, dan bebas daging (vegetarian). Menjadi sarapan ikonik dan ikon kuliner Sulawesi Utara yang telah mendunia.", 
                desc_en: "Tinutuan is a signature Manado porridge made of rice cooked together with various vegetables such as pumpkin, cassava, corn, and spinach. It is known to be very healthy, highly nutritious, and meat-free (vegetarian). It has become an iconic breakfast and a culinary icon of North Sulawesi that has gained international recognition.",
                image: "Data/Sulawesi_Utara/makanan_sulut.jpg"
            },
            tarianDaerah: { 
                name: "Tari Maengket", 
                desc_id: "Tari Maengket adalah tarian tradisional suku Minahasa yang dilakukan secara massal untuk merayakan panen, perkawinan, dan peristiwa penting. Gerakannya gemulai dengan formasi berbaris dan berpasangan. Dibagi menjadi tiga bagian: Maengket Panen, Maengket Pernikahan, dan Maengket Gembira.", 
                desc_en: "Tari Maengket is a traditional dance of the Minahasa tribe performed en masse to celebrate harvests, weddings, and important events. Its movements are graceful with formation lining and pairing. It is divided into three parts: Maengket Harvest, Maengket Wedding, and Maengket Joy.",
                image: "Data/Sulawesi_Utara/tari_sulut.jpg"
            },
            rumahAdat: { 
                name: "Rumah Pewaris (Walewangko)", 
                desc_id: "Rumah Pewaris atau Walewangko adalah rumah adat suku Minahasa berbentuk panggung dari kayu dengan tangga di kiri dan kanan bagian depan. Bagian bawah digunakan sebagai gudang. Terdiri dari tiga ruang: lesar (beranda), sekey (ruang tamu), dan pores (ruang keluarga).", 
                desc_en: "Rumah Pewaris or Walewangko is a traditional wooden stilt house of the Minahasa tribe featuring staircases on the left and right sides of the front. The lower section is utilized as storage. It consists of three rooms: lesar (veranda), sekey (living room), and pores (family room).",
                image: "Data/Sulawesi_Utara/rmhadat_sulut.jpg"
            },
            pakaianAdat: { 
                name: "Karahasan (Minahasa) & Laku Tepu (Sangihe)", 
                desc_id: "Sulawesi Utara memiliki keberagaman suku. Suku Minahasa memiliki pakaian adat tradisional bernama Karahasan (kain tenun serat pisang abaka) atau baju Pasangi. Sementara baju Laku Tepu yang terbuat dari serat kofo merupakan pakaian adat khas masyarakat Suku Sangihe Talaud.", 
                desc_en: "North Sulawesi possesses tribal diversity. The Minahasa tribe has a traditional attire called Karahasan (woven cloth from abaca banana fiber) or Pasangi clothes. Meanwhile, the Laku Tepu attire made from kofo fiber is the distinctive traditional clothing of the Sangihe Talaud community.",
                image: "Data/Sulawesi_Utara/pakaian_sulut.jpg"
            },
            senjataTradisional: { 
                name: "Kelewang & Peda", 
                desc_id: "Kelewang adalah pedang tradisional masyarakat Sulawesi Utara berbentuk panjang dengan bilah satu sisi yang tajam, digunakan dalam pertempuran dan upacara adat masyarakat Minahasa. Peda adalah senjata sejenis parang pendek yang juga umum di kalangan masyarakat Minahasa dan Sangihe-Talaud.", 
                desc_en: "Kelewang is a traditional long sword of the North Sulawesi community featuring a sharp single-edged blade, used in battles and traditional ceremonies of the Minahasa people. Peda is a weapon similar to a short machete that is also common among the Minahasa and Sangihe-Talaud communities.",
                image: "Data/Sulawesi_Utara/senjata_sulut.jpg"
            },
            alatMusikTradisional: { 
                name: "Kolintang", 
                desc_id: "Kolintang adalah alat musik pukul terbuat dari bilah kayu yang disusun berjajar bertingkat menghasilkan melodi indah. Berasal dari Minahasa dan diakui sebagai alat musik khas Sulawesi Utara. Telah berkembang menjadi orkestra Kolintang modern yang dipertunjukkan di berbagai festival internasional.", 
                desc_en: "Kolintang is a percussion instrument made of wooden blades arranged side-by-side in tiers to produce beautiful melodies. Originating from Minahasa, it is recognized as a typical musical instrument of North Sulawesi. It has evolved into modern Kolintang orchestras showcased at various international festivals.",
                image: "Data/Sulawesi_Utara/alatmusik_sulut.jpg"
            },
            bahasaDaerah: { 
                name: "Bahasa Minahasa & Melayu Manado", 
                desc_id: "Sulawesi Utara memiliki beragam bahasa Minahasa seperti Tombulu, Tondano, Tontemboan, dan Tonsea. Bahasa Melayu Manado (Manado Creole) digunakan sebagai bahasa pergaulan lintas suku. Contoh: 'Kumusta kau?' → Apa kabar? (Melayu Manado).", 
                desc_en: "North Sulawesi has various Minahasa languages such as Tombulu, Tondano, Tontemboan, and Tonsea. Bahasa Melayu Manado (Manado Creole) is used as a colloquial language across tribes. Example: 'Kumusta kau?' → How are you? (Melayu Manado).",
                image: ""
            },
            laguDaerah: { 
                name: "O Ina Ni Keke", 
                desc_id: "O Ina Ni Keke adalah lagu daerah Minahasa-Sulawesi Utara yang melankolis, menceritakan seorang anak yang merindukan ibu kandungnya. Menjadi lagu ikonik yang menggambarkan kasih sayang dan kerinduan dalam budaya Minahasa. Termasuk salah satu lagu daerah paling dikenal dari kawasan Indonesia Timur.", 
                desc_en: "O Ina Ni Keke is a melancholic folk song from Minahasa, North Sulawesi, telling the story of a child longing for their biological mother. It stands as an iconic song depicting affection and yearning in Minahasa culture, and is one of the most widely known folk songs from the Eastern Indonesia region.",
                image: ""
            }
        }
    },
    {
        name: "Gorontalo",
        logo: "Data/Logo_Prov/gorontalo.jpeg",
        audio: "Data/Gorontalo/hulonthalo_gorontalo.mp3",
        budaya: {
            makananKhas: { 
                name: "Binte Biluhuta", 
                desc_id: "Binte Biluhuta is sup jagung khas Gorontalo yang dimasak dengan ikan atau udang, kelapa parut, dan rempah pilihan. Merupakan makanan tradisional yang sering disajikan dalam upacara adat dan perayaan, menjadi simbol kekayaan bahan pangan lokal masyarakat Gorontalo yang berbasiskan jagung.", 
                desc_en: "Binte Biluhuta is a signature corn soup from Gorontalo cooked with fish or shrimp, grated coconut, and selected spices. It is a traditional food often served in custom ceremonies and celebrations, acting as a symbol of the local corn-based food resource wealth of the Gorontalo community.",
                image: "Data/Gorontalo/makanan_gorontalo.jpg"
            },
            tarianDaerah: { 
                name: "Tari Saronde", 
                desc_id: "Tari Saronde adalah tarian adat Gorontalo yang ditampilkan dalam upacara pernikahan. Penari menggunakan sapu tangan (saronde) sebagai properti dan menari dengan gerakan anggun penuh makna. Tarian ini melambangkan kecantikan, keanggunan, dan nilai-nilai kesopanan wanita Gorontalo.", 
                desc_en: "Tari Saronde is a traditional dance of Gorontalo performed during wedding ceremonies. Dancers use a handkerchief (saronde) as a prop and dance with graceful, meaningful movements. This dance symbolizes the beauty, elegance, and values of modesty of Gorontalo women.",
                image: "Data/Gorontalo/tari_gorontalo.jpg"
            },
            rumahAdat: { 
                name: "Dulohupa & Bantayo Poboide", 
                desc_id: "Dulohupa adalah rumah adat Gorontalo berbentuk panggung yang berfungsi sebagai balai musyawarah adat, namanya berarti 'musyawarah mufakat'. Atapnya berbentuk pelana bertumpuk dengan dua tangga di depan. Bantayo Poboide adalah rumah adat lain yang berfungsi sebagai tempat upacara kerajaan.", 
                desc_en: "Dulohupa is a traditional stilt house of Gorontalo serving as a custom deliberation hall, its name meaning 'deliberation for consensus'. Its roof is shaped like stacked gables with two front staircases. Bantayo Poboide is another traditional house that functions as a venue for royal ceremonies.",
                image: "Data/Gorontalo/rmhadat_gorontalo.jpg"
            },
            pakaianAdat: { 
                name: "Bili'u & Makuta", 
                desc_id: "Pakaian adat Gorontalo untuk wanita berupa Bili'u (baju pengantin mewah) lengkap dengan hiasan kepala, sedangkan pria menggunakan pakaian kebesaran bernama Makuta yang dipadukan dengan celana paluawala. Pakaian ini mencerminkan keagungan adat Gorontalo yang kental akan pengaruh Islam dan kerajaan masa lalu.", 
                desc_en: "The traditional attire of Gorontalo for women consists of Bili'u (a luxurious bridal dress) complete with a headpiece, while men wear grand ceremonial attire called Makuta paired with paluawala trousers. These garments reflect the grandeur of Gorontalo custom, heavily influenced by Islam and past kingdoms.",
                image: "Data/Gorontalo/pakaian_gorontalo.jpg"
            },
            senjataTradisional: { 
                name: "Wamilo", 
                desc_id: "Wamilo adalah senjata tradisional Gorontalo sejenis parang berujung rata/melengkung yang digunakan dalam bertani, pertempuran, dan upacara adat. Menjadi simbol keberanian pejuang Gorontalo. Selain Wamilo, masyarakat Gorontalo juga mengenal Baladu (sejenis keris) dan tombak bermata dua (Sabele).", 
                desc_en: "Wamilo is a traditional weapon of Gorontalo resembling a flat-tipped or curved machete used in farming, battles, and custom ceremonies. It serves as a symbol of the bravery of Gorontalo warriors. Aside from Wamilo, the Gorontalo community also recognizes Baladu (a type of keris) and double-edged spears (Sabele).",
                image: "Data/Gorontalo/senjata_gorontalo.jpg"
            },
            alatMusikTradisional: { 
                name: "Polopalo", 
                desc_id: "Polopalo adalah alat musik idiofon khas Gorontalo terbuat dari bambu, dimainkan dengan cara digesek atau dipukul. Menghasilkan suara khas yang sering digunakan dalam acara adat dan hiburan masyarakat Gorontalo. Merupakan alat musik unik yang hanya ditemukan di daerah Gorontalo dan sekitarnya.", 
                desc_en: "Polopalo is a distinctive idiophone musical instrument from Gorontalo crafted from bamboo, played by scraping or striking it. It produces a unique sound often used in custom events and community entertainment in Gorontalo. It is a unique musical instrument found only in the Gorontalo region and its surroundings.",
                image: "Data/Gorontalo/alatmusik_gorontalo.jpg"
            },
            bahasaDaerah: { 
                name: "Bahasa Gorontalo", 
                desc_id: "Bahasa Gorontalo adalah bahasa daerah yang digunakan masyarakat asli Gorontalo, masih berkerabat dengan bahasa-bahasa Sulawesi lainnya. Memiliki sastra lisan yang kaya berupa pantun (panton) dan cerita rakyat. Contoh: 'Apa Kabari?' → Apa kabar? (Gorontalo).", 
                desc_en: "Bahasa Gorontalo is the regional language spoken by the indigenous people of Gorontalo, related to other Celebes languages. It possesses a rich oral literature in the form of poetry (panton) and folklore. Example: 'Apa Kabari?' → How are you? (Gorontalo).",
                image: ""
            },
            laguDaerah: { 
                name: "Hulonthalo Lipu'u", 
                desc_id: "Hulonthalo Lipu'u adalah lagu daerah Gorontalo yang mengungkapkan kecintaan mendalam terhadap tanah Gorontalo. Merupakan lagu kebanggaan masyarakat yang mencerminkan identitas dan semangat kedaerahan. Hulonthalo adalah nama kuno Gorontalo yang bermakna tanah yang subur dan kaya.", 
                desc_en: "Hulonthalo Lipu'u is a folk song of Gorontalo expressing deep love for the land of Gorontalo. It is a pride song of the community reflecting regional identity and spirit. Hulonthalo is an ancient name for Gorontalo, meaning a fertile and rich land.",
                image: ""
            }
        }
    },
    {
        name: "Sulawesi_Tengah",
        logo: "Data/Logo_Prov/sultengah.jpeg",
        audio: "Data/Sulawesi_Tengah/tondokkadadiangku_sulteng.mp3",
        budaya: {
            makananKhas: { 
                name: "Kaledo", 
                desc_id: "Kaledo (Kaki Lembu Donggala) adalah sup tulang sapi dengan bumbu asam pedas khas Sulawesi Tengah. Kuahnya bening segar dengan cita rasa asam dari belimbing wuluh, menjadi kuliner ikon Palu yang wajib dicoba. Namanya merupakan akronim dari 'Kaki LEbu DOngala' (Donggala).", 
                desc_en: "Kaledo (Kaki Lembu Donggala) is a beef bone soup with distinctive spicy and sour seasoning from Central Sulawesi. Its fresh clear broth with a sour flavor from starfruit makes it an iconic culinary item of Palu that is a must-try. Its name is an acronym for 'Kaki Lembu Donggala'.",
                image: "Data/Sulawesi_Tengah/makanan_sulteng.jpg"
            },
            tarianDaerah: { 
                name: "Tari Pontanu", 
                desc_id: "Tari Pontanu adalah tarian tradisional Sulawesi Tengah yang menggambarkan kegiatan menenun kain khas Donggala. Gerakannya lemah lembut mencerminkan kesabaran dan ketelitian para penenun. Kain tenun Donggala dari Sulteng dikenal sebagai salah satu kain tenun terbaik di Indonesia.", 
                desc_en: "Tari Pontanu is a traditional dance of Central Sulawesi depicting the activity of weaving the distinctive Donggala cloth. Its gentle movements reflect the patience and meticulousness of the weavers. Donggala woven fabric from Central Sulawesi is known as one of the finest woven fabrics in Indonesia.",
                image: "Data/Sulawesi_Tengah/tari_sulteng.jpg"
            },
            rumahAdat: { 
                name: "Rumah Tambi", 
                desc_id: "Rumah Tambi adalah rumah adat suku Lore Sulawesi Tengah berbentuk panggung dengan atap menjulang tinggi terbuat dari ijuk. Memiliki tangga masuk dari depan and satu ruangan besar yang tidak bersekat. Merupakan warisan arsitektur tradisional yang mencerminkan kearifan lokal masyarakat pegunungan Sulteng.", 
                desc_en: "Rumah Tambi is a traditional house of the Lore tribe in Central Sulawesi built as a stilt house with a soaring roof made of thatch. It features a front entrance staircase and a single large unpartitioned room. It stands as a traditional architectural heritage reflecting the local wisdom of the Central Sulawesi mountainous communities.",
                image: "Data/Sulawesi_Tengah/rmhadat_sulteng.jpg"
            },
            pakaianAdat: { 
                name: "Baju Nggembe", 
                desc_id: "Baju Nggembe adalah pakaian adat Sulawesi Tengah yang hanya dikenakan wanita suku Kaili dalam upacara resmi. Berbentuk unik: persegi empat dengan lengan lebar dan kerah bulat panjang, terbuat dari kain tenun Donggala berwarna cerah. Biasanya dipadukan dengan rok panjang berbentuk rumbai.", 
                desc_en: "Baju Nggembe is the traditional clothing of Central Sulawesi worn exclusively by women of the Kaili tribe during official ceremonies. It features a unique shape: a square with wide sleeves and a long round collar, crafted from brightly colored Donggala woven fabric. It is usually paired with a long tassel-shaped skirt.",
                image: "Data/Sulawesi_Tengah/pakaian_sulteng.jpg"
            },
            senjataTradisional: { 
                name: "Pasatimpo", 
                desc_id: "Pasatimpo adalah senjata tradisional Sulawesi Tengah sejenis keris/belati dengan hulu yang khas bengkok ke bawah atau bermotif burung. Menjadi simbol kehormatan, keberanian, dan penolak bala bagi pria suku Kaili. Biasanya dipasang di pinggang depan sebagai pelengkap baju adat.", 
                desc_en: "Pasatimpo is a traditional weapon of Central Sulawesi similar to a keris/dagger featuring a distinctive hilt bent downward or shaped with a bird motif. It serves as a symbol of honor, bravery, and warding off misfortune for men of the Kaili tribe. It is usually tucked into the front waist as a complement to traditional garments.",
                image: "Data/Sulawesi_Tengah/senjata_sulteng.jpg"
            },
            alatMusikTradisional: { 
                name: "Ganda", 
                desc_id: "Ganda adalah alat musik pukul tradisional Sulawesi Tengah berupa gendang silinder dua sisi yang dimainkan dengan telapak tangan. Digunakan dalam berbagai upacara adat dan pertunjukan seni daerah. Ganda menjadi pengiring utama tarian Dero yang populer di kalangan masyarakat Sulawesi Tengah.", 
                desc_en: "Ganda is a traditional percussion instrument of Central Sulawesi in the form of a double-sided cylindrical drum played with the palms of the hands. Used in various custom ceremonies and regional art performances, Ganda serves as the primary accompaniment for the Dero dance popular among Central Sulawesi communities.",
                image: "Data/Sulawesi_Tengah/alatmusik_sulteng.jpg"
            },
            bahasaDaerah: { 
                name: "Bahasa Kaili", 
                desc_id: "Bahasa Kaili adalah bahasa utama suku Kaili yang mendiami lembah Palu, Sulawesi Tengah. Sulawesi Tengah memiliki keragaman bahasa dengan puluhan bahasa suku asli seperti Pamona, Mori, Bungku, Saluan, dan Kulawi. Contoh: 'Nemba' → Selamat pagi (Kaili).", 
                desc_en: "Bahasa Kaili is the primary language of the Kaili tribe inhabiting the Palu valley, Central Sulawesi. Central Sulawesi possesses language diversity with dozens of indigenous tribal languages like Pamona, Mori, Bungku, Saluan, and Kulawi. Example: 'Nemba' → Good morning (Kaili).",
                image: ""
            },
            laguDaerah: { 
                name: "Tondok Kadadingku", 
                desc_id: "Tondok Kadadingku adalah lagu daerah Sulawesi Tengah yang mengungkapkan kerinduan dan kecintaan mendalam terhadap kampung halaman. Melodi yang syahdu and lirik yang menyentuh menjadikannya lagu ikonik masyarakat Sulteng. Dinyanyikan dalam berbagai acara adat sebagai ekspresi identitas budaya.", 
                desc_en: "Tondok Kadadingku is a folk song of Central Sulawesi expressing deep yearning and love for one's hometown. Its serene melody and touching lyrics make it an iconic song for the Central Sulawesi community, sung during various custom events as an expression of cultural identity.",
                image: ""
            }
        }
    },
    {
        name: "Sulawesi_Barat",
        logo: "Data/Logo_Prov/sulbar.jpeg",
        audio: "Data/Sulawesi_Barat/tengganglopi_sulbar.mp3",
        budaya: {
            makananKhas: { 
                name: "Bau Peapi", 
                desc_id: "Bau Peapi adalah masakan ikan khas Sulawesi Barat yang dimasak dengan bumbu rempah-rempah pilihan dan sayuran. Merupakan hidangan tradisional masyarakat Mandar yang hidup berdampingan dengan laut. Nama 'Bau' berarti ikan dalam bahasa Mandar, mencerminkan betapa pentingnya ikan dalam kehidupan sehari-hari.", 
                desc_en: "Bau Peapi is a signature fish dish from West Sulawesi cooked with selected spice seasonings and vegetables. It is a traditional meal of the Mandar community who live alongside the sea. The name 'Bau' means fish in the Mandar language, reflecting how essential fish is in daily life.",
                image: "Data/Sulawesi_Barat/makanan_sulbar.jpg"
            },
            tarianDaerah: { 
                name: "Tari Pattudu", 
                desc_id: "Tari Pattudu adalah tarian tradisional suku Mandar Sulawesi Barat yang melambangkan kegembiraan dan syukur. Gerakannya dinamis dengan kostum khas dihiasi ornamen budaya Mandar. Menjadi tarian penyambutan tamu kehormatan dan pertunjukan dalam festival budaya Sulawesi Barat.", 
                desc_en: "Tari Pattudu is a traditional dance of the Mandar tribe in West Sulawesi symbolizing joy and gratitude. Its movements are dynamic with distinctive costumes decorated with Mandar cultural ornaments. It serves as a welcoming dance for honored guests and a performance in West Sulawesi cultural festivals.",
                image: "Data/Sulawesi_Barat/tari_sulbar.jpg"
            },
            rumahAdat: { 
                name: "Rumah Boyang", 
                desc_id: "Boyang adalah rumah adat suku Mandar di Sulawesi Barat berbentuk panggung dengan atap pelana. Terbuat dari kayu pilihan dan memiliki ruangan yang mencerminkan hierarki sosial masyarakat Mandar. Ruang utama (boyang adaq) hanya boleh dimasuki tamu kehormatan dan digunakan untuk upacara adat.", 
                desc_en: "Boyang is the traditional house of the Mandar tribe in West Sulawesi, built as a stilt house with a gable roof. It is crafted from selected wood and features rooms that reflect the social hierarchy of the Mandar community. The main room (boyang adaq) can only be entered by honored guests and is used for custom ceremonies.",
                image: "Data/Sulawesi_Barat/rmhadat_sulbar.jpg"
            },
            pakaianAdat: { 
                name: "Pakaian Mandar (Sutra Sekomandi)", 
                desc_id: "Pakaian adat suku Mandar Sulawesi Barat berupa baju warna cerah dari bahan sutra Mandar yang terkenal halus dan berkualitas tinggi. Dilengkapi sarung Mandar dengan motif kotak-kotak khas yang ditenun dengan teknik tradisional. Sutra Mandar (Sekomandi) diakui sebagai salah satu kain sutra terbaik di Indonesia.", 
                desc_en: "The traditional clothing of the Mandar tribe in West Sulawesi consists of brightly colored garments made from Mandar silk, which is famously smooth and high in quality. It is equipped with a Mandar sarong featuring distinctive checkered motifs woven using traditional techniques. Mandar silk (Sekomandi) is recognized as one of the best silk fabrics in Indonesia.",
                image: "Data/Sulawesi_Barat/pakaian_sulbar.jpg"
            },
            senjataTradisional: { 
                name: "Badik Mandar", 
                desc_id: "Badik Mandar adalah senjata tradisional suku Mandar berupa pisau pendek dengan bilah melengkung dan gagang berukir indah. Menjadi simbol kehormatan dan keberanian pria Mandar. Setiap laki-laki dewasa Mandar secara tradisional membawa Badik sebagai bagian dari busana adat.", 
                desc_en: "Badik Mandar is a traditional weapon of the Mandar tribe in the form of a short knife with a curved blade and a beautifully carved handle. It serves as a symbol of honor and bravery for Mandar men. Every adult Mandar male traditionally carries a Badik as part of their custom attire.",
                image: "Data/Sulawesi_Barat/senjata_sulbar.jpg"
            },
            alatMusikTradisional: { 
                name: "Kecapi Mandar", 
                desc_id: "Kecapi Mandar adalah alat musik petik tradisional suku Mandar yang terbuat dari kayu berbentuk menyerupai perahu. Menghasilkan nada indah dan sering dipadukan dengan vokal dalam kesenian tradisional Mandar. Merupakan instrumen utama dalam pertunjukan seni musik Mandar yang disebut Kalindaqdaq.", 
                desc_en: "Kecapi Mandar is a traditional plucked string instrument of the Mandar tribe made of wood shaped to resemble a boat. It produces beautiful tones and is often combined with vocals in traditional Mandar arts, acting as the primary instrument in the Mandar musical art performance called Kalindaqdaq.",
                image: "Data/Sulawesi_Barat/alatmusik_sulbar.jpg"
            },
            bahasaDaerah: { 
                name: "Bahasa Mandar", 
                desc_id: "Bahasa Mandar adalah bahasa utama masyarakat Sulawesi Barat yang digunakan oleh suku Mandar, Toraja-Mamasa, dan suku lainnya. Kaya akan peribahasa dan sastra lisan (kalindaqdaq/pantun Mandar) yang mencerminkan kearifan budaya. Contoh: 'Manda'' → Orang Mandar.", 
                desc_en: "Bahasa Mandar is the primary language of the West Sulawesi community used by the Mandar tribe, Toraja-Mamasa, and other tribes. It is rich in proverbs and oral literature (kalindaqdaq/Mandar poetry) reflecting cultural wisdom. Example: 'Manda'' → Mandar people.",
                image: ""
            },
            laguDaerah: { 
                name: "Tenggang-Tenggang Lopi", 
                desc_id: "Tenggang-Tenggang Lopi adalah lagu daerah Sulawesi Barat yang menggambarkan kehidupan pelaut Mandar yang ulung berlayar. Mencerminkan keberanian dan kecakapan maritim masyarakat Mandar yang dikenal sebagai pelaut andal dengan perahu legendaris mereka, Perahu Sandeq (perahu cadik tercepat).", 
                desc_en: "Tenggang-Tenggang Lopi is a folk song from West Sulawesi depicting the life of Mandar sailors who are expert seafarers. It reflects the bravery and maritime prowess of the Mandar community, known as reliable sailors with their legendary vessel, the Sandeq Boat (the fastest outrigger canoe).",
                image: ""
            }
        }
    },
    {
        name: "Sulawesi_Selatan",
        logo: "Data/Logo_Prov/sulsel.jpeg",
        audio: "Data/Sulawesi_Selatan/anginmamiri_sulsel.mp3",
        budaya: {
            makananKhas: { 
                name: "Coto Makassar", 
                desc_id: "Coto Makassar adalah sup jeroan sapi (hati, jantung, paru) dengan bumbu rempah khas, disajikan dengan ketupat atau buras. Merupakan kuliner legendaris Makassar yang sudah berusia ratusan tahun dan kini telah menjadi ikon kuliner Indonesia yang dapat ditemukan di berbagai kota besar nusantara.", 
                desc_en: "Coto Makassar is a beef offal soup (liver, heart, lungs) with distinctive spice seasonings, served with ketupat or buras. It is a legendary culinary item from Makassar that is hundreds of years old and has now become an Indonesian culinary icon found in various major cities across the archipelago.",
                image: "Data/Sulawesi_Selatan/makanan_sulsel.jpg"
            },
            tarianDaerah: { 
                name: "Tari Pakarena", 
                desc_id: "Tari Pakarena adalah tarian tradisional suku Makassar dengan gerakan halus dan lemah gemulai yang penuh makna filosofis. Berasal dari legenda bumi dan langit kerajaan Gowa. Melambangkan ketaatan, kehalusan budi, dan keanggunan wanita Makassar. Telah diakui sebagai warisan budaya nasional.", 
                desc_en: "Tari Pakarena is a traditional dance of the Makassar tribe featuring smooth, graceful movements full of philosophical meaning. Originating from the earth and sky legend of the Gowa kingdom, it symbolizes the obedience, refinement of character, and elegance of Makassar women. It has been recognized as a national cultural heritage.",
                image: "Data/Sulawesi_Selatan/tari_sulsel.jpg"
            },
            rumahAdat: { 
                name: "Tongkonan (Toraja)", 
                desc_id: "Tongkonan adalah rumah adat suku Toraja Sulawesi Selatan dengan atap melengkung tinggi menyerupai tanduk kerbau (atau perahu terbalik). Merupakan pusat kehidupan sosial, upacara adat, dan lambang status keluarga Toraja. Setiap detail ukiran dan warna memiliki makna filosofis dalam sistem kepercayaan Aluk Todolo.", 
                desc_en: "Tongkonan is the traditional house of the Toraja tribe in South Sulawesi featuring a high curved roof resembling buffalo horns (or an inverted boat). It serves as the center of social life, custom ceremonies, and a symbol of status for Torajan families. Every detail of carvings and colors holds a philosophical meaning in the Aluk Todolo belief system.",
                image: "Data/Sulawesi_Selatan/rmhadat_sulsel.jpg"
            },
            pakaianAdat: { 
                name: "Baju Bodo", 
                desc_id: "Baju Bodo adalah pakaian adat tradisional wanita Bugis-Makassar berupa blus berbentuk persegi dari bahan muslin tipis berwarna-warni. Warna baju menunjukkan usia dan status sosial pemakainya (jingga untuk remaja, merah untuk dewasa, putih untuk bangsawan). Merupakan salah satu pakaian adat tertua di Indonesia.", 
                desc_en: "Baju Bodo is the traditional clothing of Bugis-Makassar women in the form of a square blouse made of thin, colorful muslin material. The color of the garment indicates the wearer's age and social status (orange for teenagers, red for adults, white for nobility). It is one of the oldest traditional attires in Indonesia.",
                image: "Data/Sulawesi_Selatan/pakaian_sulsel.jpg"
            },
            senjataTradisional: { 
                name: "Badik Bugis", 
                desc_id: "Badik Bugis adalah senjata tradisional suku Bugis berupa pisau pendek dengan bilah melengkung bermakna filosofis tinggi. Wajib dimiliki pria Bugis sebagai simbol kejantanan, kehormatan, dan harga diri. Badik Bugis memiliki jenis-jenis khusus seperti Badik Lontara, Badik Raja, dan Badik Gecong dengan fungsi berbeda.", 
                desc_en: "Badik Bugis is a traditional weapon of the Bugis tribe in the form of a short knife with a curved blade carrying high philosophical meaning. It is a must-own for Bugis men as a symbol of masculinity, honor, and self-esteem. Badik Bugis has specific types such as Badik Lontara, Badik Raja, and Badik Gecong with different functions.",
                image: "Data/Sulawesi_Selatan/senjata_sulsel.jpg"
            },
            alatMusikTradisional: { 
                name: "Kacaping (Kecapi Bugis)", 
                desc_id: "Kacaping adalah alat musik petik tradisional Bugis berbentuk perahu dengan dua senar. Digunakan untuk mengiringi lagu-lagu tradisional dan penceritaan epos I La Galigo, karya sastra terpanjang di dunia. Suaranya lembut dan meditatif, sering mengiringi syair-syair Bugis dalam upacara adat.", 
                desc_en: "Kacaping is a traditional Bugis plucked string instrument shaped like a boat with two strings. Used to accompany traditional songs and the storytelling of the I La Galigo epic, the longest literary work in the world. Its sound is soft and meditative, often accompanying Bugis verses in custom ceremonies.",
                image: "Data/Sulawesi_Selatan/alatmusik_sulsel.jpg"
            },
            bahasaDaerah: { 
                name: "Bahasa Bugis, Makassar, & Toraja", 
                desc_id: "Bahasa Bugis adalah salah satu bahasa terbesar di Sulawesi dengan jutaan penutur. Memiliki aksara sendiri (Lontara) yang digunakan dalam naskah-sastra klasik termasuk epos I La Galigo. Selain Bugis, terdapat Bahasa Makassar dan Bahasa Toraja sebagai bahasa utama lain di Sulawesi Selatan. Contoh: 'Aga kabaremu?' → Apa kabarmu? (Bugis).", 
                desc_en: "The Bugis language is one of the largest languages in Celebes with millions of speakers. It features its own script (Lontara) used in classical literary manuscripts, including the I La Galigo epic. Aside from Bugis, there are Makassar and Toraja languages as other primary languages in South Sulawesi. Example: 'Aga kabaremu?' → How are you? (Bugis).",
                image: ""
            },
            laguDaerah: { 
                name: "Angin Mammiri", 
                desc_id: "Angin Mammiri adalah lagu daerah Sulawesi Selatan yang paling dikenal, menggambarkan angin sepoi-sepoi yang membawa kerinduan seorang perantau terhadap tanah kelahirannya. Menjadi simbol identitas budaya Bugis-Makassar dan sering dinyanyikan dalam berbagai acara budaya di seluruh Indonesia.", 
                desc_en: "Angin Mammiri is the most recognized folk song from South Sulawesi, depicting a gentle breeze that carries a migrant's longing for their homeland. It stands as a symbol of Bugis-Makassar cultural identity and is frequently sung in various cultural events across Indonesia.",
                image: ""
            }
        }
    },
    {
        name: "Sulawesi_Tenggara",
        logo: "Data/Logo_Prov/sultengg.jpeg",
        audio: "Data/Sulawesi_Tenggara/peiatawatawa_sultengg.mp3",
        budaya: {
            makananKhas: { 
                name: "Sinonggi", 
                desc_id: "Sinonggi adalah makanan pokok masyarakat Tolaki Sulawesi Tenggara berbahan sagu yang dimasak hingga kental dan kenyal. Disajikan dengan kuah ikan atau sayur berkuah, merupakan identitas kuliner masyarakat Kendari dan suku Tolaki. Sagu yang digunakan berasal dari pohon sagu yang tumbuh subur di Sulawesi Tenggara.", 
                desc_en: "Sinonggi is the staple food of the Tolaki community in Southeast Sulawesi made of sago cooked until thick and chewy. Served with fish broth or vegetable soup, it represents the culinary identity of the Kendari people and the Tolaki tribe. The sago used originates from sago trees that grow abundantly in Southeast Sulawesi.",
                image: "Data/Sulawesi_Tenggara/makanan_sultengg.jpg"
            },
            tarianDaerah: { 
                name: "Tari Lulo (Malulo)", 
                desc_id: "Tari Lulo adalah tarian tradisional suku Tolaki yang dilakukan secara massal bergandengan tangan membentuk lingkaran besar. Melambangkan kebersamaan dan gotong royong masyarakat Sulawesi Tenggara. Kini berkembang menjadi tarian pergaulan yang dilakukan spontan dalam pesta dan acara resmi.", 
                desc_en: "Tari Lulo is a traditional dance of the Tolaki tribe performed en masse by holding hands to form a large circle, symbolizing togetherness and mutual cooperation of the Southeast Sulawesi people. It has now developed into a social dance performed spontaneously during parties and official events.",
                image: "Data/Sulawesi_Tenggara/tari_sultengg.jpg"
            },
            rumahAdat: { 
                name: "Istana Malige (Buton)", 
                desc_id: "Istana Malige adalah rumah adat Kesultanan Buton di Sulawesi Tenggara berbentuk bangunan kayu berlantai empat tanpa menggunakan paku. Dibangun seluruhnya dari kayu pilihan dengan sistem pasak. Merupakan warisan arsitektur tradisional yang mencerminkan kejayaan dan kecanggihan teknik bangunan Kesultanan Buton.", 
                desc_en: "Istana Malige is the traditional house of the Buton Sultanate in Southeast Sulawesi, built as a four-story wooden structure without using any nails. Constructed entirely from selected wood with a peg system, it stands as a traditional architectural heritage reflecting the glory and sophistication of the Buton Sultanate's construction techniques.",
                image: "Data/Sulawesi_Tenggara/rmhadat_sultengg.jpg"
            },
            pakaianAdat: { 
                name: "Kinawo & Babu Nggawi (Tolaki)", 
                desc_id: "Pakaian adat suku Tolaki Sulawesi Tenggara terdiri dari Kinawo (berbahan kulit kayu dalisi) dan Babu Nggawi yang lebih modern. Babu Nggawi merupakan pakaian pengantin wanita Tolaki dengan bagian atas disebut lipa hinorau dan bawah roo mendaa, dipadukan aksesoris dan hiasan kepala yang mewah.", 
                desc_en: "The traditional clothing of the Tolaki tribe in Southeast Sulawesi consists of Kinawo (made from dalisi tree bark) and the more modern Babu Nggawi. Babu Nggawi is the bridal attire for Tolaki women with the upper section called lipa hinorau and the lower called roo mendaa, paired with luxurious accessories and headpieces.",
                image: "Data/Sulawesi_Tenggara/pakaian_sultengg.jpg"
            },
            senjataTradisional: { 
                name: "Keris Buton (Lariangi)", 
                desc_id: "Keris Buton (atau dikenal juga senjata seperti Lariangi) adalah senjata tradisional dari wilayah Buton dengan hiasan dan pamor yang khas mencerminkan pengaruh maritim Sulawesi Tenggara. Senjata ini merupakan benda pusaka yang diwariskan turun-temurun dan sangat dihormati oleh masyarakat adat Kesultanan Buton.", 
                desc_en: "Keris Buton (also known as weapons like Lariangi) is a traditional weapon from the Buton region with distinctive decorations and pamor patterns reflecting Southeast Sulawesi's maritime influence. This weapon is an heirloom passed down through generations and is highly respected by the indigenous community of the Buton Sultanate.",
                image: "Data/Sulawesi_Tenggara/senjata_sultengg.jpg"
            },
            alatMusikTradisional: { 
                name: "Gambus Buton & Okanda", 
                desc_id: "Gambus Buton adalah alat musik petik tradisional Sulawesi Tenggara yang berasal dari pengaruh Arab melalui jalur perdagangan, digunakan dalam kesenian musik Melayu-Arab khas Buton. Okanda adalah gong khas daerah ini yang digunakan untuk mengiringi tarian Lulo dalam upacara adat.", 
                desc_en: "Gambus Buton is a traditional plucked string instrument of Southeast Sulawesi stemming from Arabic influence via trade routes, used in the typical Malay-Arabic musical arts of Buton. Okanda is a signature gong of this region used to accompany the Lulo dance in custom ceremonies.",
                image: "Data/Sulawesi_Tenggara/alatmusik_sultengg.jpg"
            },
            bahasaDaerah: { 
                name: "Bahasa Tolaki & Wolio (Buton)", 
                desc_id: "Bahasa Tolaki adalah bahasa utama suku Tolaki di Sulawesi Tenggara. Selain itu terdapat Bahasa Wolio (Buton) yang kaya akan sastra dan budaya kerajaan maritim Buton yang pernah menjadi salah satu kesultanan terkuat di Indonesia timur. Contoh: 'Ihinggahi' → Selamat datang (Tolaki).", 
                desc_en: "Bahasa Tolaki is the primary language of the Tolaki tribe in Southeast Sulawesi. Additionally, there is Bahasa Wolio (Buton) which is rich in literature and the culture of the Buton maritime kingdom, once one of the strongest sultanates in eastern Indonesia. Example: 'Ihinggahi' → Welcome (Tolaki).",
                image: ""
            },
            laguDaerah: { 
                name: "Peia Tawa-Tawa", 
                desc_id: "Peia Tawa-Tawa adalah lagu daerah Sulawesi Tenggara yang riang dan bersemangat, menggambarkan suasana kegembiraan masyarakat. Sering dinyanyikan dalam acara adat dan hiburan rakyat Sulawesi Tenggara. Melambangkan semangat dan keceriaan masyarakat Sulawesi Tenggara dalam menjalani kehidupan.", 
                desc_en: "Peia Tawa-Tawa is a cheerful and spirited folk song from Southeast Sulawesi, depicting a lively atmosphere of community joy. Frequently sung during custom events and folk entertainment, it symbolizes the spirit and cheerfulness of the Southeast Sulawesi people in living life.",
                image: ""
            }
        }
    },
    {
        name: "Bengkulu",
        logo: "Data/Logo_Prov/bengkulu.jpeg",
        audio: "Data/Bengkulu/lalanbelek_bengkulu.mp3",
        budaya: {
            makananKhas: { 
                name: "Pendap", 
                desc_id: "Pendap adalah masakan ikan berbumbu khas Bengkulu yang dibungkus daun talas dan dipanggang perlahan, menghasilkan cita rasa gurih, pedas, dan kaya rempah.", 
                desc_en: "Pendap is a seasoned fish dish characteristic of Bengkulu wrapped in taro leaves and slowly grilled, creating a savory, spicy, and spice-rich flavor profile.",
                image: "Data/Bengkulu/makanan_bengkulu.jpg"
            },
            tarianDaerah: { 
                name: "Tari Andun", 
                desc_id: "Tari Andun adalah tarian tradisional Bengkulu yang dilaksanakan dalam pesta adat pernikahan sebagai ungkapan kegembiraan dan rasa syukur masyarakat.", 
                desc_en: "Tari Andun is a traditional dance of Bengkulu performed during custom wedding parties as an expression of joy and gratitude of the community.",
                image: "Data/Bengkulu/tari_bengkulu.jpg"
            },
            rumahAdat: { 
                name: "Rumah Bubungan Lima", 
                desc_id: "Rumah Bubungan Lima adalah rumah tradisional Bengkulu dengan atap berbentuk lima sudut yang berdiri di atas tiang-tiang kayu kokoh, mencerminkan arsitektur Melayu pesisir barat Sumatera.", 
                desc_en: "Rumah Bubungan Lima is a traditional house of Bengkulu with a five-angled roof standing atop sturdy wooden pillars, reflecting the Malay architecture of Sumatra's western coast.",
                image: "Data/Bengkulu/rmhadat_bengkulu.jpg"
            },
            pakaianAdat: { 
                name: "Baju Kurung Besurek", 
                desc_id: "Baju Kurung Besurek adalah busana khas Bengkulu yang terbuat dari kain besurek bermotif kaligrafi Arab, mencerminkan kuatnya pengaruh Islam dalam budaya Bengkulu.", 
                desc_en: "Baju Kurung Besurek is the distinctive attire of Bengkulu made from besurek fabric with Arabic calligraphy motifs, reflecting the strong influence of Islam in Bengkulu culture.",
                image: "Data/Bengkulu/pakaian_bengkulu.jpg"
            },
            senjataTradisional: { 
                name: "Keris Bengkulu", 
                desc_id: "Keris Bengkulu adalah keris lokal dengan bentuk gagang dan bilah khas daerah ini, digunakan dalam upacara adat dan diwariskan sebagai pusaka turun-temurun.", 
                desc_en: "Keris Bengkulu is a local keris with a handle and blade shape characteristic of this region, used in custom ceremonies and passed down as a multi-generational heirloom.",
                image: "Data/Bengkulu/senjata_bengkulu.jpg"
            },
            alatMusikTradisional: { 
                name: "Dol", 
                desc_id: "Dol adalah gendang besar khas Bengkulu yang dimainkan dalam upacara Tabot dan berbagai perayaan budaya masyarakat Bengkulu.", 
                desc_en: "Dol is a signature large drum from Bengkulu played during the Tabot ceremony and various cultural celebrations of the Bengkulu community.",
                image: "Data/Bengkulu/alatmusik_bengkulu.jpg"
            },
            bahasaDaerah: { 
                name: "Bahasa Melayu Bengkulu", 
                desc_id: "Bahasa Melayu Bengkulu adalah bahasa Melayu dengan dialek khas pesisir barat Sumatera. Contoh: \"Dari mano?\" = Dari mana?", 
                desc_en: "Bahasa Melayu Bengkulu is the Malay language spoken with a distinctive dialect of Sumatra's western coast. Example: \"Dari mano?\" = Where are you from?",
                image: ""
            },
            laguDaerah: { 
                name: "Lalan Belek", 
                desc_id: "Lalan Belek adalah lagu daerah legendaris khas Suku Rejang, Bengkulu, yang mengisahkan hikayat bidadari bernama Lalan yang turun ke bumi dan menikah dengan manusia, penuh nilai budaya dan kearifan lokal Bengkulu.", 
                desc_en: "Lalan Belek is a legendary folk song characteristic of the Rejang Tribe in Bengkulu, recounting the myth of an angel named Lalan who descended to earth and married a human, rich in cultural values and local wisdom of Bengkulu.",
                image: ""
            }
        }
    },
    {
        name: "Bangka_Belitung",
        logo: "Data/Logo_Prov/bangka_belitung.jpeg",
        audio: "Data/Bangka_Belitung/yomiak_bangkabelitung.mp3",
        budaya: {
            makananKhas: { 
                name: "Mie Belitung", 
                desc_id: "Mie Belitung adalah mi kuning dengan kuah kari udang yang kental, disajikan bersama tauge, kentang goreng, dan kerupuk. Merupakan ikon kuliner khas Tanjung Pandan.", 
                desc_en: "Mie Belitung is a yellow noodle dish with a thick shrimp curry broth, served along with bean sprouts, fried potatoes, and crackers. It stands as a distinctive culinary icon of Tanjung Pandan.",
                image: "Data/Bangka_Belitung/makanan_bangkabelitung.jpg"
            },
            tarianDaerah: { 
                name: "Tari Campak", 
                desc_id: "Tari Campak adalah tarian pergaulan khas Bangka Belitung yang dibawakan oleh muda-mudi secara berpasangan dengan gerakan riang, energik, dan penuh semangat.", 
                desc_en: "Tari Campak is a signature social dance of Bangka Belitung performed by youths in pairs with cheerful, energetic, and highly spirited movements.",
                image: "Data/Bangka_Belitung/tari_bangkabelitung.jpg"
            },
            rumahAdat: { 
                name: "Rumah Panggung Rakyat", 
                desc_id: "Rumah tradisional Bangka berbentuk panggung kayu yang sederhana namun fungsional, mencerminkan kehidupan masyarakat pesisir yang bersahaja.", 
                desc_en: "The traditional house of Bangka is built as a wooden stilt house that is simple yet functional, reflecting the modest life of coastal communities.",
                image: "Data/Bangka_Belitung/rmhadat_bangkabelitung.jpg"
            },
            pakaianAdat: { 
                name: "Paksian", 
                desc_id: "Paksian adalah busana adat pengantin Bangka Belitung dengan warna merah dominan dan aksesoris emas yang megah, mencerminkan kemeriahan dan kesakralan pernikahan adat.", 
                desc_en: "Paksian is the bridal traditional attire of Bangka Belitung featuring a dominant red color and majestic gold accessories, reflecting the festivity and sacredness of traditional weddings.",
                image: "Data/Bangka_Belitung/pakaian_bangkabelitung.jpg"
            },
            senjataTradisional: { 
                name: "Siwar", 
                desc_id: "Siwar adalah senjata tajam seperti belati khas Bangka Belitung dengan bilah lurus dan tipis, digunakan dalam kebutuhan adat maupun sebagai alat perlindungan diri.", 
                desc_en: "Siwar is a sharp weapon similar to a dagger typical of Bangka Belitung with a straight and thin blade, used for custom necessities as well as a tool for self-defense.",
                image: "Data/Bangka_Belitung/senjata_bangkabelitung.jpg"
            },
            alatMusikTradisional: { 
                name: "Gendang Melayu", 
                desc_id: "Gendang Melayu adalah gendang tradisional yang menjadi instrumen utama dalam musik Melayu Bangka, mengiringi tarian dan lagu-lagu daerah setempat.", 
                desc_en: "Gendang Melayu is a traditional drum acting as the primary instrument in Bangka Malay music, accompanying local dances and folk songs.",
                image: "Data/Bangka_Belitung/alatmusik_bangkabelitung.jpg"
            },
            bahasaDaerah: { 
                name: "Bahasa Melayu Bangka", 
                desc_id: "Bahasa Melayu Bangka adalah dialek Melayu dengan logat yang unik dan khas. Contoh: \"Ke mano?\" = Mau ke mana?", 
                desc_en: "Bahasa Melayu Bangka is a Malay dialect spoken with a unique and distinctive accent. Example: \"Ke mano?\" = Where are you going?",
                image: ""
            },
            laguDaerah: { 
                name: "Yo Miak", 
                desc_id: "Yo Miak adalah lagu daerah asli Bangka Belitung yang menggambarkan semangat gotong royong masyarakat saat bekerja di kebun lada bersama-sama, sejalan dengan semboyan daerah \"sepintu sedulang\".", 
                desc_en: "Yo Miak is an authentic folk song from Bangka Belitung depicting the community's spirit of mutual cooperation when working in pepper gardens together, in line with the regional motto \"sepintu sedulang\".",
                image: ""
            }
        }
    },
    {
        name: "Banten",
        logo: "Data/Logo_Prov/banten.jpeg",
        audio: "Data/Banten/jerehbuguru_banten.mp3",
        budaya: {
            makananKhas: { 
                name: "Sate Bandeng", 
                desc_id: "Sate Bandeng adalah makanan khas Banten berupa ikan bandeng yang dagingnya dikeluarkan, dicampur bumbu, lalu dimasukkan kembali ke kulitnya dan dibakar. Rasanya gurih dan unik karena bebas duri.", 
                desc_en: "Sate Bandeng is a culinary specialty of Banten consisting of milkfish whose meat is removed, mixed with seasonings, stuffed back into its skin, and then grilled. It tastes savory and unique as it is boneless.",
                image: "Data/Banten/makanan_banten.jpg"
            },
            tarianDaerah: { 
                name: "Tari Cokek", 
                desc_id: "Tari Cokek adalah tarian pergaulan khas Banten yang merupakan perpaduan budaya Betawi, Cina, dan Banten, dibawakan berpasangan dengan gerakan lembut dan khas.", 
                desc_en: "Tari Cokek is a signature social dance of Banten representing a fusion of Betawi, Chinese, and Bantenese cultures, performed in pairs with gentle and characteristic movements.",
                image: "Data/Banten/tari_banten.jpg"
            },
            rumahAdat: { 
                name: "Rumah Baduy", 
                desc_id: "Rumah Baduy adalah rumah panggung sederhana khas suku Baduy di pedalaman Banten, terbuat dari bambu dan kayu tanpa paku, mencerminkan kearifan lokal dan keselarasan dengan alam.", 
                desc_en: "Rumah Baduy is a simple stilt house characteristic of the Baduy tribe in Banten's hinterlands, crafted from bamboo and wood without any nails, reflecting local wisdom and harmony with nature.",
                image: "Data/Banten/rmhadat_banten.jpg"
            },
            pakaianAdat: { 
                name: "Pakaian Pengantin Banten", 
                desc_id: "Busana adat Banten memiliki pengaruh kuat budaya Islam dan Melayu, dengan baju berwarna cerah dan aksesoris lengkap yang mencerminkan kemewahan serta nilai religius masyarakat Banten.", 
                desc_en: "Traditional Banten attire possesses a strong influence of Islamic and Malay cultures, featuring brightly colored clothes and complete accessories reflecting the luxury as well as the religious values of the Bantenese community.",
                image: "Data/Banten/pakaian_banten.jpg"
            },
            senjataTradisional: { 
                name: "Golok Ciomas", 
                desc_id: "Golok Ciomas adalah golok khas Banten yang berasal dari Desa Ciomas, Kabupaten Serang. Dibuat dengan ritual khusus hanya pada bulan Maulid dan hanya oleh keturunan pandai besi aslinya, sehingga dipercaya memiliki kualitas dan kekuatan magis yang tinggi.", 
                desc_en: "Golok Ciomas is a specific Bantenese machete originating from Ciomas Village, Serang Regency. Crafted with special rituals only during the month of Maulid and exclusively by descendants of the original blacksmiths, it is believed to possess high quality and magical strength.",
                image: "Data/Banten/senjata_banten.jpg"
            },
            alatMusikTradisional: { 
                name: "Dogdog Lojor", 
                desc_id: "Dogdog Lojor adalah alat musik tabuh berbentuk silinder panjang khas Banten, digunakan dalam upacara adat Suku Baduy dan berbagai pertunjukan seni tradisional.", 
                desc_en: "Dogdog Lojor is a long cylindrical percussion instrument characteristic of Banten, used in the traditional ceremonies of the Baduy Tribe and various traditional art performances.",
                image: "Data/Banten/alatmusik_banten.jpg"
            },
            bahasaDaerah: { 
                name: "Bahasa Sunda Banten", 
                desc_id: "Bahasa Sunda Banten adalah dialek Sunda khas wilayah Banten yang sedikit berbeda dengan Sunda Jawa Barat. Contoh: \"Kumaha damang?\" = Apa kabar?", 
                desc_en: "Bahasa Sunda Banten is the Sundanese dialect unique to the Banten region, slightly differing from West Java Sundanese. Example: \"Kumaha damang?\" = How are you?",
                image: ""
            },
            laguDaerah: { 
                name: "Jereh Bu Guru", 
                desc_id: "Jereh Bu Guru adalah lagu daerah Banten yang menggambarkan keceriaan dan semangat anak-anak dalam belajar, penuh nilai pendidikan dan kebersamaan.", 
                desc_en: "Jereh Bu Guru is a folk song from Banten depicting children's joy and enthusiasm in learning, filled with educational values and togetherness.",
                image: ""
            }
        }
    },
    {
        name: "Nusa_Tenggara_Barat",
        logo: "Data/Logo_Prov/NTB.jpeg",
        audio: "Data/NTB/heleleualade_ntb.mp3",
        budaya: {
            makananKhas: { 
                name: "Ayam Taliwang", 
                desc_id: "Ayam kampung muda yang dibakar atau digoreng dengan bumbu cabai rawit, bawang, tomat, dan terasi khas Lombok, menghasilkan cita rasa super pedas.", 
                desc_en: "Young free-range chicken that is grilled or fried with cayenne pepper, shallots, tomatoes, and Lombok's signature shrimp paste, creating a super spicy flavor profile.",
                image: "Data/NTB/makanan_ntb.jpg"
            },
            tarianDaerah: { 
                name: "Tari Gandrung Lombok", 
                desc_id: "Tarian pergaulan suku Sasak yang ditarikan oleh penari wanita yang kemudian memilih penonton pria secara acak untuk menari bersama (mengibing).", 
                desc_en: "A social dance of the Sasak tribe performed by female dancers who then randomly choose male audience members to dance along together (mengibing).",
                image: "Data/NTB/tari_ntb.jpg"
            },
            rumahAdat: { 
                name: "Rumah Dalam Loka", 
                desc_id: "Istana kayu megah milik Kesultanan Sumbawa yang dibangun di atas 99 tiang tanpa menggunakan paku, mencerminkan asmaul husna.", 
                desc_en: "A grand wooden palace belonging to the Sumbawa Sultanate built atop 99 pillars without using any nails, reflecting the Asmaul Husna.",
                image: "Data/NTB/rmhadat_ntb.jpg"
            },
            pakaianAdat: { 
                name: "Pegon & Lambung", 
                desc_id: "Lambung adalah pakaian wanita suku Sasak berupa kebaya hitam tanpa kancing dengan kain sarung tenun ikat (sesek), sedangkan pria mengenakan Pegon (jas pengaruh Jawa-Eropa).", 
                desc_en: "Lambung is the clothing of Sasak women consisting of a buttonless black kebaya paired with a woven ikat sarong (sesek), while men wear Pegon (a jacket with Javanese-European influence).",
                image: "Data/NTB/pakaian_ntb.jpg"
            },
            senjataTradisional: { 
                name: "Keris Sasak / Sampari", 
                desc_id: "Sampari adalah keris tradisional suku Bima dan Sumbawa dengan sarung kayu berukir indah, sedangkan Lombok memiliki keris dengan karakteristik mirip keris Bali.", 
                desc_en: "Sampari is the traditional keris of the Bima and Sumbawa tribes featuring a beautifully carved wooden sheath, while Lombok possesses a keris with characteristics similar to Balinese keris.",
                image: "Data/NTB/senjata_ntb.jpg"
            },
            alatMusikTradisional: { 
                name: "Serunai", 
                desc_id: "Alat musik tiup bermata ganda yang menghasilkan suara melengking tinggi, sering digunakan mengiringi pacuan kuda tradisional (Jaran Pacu) di Sumbawa.", 
                desc_en: "A double-reed wind instrument producing a high-pitched sound, frequently used to accompany traditional horse racing (Jaran Pacu) in Sumbawa.",
                image: "Data/NTB/alatmusik_ntb.jpg"
            },
            bahasaDaerah: { 
                name: "Bahasa Sasak, Samawa, dan Mbojo", 
                desc_id: "Tiga bahasa utama yang mewakili tiga suku terbesar di NTB (Sasak di Lombok, Samawa di Sumbawa, Mbojo di Bima).", 
                desc_en: "Three primary languages representing the three largest tribes in West Nusa Tenggara (Sasak in Lombok, Samawa in Sumbawa, and Mbojo in Bima).",
                image: ""
            },
            laguDaerah: { 
                name: "Helele U Ala De", 
                desc_id: "Lagu daerah dari suku Mbojo (Bima) yang menceritakan keindahan alam serta rasa syukur anak-anak dalam kehidupan pedesaan.", 
                desc_en: "A folk song from the Mbojo tribe (Bima) recounting natural beauty and children's expressions of gratitude within rural life.",
                image: ""
            }
        }
    },
    {
        name: "Nusa_Tenggara_Timur",
        logo: "Data/Logo_Prov/NTT.jpeg",
        audio: "Data/NTT/anakkambingsaya_ntt.mp3",
        budaya: {
            makananKhas: { 
                name: "Se'i", 
                desc_id: "Daging (sapi atau rumahan) yang diiris tipis memanjang, dibumbui, kemudian dimasak dengan metode pengasapan menggunakan kayu dan daun kosambi yang memberikan aroma khas yang kuat.", 
                desc_en: "Meat (beef or local) sliced thinly lengthwise, seasoned, and then cooked with a smoking method using kosambi wood and leaves that impart a strong signature aroma.",
                image: "Data/NTT/makanan_ntt.jpg"
            },
            tarianDaerah: { 
                name: "Tari Caci", 
                desc_id: "Tarian perang sekaligus permainan rakyat suku Manggarai (Flores) berupa pertarungan cambuk dan perisai antara dua pemuda.", 
                desc_en: "A war dance as well as a folk game of the Manggarai tribe (Flores) in the form of a whip and shield duel between two youths.",
                image: "Data/NTT/tari_ntt.jpg"
            },
            rumahAdat: { 
                name: "Mbaru Niang", 
                desc_id: "Rumah adat berbentuk kerucut tinggi dengan 5 tingkat di Desa Wae Rebo, Flores, yang menyimbolkan keselarasan manusia dengan leluhur dan alam.", 
                desc_en: "A tall cone-shaped traditional house with 5 levels in Wae Rebo Village, Flores, symbolizing human harmony with ancestors and nature.",
                image: "Data/NTT/rmhadat_ntt.jpg"
            },
            pakaianAdat: { 
                name: "Pakaian Adat Suku Rote", 
                desc_id: "Terkenal dengan penggunaan topi Ti'i Langga yang terbuat dari daun lontar kering, berbentuk mirip topi meksiko dengan jambul khas di bagian depan.", 
                desc_en: "Famous for the use of the Ti'i Langga hat made from dried palmyra leaves, shaped similarly to a Mexican hat with a distinctive crest at the front.",
                image: "Data/NTT/pakaian_ntt.jpg"
            },
            senjataTradisional: { 
                name: "Sundu / Surik", 
                desc_id: "Sundu adalah senjata menikam sejenis keris/belati khas suku Rote dengan bentuk bilah lurus, sedangkan daerah Flores mengenal parang panjang (Kabe).", 
                desc_en: "Sundu is a stabbing weapon similar to a keris/dagger typical of the Rote tribe with a straight blade shape, while the Flores region recognizes long machetes (Kabe).",
                image: "Data/NTT/senjata_ntt.jpg"
            },
            alatMusikTradisional: { 
                name: "Sasando", 
                desc_id: "Alat musik petik legendaris yang wadah resonansinya terbuat dari daun lontar yang dirangkai melengkung, berasal dari Pulau Rote.", 
                desc_en: "A legendary plucked string instrument whose resonance bowl is crafted from palmyra leaves arranged in a curve, originating from Rote Island.",
                image: "Data/NTT/alatmusik_ntt.jpg"
            },
            bahasaDaerah: { 
                name: "Bahasa Dawan, Manggarai, dan Lamaholot", 
                desc_id: "NTT memiliki keragaman linguistik yang sangat tinggi dengan ratusan bahasa daerah (dialek Flores, Timor, dan Sumba).", 
                desc_en: "East Nusa Tenggara possesses highly elevated linguistic diversity with hundreds of regional languages (Flores, Timor, and Sumba dialects).",
                image: ""
            },
            laguDaerah: { 
                name: "Anak Kambing Saya", 
                desc_id: "Lagu daerah NTT yang sangat populer secara nasional, bernada riang dengan pola tanya-jawab yang menceritakan hubungan emosional anak dan orang tua.", 
                desc_en: "An NTT folk song that is highly popular nationally, upbeat with a question-and-answer pattern recounting the emotional relationship between child and parents.",
                image: ""
            }
        }
    },
    {
        name: "Maluku",
        logo: "Data/Logo_Prov/maluku.jpeg",
        audio: "Data/Maluku/rasasayange_maluku.mp3",
        budaya: {
            makananKhas: { 
                name: "Papeda & Kuah Kuning", 
                desc_id: "Bubur sagu kental bertekstur kenyal yang disajikan bersama sup ikan cakalang atau tongkol berbumbu kunyit, jahe, dan serai yang segar.", 
                desc_en: "A thick sago porridge with a chewy texture served alongside a fresh skipjack tuna or mackerel fish soup seasoned with turmeric, ginger, and lemongrass.",
                image: "Data/Maluku/makanan_maluku.jpg"
            },
            tarianDaerah: { 
                name: "Tari Cakalele", 
                desc_id: "Tarian perang tradisional Maluku yang dibawakan oleh pria dengan membawa parang (salawaku) dan perisai, menunjukkan ketangguhan prajurit.", 
                desc_en: "A traditional Moluccan war dance performed by men carrying a machete (salawaku) and a shield, showcasing the resilience of warriors.",
                image: "Data/Maluku/tari_maluku.jpg"
            },
            rumahAdat: { 
                name: "Rumah Baileo", 
                desc_id: "Rumah panggung terbuka berukuran besar tanpa dinding yang berfungsi sebagai balai pertemuan adat dan tempat menyimpan benda-benda keramat.", 
                desc_en: "A large open stilt house without walls functioning as a custom meeting hall and a repository for sacred items.",
                image: "Data/Maluku/rmhadat_maluku.jpg"
            },
            pakaianAdat: { 
                name: "Baju Cele", 
                desc_id: "Kain motif kotak-kotak kecil berwarna merah terang atau tembaga, dipadukan dengan kebaya putih berenda untuk wanita dan jas merah untuk pria.", 
                desc_en: "A fabric featuring small checkered patterns in bright red or copper colors, paired with a laced white kebaya for women and a red coat for men.",
                image: "Data/Maluku/pakaian_maluku.jpg"
            },
            senjataTradisional: { 
                name: "Parang Salawaku", 
                desc_id: "Sepasang senjata yang terdiri dari parang (pisau panjang) dan salawaku (perisai bermotif geometris yang melambangkan rupa manusia).", 
                desc_en: "A weapon pair consisting of a parang (long knife) and a salawaku (a shield with geometric motifs representing the human form).",
                image: "Data/Maluku/senjata_maluku.jpg"
            },
            alatMusikTradisional: { 
                name: "Tifa Totobuang", 
                desc_id: "Kombinasi antara Tifa (kendang silinder kayu) dan Totobuang (serangkaian gong kecil diletakkan di atas rak kayu).", 
                desc_en: "A combination of the Tifa (a wooden cylindrical drum) and Totobuang (a series of small gongs placed on a wooden rack).",
                image: "Data/Maluku/alatmusik_maluku.jpg"
            },
            bahasaDaerah: { 
                name: "Bahasa Ambon (Melayu Ambon)", 
                desc_id: "Berfungsi sebagai lingua franca di kepulauan Maluku, di samping ratusan bahasa tanah asli seperti bahasa Kei, Banda, dan Buru.", 
                desc_en: "Functions as a lingua franca across the Maluku islands, alongside hundreds of indigenous local languages like the Kei, Banda, and Buru languages.",
                image: ""
            },
            laguDaerah: { 
                name: "Rasa Sayange", 
                desc_id: "Lagu daerah yang menggunakan struktur pantun Melayu, menceritakan rasa kasih sayang dan perhatian lingkungan sosial masyarakat Maluku.", 
                desc_en: "A folk song employing a Malay pantun structure, recounting the feelings of affection and care within the social environment of the Moluccan community.",
                image: ""
            }
        }
    }
];