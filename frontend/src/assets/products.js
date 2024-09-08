const products = [
    {
        "name": "Supreme Court of India - 75 Years",
        "releaseDate": "31.08.2024",
        "denomination": "1000 p",
        "quantity": "2,11,000",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/2024/Supreme%20Court%20Stamp.jpg",
        "fdcImage": "https://postagestamps.gov.in/Uploads/2024/Supreme%20Court%20FDC.jpg",
        "brochure": "https://postagestamps.gov.in/2024/Supreme%20Court%20FDC.jpg"
    },
    {
        "name": "XXXIII Olympics Paris 2024",
        "releaseDate": "05.08.2024",
        "denomination": "500 p (4)",
        "quantity": "1,11,000",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/2024/Olympic%20Stamp.jpg",
        "fdcImage": "https://postagestamps.gov.in/Uploads/2024/Olympic%20FDC%2030-7-24%20Revised%20with%20stamp.jpg",
        "brochure": "https://postagestamps.gov.in/2024/Olympic%20FDC%2030-7-24%20Revised%20with%20stamp.jpg"
    },
    {
        "name": "Kargil Vijay Diwas Silver Jubilee 2024",
        "releaseDate": "26.07.2024",
        "denomination": "500 p",
        "quantity": "3,04,000",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/2024/Kargil%20stamp.jpg",
        "fdcImage": "https://postagestamps.gov.in/Uploads/2024/Kargil%20Vijay%20Diwas%20FDC-%20CDR.jpg",
        "brochure": "https://postagestamps.gov.in/2024/Kargil%20Vijay%20Diwas%20FDC-%20CDR.jpg"
    },
    {
        "name": "Wazir Mohd Hakla Poonchi",
        "releaseDate": "24.07.2024",
        "denomination": "500 p",
        "quantity": "3,02,052",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/2024/WAzir%20Stamp.jpg",
        "fdcImage": "https://postagestamps.gov.in/Uploads/2024/new%20wazir%20hakla%20cancelled%20FDC.jpg",
        "brochure": "https://postagestamps.gov.in/2024/new%20wazir%20hakla%20cancelled%20FDC.jpg"
    },
    {
        "name": "100th Birth Anniversary of Mukesh",
        "releaseDate": "24.07.2024",
        "denomination": "3000 p",
        "quantity": "1,11,000",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/2024/Mukesh%20Stamp.jpg",
        "fdcImage": "https://postagestamps.gov.in/Uploads/2024/MUKESH%20FDC%20.jpg",
        "brochure": "https://postagestamps.gov.in/2024/MUKESH%20FDC%20.jpg"
    },
    {
        "name": "Siddharoodha Swami",
        "releaseDate": "06.07.2024",
        "denomination": "500 p",
        "quantity": "3,02,650",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/2024/Stamp%20Siddharoodha%20Swami.jpg",
        "fdcImage": "https://postagestamps.gov.in/Uploads/2024/FDC%20Siddharoodha%20Swami%20cancelled.jpg",
        "brochure": "https://postagestamps.gov.in/2024/FDC%20Siddharoodha%20Swami%20cancelled.jpg"
    },
    {
        "name": "Bhagwan Mahaveer 2550th Nirvan Kalyanak",
        "releaseDate": "21.04.2024",
        "denomination": "500 p",
        "quantity": "2,01,600",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/2024/Mahaveer%20stamp.jpg",
        "fdcImage": "https://postagestamps.gov.in/Uploads/2024/Mahavir%20FDC%20cancelled.jpg",
        "brochure": "https://postagestamps.gov.in/2024/Mahavir%20FDC%20cancelled.jpg"
    },
    {
        "name": "Mahatma Hansraj",
        "releaseDate": "20.04.2024",
        "denomination": "500 p",
        "quantity": "3,01,600",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/2024/Mahatma%20Hansraj%20Stamp.jpg",
        "fdcImage": "https://postagestamps.gov.in/Uploads/2024/Mahatma%20Hansraj%20FDC.jpg",
        "brochure": "https://postagestamps.gov.in/2024/Mahatma%20Hansraj%20FDC.jpg"
    },
    {
        "name": "Centenary Year All India Railwaymen's Federation",
        "releaseDate": "27.02.2024",
        "denomination": "500 p",
        "quantity": "3,04,100",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/2024/AIRF%2013-02-24.jpg",
        "fdcImage": "https://postagestamps.gov.in/Uploads/2024/cancelled%20AIRF%20First%20Day%20cover.jpg",
        "brochure": "https://postagestamps.gov.in/2024/cancelled%20AIRF%20First%20Day%20cover.jpg"
    },
    {
        "name": "Yakshagana",
        "releaseDate": "25.02.2024",
        "denomination": "500 p",
        "quantity": "3,02,360",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/2024/4.jpg",
        "fdcImage": "https://postagestamps.gov.in/Uploads/2024/Yakshagana%20First%20Day%20cover%2013-02-24.jpg",
        "brochure": "https://postagestamps.gov.in/2024/Yakshagana%20First%20Day%20cover%2013-02-24.jpg"
    },
    {
        "name": "Sarangadhar Das",
        "releaseDate": "23.02.2024",
        "denomination": "500 p",
        "quantity": "2,01,600",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/2024/Stamp%20Sarangdhar.jpg",
        "fdcImage": "https://postagestamps.gov.in/Uploads/2024/FDC%20Sarangdhar.jpg",
        "brochure": "https://postagestamps.gov.in/2024/FDC%20Sarangdhar.jpg"
    },
    {
        "name": "Legendary Poets of Odisha",
        "releaseDate": "20.02.2024",
        "denomination": "2000 p",
        "quantity": "1,11,000",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/2024/MS.jpg",
        "fdcImage": "https://postagestamps.gov.in/Uploads/2024/Legendary%20Poets%20of%20Odisha%20FDC.jpg",
        "brochure": "https://postagestamps.gov.in/2024/Legendary%20Poets%20of%20Odisha%20FDC.jpg"
    },
    {
        "name": "Cultural Heritage of Western Odisha",
        "releaseDate": "20.02.2024",
        "denomination": "500 p (6)",
        "quantity": "1,11,000",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/2024/SAMBALPUR%20stamp.jpg",
        "fdcImage": "https://postagestamps.gov.in/Uploads/2024/SAMBALPUR%20FDC%20cancelled2.jpg",
        "brochure": "https://postagestamps.gov.in/2024/SAMBALPUR%20FDC%20cancelled2.jpg"
    },
    {
        "name": "125th Birth Anniversary Ram Chandra",
        "releaseDate": "14.02.2024",
        "denomination": "1000 p",
        "quantity": "2,01,600",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/2024/Ram%20Chander%20HD_page-0001%20(1).jpg",
        "fdcImage": "https://postagestamps.gov.in/Uploads/2024/FDC%20Ram%20Chander%20HD_page-0001%20(2).jpg",
        "brochure": "https://postagestamps.gov.in/2024/FDC%20Ram%20Chander%20HD_page-0001%20(2).jpg"
    },
    {
        "name": "150th Birth Anniversary of Srila Bhaktisiddhanta Saraswati Prabhupad",
        "releaseDate": "08.02.2024",
        "denomination": "500 p",
        "quantity": "2,01,600",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/2024/Bhaktisidhanta%20Saraswati%20stamp%20final2(1).jpg",
        "fdcImage": "https://postagestamps.gov.in/Uploads/2024/FDC%20Bhaktisiddhanta%20cancelled%20big.jpg",
        "brochure": "https://postagestamps.gov.in/2024/FDC%20Bhaktisiddhanta%20cancelled%20big.jpg"
    },
    {
        "name": "The Bombay Sappers War Memorial",
        "releaseDate": "31.01.2024",
        "denomination": "500 p",
        "quantity": "3,02,350",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/2024/Bombay%20Sappers.jpg",
        "fdcImage": "https://postagestamps.gov.in/Uploads/2024/FDC%20Bombay%20Sappers.jpg",
        "brochure": "https://postagestamps.gov.in/2024/FDC%20Bombay%20Sappers.jpg"
    },
    {
        "name": "Bharat - The Mother of Democracy",
        "releaseDate": "25.01.2024",
        "denomination": "500 p (3)",
        "quantity": "1,43,334",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/2024/MS%20for%20video%20BTMOD.jpg",
        "fdcImage": "https://postagestamps.gov.in/Uploads/2024/FDC%20Mother%20of%20Democracy.jpg",
        "brochure": "https://postagestamps.gov.in/2024/FDC%20Mother%20of%20Democracy.jpg"
    },
    {
        "name": "Inclusive Elections - Election Commission of India",
        "releaseDate": "25.01.2024",
        "denomination": "500 p",
        "quantity": "3,01,680",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/2024/ECI.jpg",
        "fdcImage": "https://postagestamps.gov.in/Uploads/2024/FDC%20ECI.jpg",
        "brochure": "https://postagestamps.gov.in/2024/FDC%20ECI.jpg"
    },
    {
        "name": "100th Birth Anniversary of Karpoori Thakur",
        "releaseDate": "24.01.2024",
        "denomination": "500 p",
        "quantity": "2,01,600",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/2024/KARPOORI%20THAKUR%20STAMP.jpg",
        "fdcImage": "https://postagestamps.gov.in/Uploads/2024/KARPOORI%20THAKUR%20STAMP%20FDC.jpg",
        "brochure": "https://postagestamps.gov.in/2024/KARPOORI%20THAKUR%20STAMP%20FDC.jpg"
    },
    {
        "name": "Shri Ram Janmbhoomi Temple",
        "releaseDate": "18.01.2024",
        "denomination": "500 p(6)",
        "quantity": "10,00,000",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/2024/Shri%20Ram%20Janmbhoomi%20Temple.jpg",
        "fdcImage": "https://postagestamps.gov.in/Uploads/2024/Shri%20Ram%20Janmbhoomi%20Temple_FDC.jpg",
        "brochure": "https://postagestamps.gov.in/2024/Shri%20Ram%20Janmbhoomi%20Temple_FDC.jpg"
    },
    {
        "name": "200 Years of Indian Origin Tamils in Sri Lanka",
        "releaseDate": "30.12.2023",
        "denomination": "500p",
        "quantity": "301850",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/2023/200%20Years%20of%20Indian%20Origin%20Tamils%20in%20Sri%20Lanka_Stamp.jpg",
        "fdcImage": "https://postagestamps.gov.in/Uploads/2023/200%20Years%20of%20Indian%20Origin%20Tamils%20in%20Sri%20Lanka_FDC.jpg",
        "brochure": "https://postagestamps.gov.in/2023/200%20Years%20of%20Indian%20Origin%20Tamils%20in%20Sri%20Lanka_FDC.jpg"
    },
    {
        "name": "Diamond Jubilee of Sashastra Seema Bal",
        "releaseDate": "29.12.2023",
        "denomination": "500p",
        "quantity": "307100",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/2023/Diamond%20Jubilee%20of%20Sashastra%20Seema%20Bal_Stamp.jpg",
        "fdcImage": "https://postagestamps.gov.in/Uploads/2023/Diamond%20Jubilee%20of%20Sashastra%20Seema%20Bal_FDC.jpg",
        "brochure": "https://postagestamps.gov.in/2023/Diamond%20Jubilee%20of%20Sashastra%20Seema%20Bal_FDC.jpg"
    },
    {
        "name": "125 Years of Ramakrishna Mission",
        "releaseDate": "27.12.2023",
        "denomination": "500p",
        "quantity": "201600",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/2023/125%20Years%20of%20Ramakrishna%20Mission_Stamp.jpg",
        "fdcImage": "https://postagestamps.gov.in/Uploads/2023/125%20Years%20of%20Ramakrishna%20Mission_FDC.jpg",
        "brochure": "https://postagestamps.gov.in/2023/125%20Years%20of%20Ramakrishna%20Mission_FDC.jpg"
    },
    {
        "name": "50 Years Pandit Jasraj Pt. Motiram Pt. Maniram Sangeet Samaroha",
        "releaseDate": "27.12.2023",
        "denomination": "500p",
        "quantity": "207300",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/2023/50%20Years%20Pandit%20Jasraj%20Pt.%20Motiram%20Pt.%20Maniram%20Sangeet%20Samaroha_Stamp.jpg",
        "fdcImage": "https://postagestamps.gov.in/Uploads/2023/50%20Years%20Pandit%20Jasraj%20Pt.%20Motiram%20Pt.%20Maniram%20Sangeet%20Samaroha_FDC.jpg",
        "brochure": "https://postagestamps.gov.in/2023/50%20Years%20Pandit%20Jasraj%20Pt.%20Motiram%20Pt.%20Maniram%20Sangeet%20Samaroha_FDC.jpg"
    },
    {
        "name": "Khartargachha Millennium",
        "releaseDate": "26.12.2023",
        "denomination": "500p",
        "quantity": "303900",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/2023/Khartargachha%20Millennium_Stamp.jpg",
        "fdcImage": "https://postagestamps.gov.in/Uploads/2023/Khartargachha%20Millennium_FDC.jpg",
        "brochure": "https://postagestamps.gov.in/2023/Khartargachha%20Millennium_FDC.jpg"
    },
    {
        "name": "Acharya Sushil Kumar",
        "releaseDate": "24.12.2023",
        "denomination": "500p",
        "quantity": "421220",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/2023/Acharya%20Sushil%20Kumar_Stamp.jpg",
        "fdcImage": "https://postagestamps.gov.in/Uploads/2023/Acharya%20Sushil%20Kumar_FDC.jpg",
        "brochure": "https://postagestamps.gov.in/2023/Acharya%20Sushil%20Kumar_FDC.jpg"
    },
    {
        "name": "Rani Abbakka Devi",
        "releaseDate": "15.12.2023",
        "denomination": "500p",
        "quantity": "303200",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/2023/Rani%20Abbakka%20Devi_Stamp.jpg",
        "fdcImage": "https://postagestamps.gov.in/Uploads/2023/Rani%20Abbakka%20Devi_FDC.jpg",
        "brochure": "https://postagestamps.gov.in/2023/Rani%20Abbakka%20Devi_FDC.jpg"
    },
    {
        "name": "Celebrating India and Oman's Friendship",
        "releaseDate": "15.12.2023",
        "denomination": "2500p (2) Rs. 50 for Souvenir Sheet",
        "quantity": "111500",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/2023/Celebrating%20India%20and%20Oman%20Friendship_Stamp.jpg",
        "fdcImage": "https://postagestamps.gov.in/Uploads/2023/Celebrating%20India%20and%20Oman%20Friendship_FDC.jpg",
        "brochure": "https://postagestamps.gov.in/2023/Celebrating%20India%20and%20Oman%20Friendship_FDC.jpg"
    },
    {
        "name": "India Art Architecture Design Biennale 2023",
        "releaseDate": "08.12.2023",
        "denomination": "500p",
        "quantity": "301600",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/2023/India%20Art%20Architecture%20Design%20Biennale%202023_Stamp.jpg",
        "fdcImage": "https://postagestamps.gov.in/Uploads/2023/India%20Art%20Architecture%20Design%20Biennale%202023_FDC.jpg",
        "brochure": "https://postagestamps.gov.in/2023/India%20Art%20Architecture%20Design%20Biennale%202023_FDC.jpg"
    },
    {
        "name": "125 Years of Hindu College",
        "releaseDate": "05.12.2023",
        "denomination": "500 p",
        "quantity": "302200",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/2023/125%20Years%20of%20Hindu%20College_Stamp.jpg",
        "fdcImage": "https://postagestamps.gov.in/Uploads/2023/125%20Years%20of%20Hindu%20College_canceled_FDC.jpg",
        "brochure": "https://postagestamps.gov.in/2023/125%20Years%20of%20Hindu%20College_canceled_FDC.jpg"
    },
    {
        "name": "75 Glorious Years of National Defence Academy",
        "releaseDate": "30.11.2023",
        "denomination": "500 p",
        "quantity": "302100",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/2023/75%20Glorious%20Years%20of%20National%20Defence%20Academy_STAMP.jpg",
        "fdcImage": "https://postagestamps.gov.in/Uploads/2023/75%20Glorious%20Years%20of%20National%20Defence%20Academy_Canceled_FDC.jpg",
        "brochure": "https://postagestamps.gov.in/2023/75%20Glorious%20Years%20of%20National%20Defence%20Academy_Canceled_FDC.jpg"
    },
    {
        "name": "525th Birth Anniversary of Meera Bai",
        "releaseDate": "23.11.2023",
        "denomination": "500 p",
        "quantity": "201600",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/2023/Meera_Bai_Stamp.jpg",
        "fdcImage": "https://postagestamps.gov.in/Uploads/2023/Meera_Bai_FDC.jpg",
        "brochure": "https://postagestamps.gov.in/2023/Meera_Bai_FDC.jpg"
    },
    {
        "name": "Platinum Jubilee (1948-2023) Raman Research Institute",
        "releaseDate": "07.11.2023",
        "denomination": "500 p",
        "quantity": "316600",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/2023/Raman%20Research%20Institute_STAMP.jpg",
        "fdcImage": "https://postagestamps.gov.in/Uploads/2023/Raman%20Research%20Institute_FDC.jpg",
        "brochure": "https://postagestamps.gov.in/2023/Raman%20Research%20Institute_FDC.jpg"
    },
    {
        "name": "75th Anniversary of Diplomatic Relations between India and Mauritius",
        "releaseDate": "02.11.2023",
        "denomination": "2500 p",
        "quantity": "111000",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/2023/Diplomatic%20Relations%20between%20India%20and%20Mauritius_STAMP.jpg",
        "fdcImage": "https://postagestamps.gov.in/Uploads/2023/Diplomatic%20Relations%20between%20India%20and%20Mauritius_FDC.jpg",
        "brochure": "https://postagestamps.gov.in/2023/Diplomatic%20Relations%20between%20India%20and%20Mauritius_FDC.jpg"
    },
    {
        "name": "Arvind N. Mafatlal",
        "releaseDate": "27.10.2023",
        "denomination": "2000 p",
        "quantity": "301600",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/2023/Arvind%20N.%20Mafatlal_STAMP.jpg",
        "fdcImage": "https://postagestamps.gov.in/Uploads/2023/Arvind%20N.%20Mafatlal_FDC.jpg",
        "brochure": "https://postagestamps.gov.in/2023/Arvind%20N.%20Mafatlal_FDC.jpg"
    },
    {
        "name": "125th anniversary of the Scindia School",
        "releaseDate": "21.10.2023",
        "denomination": "500 p (1)Rs. 20 for Souvenir Sheet",
        "quantity": "215300",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/2023/125th%20anniversary%20of%20the%20Scindia%20School_STAMP.jpg",
        "fdcImage": "https://postagestamps.gov.in/Uploads/2023/125th%20anniversary%20of%20the%20Scindia%20School_FDC.jpg",
        "brochure": "https://postagestamps.gov.in/2023/125th%20anniversary%20of%20the%20Scindia%20School_FDC.jpg"
    },
    {
        "name": "50 years of establishment of Diplomatic Relations between India and Vietnam",
        "releaseDate": "16.10.2023",
        "denomination": "2500p & 500p",
        "quantity": "112000",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/2023/50%20years%20of%20establishment%20of%20Diplomatic%20Relations%20between%20India%20and%20Vietnam%20STAMP.jpg",
        "fdcImage": "https://postagestamps.gov.in/Uploads/2023/50%20years%20of%20establishment%20of%20Diplomatic%20Relations%20between%20India%20and%20Vietnam%20FDC.jpg",
        "brochure": "https://postagestamps.gov.in/2023/50%20years%20of%20establishment%20of%20Diplomatic%20Relations%20between%20India%20and%20Vietnam%20FDC.jpg"
    },
    {
        "name": "Hemachandra Vikramaditya",
        "releaseDate": "07.10.2023",
        "denomination": "500p",
        "quantity": "201600",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/2023/Hemachandra_Vikramaditya_STAMP.jpg",
        "fdcImage": "https://postagestamps.gov.in/Uploads/2023/Hemachandra_Vikramaditya_FDC.jpg",
        "brochure": "https://postagestamps.gov.in/2023/Hemachandra_Vikramaditya_FDC.jpg"
    },
    {
        "name": "500th Birth Anniversary of Rani Durgavati",
        "releaseDate": "05.10.2023",
        "denomination": "500p",
        "quantity": "201600",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/2023/500th_Birthday_Rani_Durgavati_STAMP.jpg",
        "fdcImage": "https://postagestamps.gov.in/Uploads/2023/500th_Birthday_Rani_Durgavati_FDC.jpg",
        "brochure": "https://postagestamps.gov.in/2023/500th_Birthday_Rani_Durgavati_FDC.jpg"
    },
    {
        "name": "Dada J P Vaswani",
        "releaseDate": "12.09.2023",
        "denomination": "500p",
        "quantity": "377100",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/2023/Dada_JP_Vaswani_STAMP.jpg",
        "fdcImage": "https://postagestamps.gov.in/Uploads/2023/Dada_JP_Vaswani_FDC.jpg",
        "brochure": "https://postagestamps.gov.in/2023/Dada_JP_Vaswani_FDC.jpg"
    },
    {
        "name": "High Court of Orissa",
        "releaseDate": "26.07.2023",
        "denomination": "500p",
        "quantity": "301800",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/2023/High_Court_Orissa_2023_STAMP.jpg",
        "fdcImage": "https://postagestamps.gov.in/Uploads/2023/High_Court_Orissa_2023_FDC.jpg",
        "brochure": "https://postagestamps.gov.in/2023/High_Court_Orissa_2023_FDC.jpg"
    },
    {
        "name": "G20 Leaders' Summit, New Delhi 2023",
        "releaseDate": "26.07.2023",
        "denomination": "2000p (2) Rs. 40 for Souvenir Sheet",
        "quantity": "211000",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/2023/G20_STAMP.jpg",
        "fdcImage": "https://postagestamps.gov.in/Uploads/2023/G20_FDC.jpg",
        "brochure": "https://postagestamps.gov.in/2023/G20_FDC.jpg"
    },
    {
        "name": "Sardar Antaji Mankeshwar Gandhe",
        "releaseDate": "04.07.2023",
        "denomination": "500p",
        "quantity": "301900",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/2023/Gandhe_STAMP.jpg",
        "fdcImage": "https://postagestamps.gov.in/Uploads/2023/Gandhe_FDC.jpg",
        "brochure": "https://postagestamps.gov.in/2023/Gandhe_FDC.jpg"
    },
    {
        "name": "Raj Bhavan, Uttar Pradesh",
        "releaseDate": "20.06.2023",
        "denomination": "500p",
        "quantity": "301800",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/2023/UP-RajBhwaan_Stamp.jpg",
        "fdcImage": "https://postagestamps.gov.in/Uploads/2023/UP-RajBhwaan_FDC.jpg",
        "brochure": "https://postagestamps.gov.in/2023/UP-RajBhwaan_FDC.jpg"
    },
    {
        "name": "SCO Council of Heads of State",
        "releaseDate": "15.06.2023",
        "denomination": "500p",
        "quantity": "203100",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/2023/SCO_Stamp.jpg",
        "fdcImage": "https://postagestamps.gov.in/Uploads/2023/SCO_FDC.jpg",
        "brochure": "https://postagestamps.gov.in/2023/SCO_FDC.jpg"
    },
    {
        "name": "Parliament Complex",
        "releaseDate": "28.05.2023",
        "denomination": "7500p",
        "quantity": "209600",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/2023/Parliament_Complex_Stamp.jpg",
        "fdcImage": "https://postagestamps.gov.in/Uploads/2023/Parliament_Complex_FDC.jpg",
        "brochure": "https://postagestamps.gov.in/2023/Parliament_Complex_FDC.jpg"
    },
    {
        "name": "250th Birth Anniversary of Raja Ram Mohan Roy",
        "releaseDate": "22.05.2023",
        "denomination": "500p",
        "quantity": "201600",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/2023/Raja_Ram_Mohan_Roy_Stamp.jpg",
        "fdcImage": "https://postagestamps.gov.in/Uploads/2023/Raja_Ram_Mohan_Roy_FDC.jpg",
        "brochure": "https://postagestamps.gov.in/2023/Raja_Ram_Mohan_Roy_FDC.jpg"
    },
    {
        "name": "Mann Ki Baat",
        "releaseDate": "26.04.2023",
        "denomination": "500p",
        "quantity": "302400",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/2023/Mann_Ki_Baat_stamp.jpg",
        "fdcImage": "https://postagestamps.gov.in/Uploads/2023/Mann_Ki_Baat_fdc_final_18_04.jpg",
        "brochure": "https://postagestamps.gov.in/2023/Mann_Ki_Baat_fdc_final_18_04.jpg"
    },
    {
        "name": "75th Year of Indian Army Day",
        "releaseDate": "19.04.2023",
        "denomination": "500p",
        "quantity": "302005",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/2023/75th_Year_of_Indian_Army_Day_Stamp.jpg",
        "fdcImage": "https://postagestamps.gov.in/Uploads/2023/75th_Year_of_Indian_Army_Day_Stamp_Cancelled_FDC.jpg",
        "brochure": "https://postagestamps.gov.in/2023/75th_Year_of_Indian_Army_Day_Stamp_Cancelled_FDC.jpg"
    },
    {
        "name": "Dayanand Saraswati",
        "releaseDate": "07.04.2023",
        "denomination": "500p",
        "quantity": "201600",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/2023/Dayanand%20Saraswati%20STAMP.jpg",
        "fdcImage": "https://postagestamps.gov.in/Uploads/2023/Dayanand%20Saraswati%20FDC.jpg",
        "brochure": "https://postagestamps.gov.in/2023/Dayanand%20Saraswati%20FDC.jpg"
    },
    {
        "name": "GauhatiHigh Court",
        "releaseDate": "05.04.2023",
        "denomination": "500p",
        "quantity": "303600",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/2023/Gauhati_High_Court_STAMP.jpg",
        "fdcImage": "https://postagestamps.gov.in/Uploads/2023/Gauhati_High_Court_FDC.jpeg",
        "brochure": "https://postagestamps.gov.in/2023/Gauhati_High_Court_FDC.jpeg"
    },
    {
        "name": "Diamond Jubilee of CBI",
        "releaseDate": "03.04.2023",
        "denomination": "500 p",
        "quantity": "301700",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/2023/Diamond%20Jubilee%20of%20CBI%20STAMP.jpg",
        "fdcImage": "https://postagestamps.gov.in/Uploads/2023/Diamond%20Jubilee%20of%20CBI%20FDC.jpg",
        "brochure": "https://postagestamps.gov.in/2023/Diamond%20Jubilee%20of%20CBI%20FDC.jpg"
    },
    {
        "name": "Legends of Odisha",
        "releaseDate": "30.03.2023",
        "denomination": "5000p",
        "quantity": "110000",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/2023/Legends_of_Odisha_STAMP.jpg",
        "fdcImage": "https://postagestamps.gov.in/Uploads/2023/Legends_of_Odisha_FDC.jpg",
        "brochure": "https://postagestamps.gov.in/2023/Legends_of_Odisha_FDC.jpg"
    },
    {
        "name": "Parshuram",
        "releaseDate": "19.03.2023",
        "denomination": "500 p",
        "quantity": "201600",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/2023/Parshuram_Stamp.jpg",
        "fdcImage": "https://postagestamps.gov.in/Uploads/2023/Parshuram_FDC_Cancelled.jpg",
        "brochure": "https://postagestamps.gov.in/2023/Parshuram_FDC_Cancelled.jpg"
    },
    {
        "name": "International Year of Millets (Shree Anna)",
        "releaseDate": "18.03.2023",
        "denomination": "500p",
        "quantity": "303700",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/2023/International_Year_of_Millets_STAMP.jpg",
        "fdcImage": "https://postagestamps.gov.in/Uploads/2023/International_Year_of_Millets_FDC.jpg",
        "brochure": "https://postagestamps.gov.in/2023/International_Year_of_Millets_FDC.jpg"
    },
    {
        "name": "75 Years of India - Luxembourg Friendship",
        "releaseDate": "14.03.2023",
        "denomination": "2500 p, 2500p",
        "quantity": "116000",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/2023/75_Years_of_India_Luxembourg_Friendship_Souvenir_Sheet.png",
        "fdcImage": "https://postagestamps.gov.in/Uploads/2023/75_Years_of_India_Luxembourg_Friendship_FDC.png",
        "brochure": "https://postagestamps.gov.in/2023/75_Years_of_India_Luxembourg_Friendship_FDC.png"
    },
    {
        "name": "75 Years of 1 Central Base Post Office",
        "releaseDate": "01.03.2023",
        "denomination": "500p",
        "quantity": "202000",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/2023/1CBPO-Stamp.jpg",
        "fdcImage": "https://postagestamps.gov.in/Uploads/2023/1CBPO-FDC.jpg",
        "brochure": "https://postagestamps.gov.in/2023/1CBPO-FDC.jpg"
    },
    {
        "name": "225 Glorious Years 2nd Battalion The Parachute Regiment (Special Forces)",
        "releaseDate": "24.02.2023",
        "denomination": "500p",
        "quantity": "301850",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/2023/225_Glorious_%20Years_STAMP.jpg",
        "fdcImage": "https://postagestamps.gov.in/Uploads/2023/225_Glorious_%20Years_FDC.jpg",
        "brochure": "https://postagestamps.gov.in/2023/225_Glorious_%20Years_FDC.jpg"
    },
    {
        "name": "Rao Birender Singh",
        "releaseDate": "20.02.2023",
        "denomination": "500p",
        "quantity": "301805",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/2023/RAO_BIRENDER_SINGH_STAMP.jpg",
        "fdcImage": "https://postagestamps.gov.in/Uploads/2023/RAO_BIRENDER_SINGH_FDC.jpg",
        "brochure": "https://postagestamps.gov.in/2023/RAO_BIRENDER_SINGH_FDC.jpg"
    },
    {
        "name": "Geographical Indications: Agricultural Goods",
        "releaseDate": "13.02.2023",
        "denomination": "500p(12)",
        "quantity": "111000",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/2023/Geographical_Indications_Agricultural_Goods_STAMP.jpg",
        "fdcImage": "https://postagestamps.gov.in/Uploads/2023/Geographical_Indications_Agricultural_Goods_FDC.jpg",
        "brochure": "https://postagestamps.gov.in/2023/Geographical_Indications_Agricultural_Goods_FDC.jpg"
    },
    {
        "name": "Bridal Costumes of India",
        "releaseDate": "12.02.2023",
        "denomination": "2500p(8)",
        "quantity": "111000",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/2023/Bridal_Costume_STAMP1.jpg",
        "fdcImage": "https://postagestamps.gov.in/Uploads/2023/Bridal_Costume_FDC.jpg",
        "brochure": "https://postagestamps.gov.in/2023/Bridal_Costume_FDC.jpg"
    },
    {
        "name": "Azadi Ka Amrit Mahotsav",
        "releaseDate": "11.02.2023",
        "denomination": "500p (2)",
        "quantity": "201600",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/2023/Amrit%20Mahotsav%20Stamp.jpg",
        "fdcImage": "https://postagestamps.gov.in/Uploads/2023/Amrit%20Mahotsav%20FDC.jpg",
        "brochure": "https://postagestamps.gov.in/2023/Amrit%20Mahotsav%20FDC.jpg"
    },
    {
        "name": "General K. S. Thimayya",
        "releaseDate": "04.02.2023",
        "denomination": "500p",
        "quantity": "302005",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/2023/General_K_S_Thimayya_STAMP.jpg",
        "fdcImage": "https://postagestamps.gov.in/Uploads/2023/General_K_S_Thimayya_FDC.jpg",
        "brochure": "https://postagestamps.gov.in/2023/General_K_S_Thimayya_FDC.jpg"
    },
    {
        "name": "150th Birth Anniversary of Ram Chandra Maharaj",
        "releaseDate": "02.02.2022",
        "denomination": "1500p",
        "quantity": "327600",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/2023/Ramchandra_Maharaja_STAMP.jpg",
        "fdcImage": "https://postagestamps.gov.in/Uploads/2023/Ramchandra_Maharaja_FDC.jpeg",
        "brochure": "https://postagestamps.gov.in/2023/Ramchandra_Maharaja_FDC.jpeg"
    },
    {
        "name": "75th  Year of Establishment of Diplomatic Relation between India - Egypt",
        "releaseDate": "25.01.2023",
        "denomination": "500 p (2)Rs. 30 for Souvenir Sheet",
        "quantity": "1.11 lakh",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/2023/75th_%20Diplomatic_India_Egypt_Stamp.jpg",
        "fdcImage": "https://postagestamps.gov.in/Uploads/2023/75th_%20Diplomatic_India_Egypt_Canceled%20FDC_Egypt.jpg",
        "brochure": "https://postagestamps.gov.in/2023/75th_%20Diplomatic_India_Egypt_Canceled%20FDC_Egypt.jpg"
    },
    {
        "name": "Major Durga Mall",
        "releaseDate": "23.01.2023",
        "denomination": "500p",
        "quantity": "302850",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/2023/Major_Durga_Mall_STAMP.jpg",
        "fdcImage": "https://postagestamps.gov.in/Uploads/2023/Major_Durga_Mall_FDC.jpg",
        "brochure": "https://postagestamps.gov.in/2023/Major_Durga_Mall_FDC.jpg"
    },
    {
        "name": "Surakshit Jayen Prashishit Jayen",
        "releaseDate": "09.01.2023",
        "denomination": "500p",
        "quantity": "266600",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/2023/Surakshit_Jayen_Prashishit_Jayen_STAMP.jpg",
        "fdcImage": "https://postagestamps.gov.in/Uploads/2023/Surakshit_Jayen_Prashishit_Jayen_FDC.jpg",
        "brochure": "https://postagestamps.gov.in/2023/Surakshit_Jayen_Prashishit_Jayen_FDC.jpg"
    },
    {
        "name": "Visamanbapu",
        "releaseDate": "31.12.2022",
        "denomination": "500p",
        "quantity": "201600",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/Visamanbapu_STAMP.jpeg",
        "fdcImage": "https://postagestamps.gov.in/Uploads/Visamanbapu_FDC.jpg",
        "brochure": "https://postagestamps.gov.in/Visamanbapu_FDC.jpg"
    },
    {
        "name": "125 Years Sardar School Jodhpur",
        "releaseDate": "13.12.2022",
        "denomination": "500p",
        "quantity": "303600",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/125_Years_Sardar_School_%20Jodhpur_STAMP.jpg",
        "fdcImage": "https://postagestamps.gov.in/Uploads/125_Years_Sardar_School_%20Jodhpur_FDC.jpg",
        "brochure": "https://postagestamps.gov.in/125_Years_Sardar_School_%20Jodhpur_FDC.jpg"
    },
    {
        "name": "150th Birth Anniversary of Sri Aurobindo",
        "releaseDate": "13.12.2022",
        "denomination": "15000p",
        "quantity": "304000",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/Aurobindo_2022_STAMP.jpg",
        "fdcImage": "https://postagestamps.gov.in/Uploads/Aurobindo_2022_FDC.jpg",
        "brochure": "https://postagestamps.gov.in/Aurobindo_2022_FDC.jpg"
    },
    {
        "name": "Pa Togan Nengminza Sangma",
        "releaseDate": "12.12.2022",
        "denomination": "500p",
        "quantity": "304000",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/Pa_Togan_Nengminza_Sangma_STAMP.jpg",
        "fdcImage": "https://postagestamps.gov.in/Uploads/Pa_Togan_Nengminza_Sangma_FDC.jpg",
        "brochure": "https://postagestamps.gov.in/Pa_Togan_Nengminza_Sangma_FDC.jpg"
    },
    {
        "name": "175 Years of IIT Roorkee",
        "releaseDate": "25.11.2022",
        "denomination": "500p",
        "quantity": "303200",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/IIT_ROORKEE_STAMP.jpg",
        "fdcImage": "https://postagestamps.gov.in/Uploads/IIT_ROORKEE_FDC.jpg",
        "brochure": "https://postagestamps.gov.in/IIT_ROORKEE_FDC.jpg"
    },
    {
        "name": "Platinum Jubilee Assam Medical College",
        "releaseDate": "03.11.2022",
        "denomination": "500p",
        "quantity": "211600",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/Assam_Medical_College_2022_STAMP.jpg",
        "fdcImage": "https://postagestamps.gov.in/Uploads/Assam_Medical_College_2022_FDC.jpeg",
        "brochure": "https://postagestamps.gov.in/Assam_Medical_College_2022_FDC.jpeg"
    },
    {
        "name": "150th Birth Anniversary of Vijay Vallabh Surishwer",
        "releaseDate": "26.10.2022",
        "denomination": "500p",
        "quantity": "451600",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/Vijay_Vallabh_Suri_STAMP.jpg",
        "fdcImage": "https://postagestamps.gov.in/Uploads/Vijay_Vallabh_Suri_FDC.jpeg",
        "brochure": "https://postagestamps.gov.in/Vijay_Vallabh_Suri_FDC.jpeg"
    },
    {
        "name": "90th General Assembly of INTERPOL",
        "releaseDate": "18.10.2022",
        "denomination": "500p",
        "quantity": "305100",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/INTERPOL_STAMP.jpg",
        "fdcImage": "https://postagestamps.gov.in/Uploads/INTERPOL_FDC.jpg",
        "brochure": "https://postagestamps.gov.in/INTERPOL_FDC.jpg"
    },
    {
        "name": "Golden Jubilee of Pincode",
        "releaseDate": "12.10.2022",
        "denomination": "500p",
        "quantity": "201600",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/STAMP_GOLDEN_JUB_PINCODE.jpg",
        "fdcImage": "https://postagestamps.gov.in/Uploads/FDC_GOLDEN_JUB_PINCODE.jpg",
        "brochure": "https://postagestamps.gov.in/FDC_GOLDEN_JUB_PINCODE.jpg"
    },
    {
        "name": "Sawai Gandharva",
        "releaseDate": "11.10.2022",
        "denomination": "500p",
        "quantity": "212350",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/STAMP_Sawai_Gandharwa.jpeg",
        "fdcImage": "https://postagestamps.gov.in/Uploads/FDC_Sawai_Gandharwa.jpg",
        "brochure": "https://postagestamps.gov.in/FDC_Sawai_Gandharwa.jpg"
    },
    {
        "name": "2nd International Tiger Forum",
        "releaseDate": "01.09.2022",
        "denomination": "500p",
        "quantity": "301875",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/TigerStamp2022.jpg",
        "fdcImage": "https://postagestamps.gov.in/Uploads/TigerFDC2022.jpg",
        "brochure": "https://postagestamps.gov.in/TigerFDC2022.jpg"
    },
    {
        "name": "Ondiveeran",
        "releaseDate": "20.08.2022",
        "denomination": "500p",
        "quantity": "203700",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/Ondiveeran_STAMP.jpeg",
        "fdcImage": "https://postagestamps.gov.in/Uploads/Ondiveeran_FDC.jpg",
        "brochure": "https://postagestamps.gov.in/Ondiveeran_FDC.jpg"
    },
    {
        "name": "Journey of the National Flag",
        "releaseDate": "02.08.2022",
        "denomination": "7500p",
        "quantity": "200000",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/JNF_STAMP.jpg",
        "fdcImage": "https://postagestamps.gov.in/Uploads/JNF_FDC.jpg",
        "brochure": "https://postagestamps.gov.in/JNF_FDC.jpg"
    },
    {
        "name": "Right to free Legal Aid",
        "releaseDate": "30.07.2022",
        "denomination": "500p",
        "quantity": "201600",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/RFLA_STAMP.jpg",
        "fdcImage": "https://postagestamps.gov.in/Uploads/RFLA_FDC.jpg",
        "brochure": "https://postagestamps.gov.in/RFLA_FDC.jpg"
    },
    {
        "name": "44th FIDE Chess Olympiad Chennai 2022",
        "releaseDate": "20.07.2022",
        "denomination": "500p",
        "quantity": "302600",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/CHESS_STAMP.jpg",
        "fdcImage": "https://postagestamps.gov.in/Uploads/CHESS_FDC.jpg",
        "brochure": "https://postagestamps.gov.in/CHESS_FDC.jpg"
    },
    {
        "name": "KARPATRI MAHARAJ",
        "releaseDate": "29.06.2022",
        "denomination": "500p",
        "quantity": "201600",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/KM_STAMP.jpg",
        "fdcImage": "https://postagestamps.gov.in/Uploads/KM_FDC.jpg",
        "brochure": "https://postagestamps.gov.in/KM_FDC.jpg"
    },
    {
        "name": "MUMBAI SAMACHAR",
        "releaseDate": "14.06.2022",
        "denomination": "500p",
        "quantity": "301600",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/MS%20Stamp.jpg",
        "fdcImage": "https://postagestamps.gov.in/Uploads/MS%20FDC.jpg",
        "brochure": "https://postagestamps.gov.in/MS%20FDC.jpg"
    },
    {
        "name": "UNIVERSITY OF DELHI CENTENARY YEAR",
        "releaseDate": "01.05.2022",
        "denomination": "1000p",
        "quantity": "674000",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/UOD%20Stamp.jpg",
        "fdcImage": "https://postagestamps.gov.in/Uploads/UOD%20FDC.jpg",
        "brochure": "https://postagestamps.gov.in/UOD%20FDC.jpg"
    },
    {
        "name": "Prakash GuruParab Sri Guru Tegh Bahadur Sahib Ji",
        "releaseDate": "21.04.2022",
        "denomination": "2500p",
        "quantity": "504000",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/GTBS%20Stamp.jpg",
        "fdcImage": "https://postagestamps.gov.in/Uploads/GTBS%20FDC.jpg",
        "brochure": "https://postagestamps.gov.in/GTBS%20FDC.jpg"
    },
    {
        "name": "PANDURANG  VAMAN KANE",
        "releaseDate": "18.04.2022",
        "denomination": "500p",
        "quantity": "302200",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/PVK%20Stamp.jpg",
        "fdcImage": "https://postagestamps.gov.in/Uploads/PVK%20FDC.jpg",
        "brochure": "https://postagestamps.gov.in/PVK%20FDC.jpg"
    },
    {
        "name": "India and Turkmenistan - 30 Years of Partnership",
        "releaseDate": "03.04.2022",
        "denomination": "2500p",
        "quantity": "201600",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/Ind_Turk%20Stamp.jpg",
        "fdcImage": "https://postagestamps.gov.in/Uploads/Ind_Turk%20FDC.jpg",
        "brochure": "https://postagestamps.gov.in/Ind_Turk%20FDC.jpg"
    },
    {
        "name": "36th  INTERNATIONAL GEOLOGICAL CONGRESS",
        "releaseDate": "20.03.2022",
        "denomination": "500p,1000p",
        "quantity": "311100",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/IGC%20Stamp.jpg",
        "fdcImage": "https://postagestamps.gov.in/Uploads/IGC%20FDC.jpg",
        "brochure": "https://postagestamps.gov.in/IGC%20FDC.jpg"
    },
    {
        "name": "RASHTRIYA INDIAN MILITARY COLLEGE, DEHRADUN",
        "releaseDate": "13.03.2022",
        "denomination": "500p",
        "quantity": "402945",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/RIMC%20Stamp.jpg",
        "fdcImage": "https://postagestamps.gov.in/Uploads/RIMC%20FDC.jpg",
        "brochure": "https://postagestamps.gov.in/RIMC%20FDC.jpg"
    },
    {
        "name": "President Fleet Review 2022 visakhapatnam",
        "releaseDate": "21.02.2022",
        "denomination": "500p",
        "quantity": "302250",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/VSKP%20Stamp.jpg",
        "fdcImage": "https://postagestamps.gov.in/Uploads/VSKP%20FDC.jpg",
        "brochure": "https://postagestamps.gov.in/VSKP%20FDC.jpg"
    },
    {
        "name": "50 Years of Arunachal Pradesh",
        "releaseDate": "20.02.2022",
        "denomination": "500p",
        "quantity": "404225",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/Ar%20Stamp.jpg",
        "fdcImage": "https://postagestamps.gov.in/Uploads/Ar%20FDC.jpg",
        "brochure": "https://postagestamps.gov.in/Ar%20FDC.jpg"
    },
    {
        "name": "Joint celebrations of the year of 50th Anniversary of UAE's formation and the 75th Anniversary of the Independence of India",
        "releaseDate": "18.02.2022",
        "denomination": "2500p",
        "quantity": "302400",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/India%20UAE%20Stamp.jpg",
        "fdcImage": "https://postagestamps.gov.in/Uploads/India%20UAE%20FDC.jpg",
        "brochure": "https://postagestamps.gov.in/India%20UAE%20FDC.jpg"
    },
    {
        "name": "Delhi Police - Platinum Jubilee",
        "releaseDate": "16.02.2022",
        "denomination": "500p",
        "quantity": "500000",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/Delhi%20Police%20Stamp.jpg",
        "fdcImage": "https://postagestamps.gov.in/Uploads/Delhi%20Police%20FDC.jpg",
        "brochure": "https://postagestamps.gov.in/Delhi%20Police%20FDC.jpg"
    },
    {
        "name": "50th Anniversary of ICRISAT",
        "releaseDate": "05.02.2022",
        "denomination": "500p",
        "quantity": "309500",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/ICRISAT%20Stamp.jpg",
        "fdcImage": "https://postagestamps.gov.in/Uploads/ICRISAT%20FDC.jpg",
        "brochure": "https://postagestamps.gov.in/ICRISAT%20FDC.jpg"
    },
    {
        "name": "50 years of full statehood of Tripura",
        "releaseDate": "21.01.2022",
        "denomination": "500p",
        "quantity": "305100",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/Stamp%20Tripura.jpg",
        "fdcImage": "https://postagestamps.gov.in/Uploads/FDC%20Tripura.jpg",
        "brochure": "https://postagestamps.gov.in/FDC%20Tripura.jpg"
    },
    {
        "name": "50 years of full statehood of Meghalaya",
        "releaseDate": "21.01.2022",
        "denomination": "500p",
        "quantity": "305100",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/Stamp%20Meghalaya.jpg",
        "fdcImage": "https://postagestamps.gov.in/Uploads/FDC%20Meghalaya.jpg",
        "brochure": "https://postagestamps.gov.in/FDC%20Meghalaya.jpg"
    },
    {
        "name": "50 years of full statehood of Manipur",
        "releaseDate": "21.01.2022",
        "denomination": "500p",
        "quantity": "305100",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/Stamp%20Manipur.jpg",
        "fdcImage": "https://postagestamps.gov.in/Uploads/FDC%20Manipur.jpg",
        "brochure": "https://postagestamps.gov.in/FDC%20Manipur.jpg"
    },
    {
        "name": "Department of Health Research",
        "releaseDate": "16.01.2022",
        "denomination": "500p",
        "quantity": "301920",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/ICMR%20Stamp.jpg",
        "fdcImage": "https://postagestamps.gov.in/Uploads/ICMR%20FDC.jpg",
        "brochure": "https://postagestamps.gov.in/ICMR%20FDC.jpg"
    },
    {
        "name": "PERMANENT COMMISSION TO WOMEN OFFICERS IN INDIAN ARMY",
        "releaseDate": "15.01.2022",
        "denomination": "1000p,1500p",
        "quantity": "202450",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/PCWOIA%20Stamp.jpg",
        "fdcImage": "https://postagestamps.gov.in/Uploads/PCWOIA%20FDC.jpg",
        "brochure": "https://postagestamps.gov.in/PCWOIA%20FDC.jpg"
    },
    {
        "name": "SWARNIM VIJAY VARSH",
        "releaseDate": "16.12.2021",
        "denomination": "500p",
        "quantity": "302400",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/SWARNIM_VIJAY_VARSH_Stamp.jpg",
        "fdcImage": "https://postagestamps.gov.in/Uploads/SWARNIM_VIJAY_VARSH_FDC.jpg",
        "brochure": "https://postagestamps.gov.in/SWARNIM_VIJAY_VARSH_FDC.jpg"
    },
    {
        "name": "75 Years of Mahindra Group",
        "releaseDate": "01.12.2021",
        "denomination": "1200p",
        "quantity": "302600",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/75_Years_Mahindra_Group_Stamp.jpg",
        "fdcImage": "https://postagestamps.gov.in/Uploads/75_Years_Mahindra_Group_FDC.jpg",
        "brochure": "https://postagestamps.gov.in/75_Years_Mahindra_Group_FDC.jpg"
    },
    {
        "name": "S.C.B. MEDICAL COLLEGE & HOSPITAL, CUTTACK",
        "releaseDate": "27.11.2021",
        "denomination": "500p",
        "quantity": "302980",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/SCB_Medical_College_Stamp.jpg",
        "fdcImage": "https://postagestamps.gov.in/Uploads/SCB_Medical_College_FDC.jpg",
        "brochure": "https://postagestamps.gov.in/SCB_Medical_College_FDC.jpg"
    },
    {
        "name": "DATTOPANT THENGADI",
        "releaseDate": "10.11.2021",
        "denomination": "500p",
        "quantity": "201600",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/dattopant_thengadi_stamp.jpg",
        "fdcImage": "https://postagestamps.gov.in/Uploads/dattopant_thengadi_fdc.jpg",
        "brochure": "https://postagestamps.gov.in/dattopant_thengadi_fdc.jpg"
    },
    {
        "name": "DECCAN COLLEGE BICENTENARY",
        "releaseDate": "06.10.2021",
        "denomination": "500p",
        "quantity": "307157",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/DECCAN_COLLEGE_BICENTENARY_Stamp.jpg",
        "fdcImage": "https://postagestamps.gov.in/Uploads/DECCAN_COLLEGE_BICENTENARY_FDC.jpg",
        "brochure": "https://postagestamps.gov.in/DECCAN_COLLEGE_BICENTENARY_FDC.jpg"
    },
    {
        "name": "Solapur martyrs:  \"Mallappa Dhanshetti, Shrikisan Sarada, Jagannath Shinde and Abdul Rasul Kurban Hussain\"",
        "releaseDate": "02.10.2021",
        "denomination": "500p",
        "quantity": "302400",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/solapur_martyrs.jpg",
        "fdcImage": "https://postagestamps.gov.in/Uploads/solapur_martyrs_FDC.jpg",
        "brochure": "https://postagestamps.gov.in/solapur_martyrs_FDC.jpg"
    },
    {
        "name": "Rao Jaimal Rathore",
        "releaseDate": "17.09.2021",
        "denomination": "500p",
        "quantity": "201600",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/RAOJaimal.jpg",
        "fdcImage": "https://postagestamps.gov.in/Uploads/fdc_RAOJaimal.jpg",
        "brochure": "https://postagestamps.gov.in/fdc_RAOJaimal.jpg"
    },
    {
        "name": "Ma. CHAMAN LAL",
        "releaseDate": "07.08.2021",
        "denomination": "500p",
        "quantity": "172230",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/stamp_chaman_lal.jpg",
        "fdcImage": "https://postagestamps.gov.in/Uploads/fdc_chaman_lal.jpg",
        "brochure": "https://postagestamps.gov.in/fdc_chaman_lal.jpg"
    },
    {
        "name": "Golden Jubilee Year -  Gayatri Teerth, Shantikunj",
        "releaseDate": "20.06.2021",
        "denomination": "500p",
        "quantity": "402525",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/gayatri_teerth_shantikunj_stamp.jpg",
        "fdcImage": "https://postagestamps.gov.in/Uploads/FDC_Gayatri_Teerth_Shantikunj.jpg",
        "brochure": "https://postagestamps.gov.in/FDC_Gayatri_Teerth_Shantikunj.jpg"
    },
    {
        "name": "70 Years of Diplomatic relations between India and Germany",
        "releaseDate": "10.06.2021",
        "denomination": "500p",
        "quantity": "352400",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/stamp_india_germany.jpg",
        "fdcImage": "https://postagestamps.gov.in/Uploads/india_germany_cancelled_fdc.jpg",
        "brochure": "https://postagestamps.gov.in/india_germany_cancelled_fdc.jpg"
    },
    {
        "name": "Rajyogini Dadi Janki",
        "releaseDate": "12.04.2021",
        "denomination": "500p",
        "quantity": "804450",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/Janki.jpeg",
        "fdcImage": "https://postagestamps.gov.in/Uploads/Janki_stamp.jpeg",
        "brochure": "https://postagestamps.gov.in/Janki_stamp.jpeg"
    },
    {
        "name": "Golden Jubilee Year of India Bangladesh Friendship",
        "releaseDate": "27.03.2021",
        "denomination": "500p",
        "quantity": "504000",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/High_Res_Stamp.jpg",
        "fdcImage": "https://postagestamps.gov.in/Uploads/High_Res_FDC.jpg",
        "brochure": "https://postagestamps.gov.in/High_Res_FDC.jpg"
    },
    {
        "name": "100 Years of First Visit of Mahatma Gandhi to Odisha",
        "releaseDate": "23.03.2021",
        "denomination": "500p",
        "quantity": "504000",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/STMP_odisha.jpg",
        "fdcImage": "https://postagestamps.gov.in/Uploads/FDC_odisha.jpg",
        "brochure": "https://postagestamps.gov.in/FDC_odisha.jpg"
    },
    {
        "name": "The High Court Of Gujarat",
        "releaseDate": "06.02.2021",
        "denomination": "500p",
        "quantity": "416900",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/stamp_Gujrat%20High%20Court_diamond_Jubilee.jpg",
        "fdcImage": "https://postagestamps.gov.in/Uploads/FDC_Gujrat%20High%20Court_diamond_Jubilee.jpg",
        "brochure": "https://postagestamps.gov.in/FDC_Gujrat%20High%20Court_diamond_Jubilee.jpg"
    },
    {
        "name": "50 Years of full Statehood of Himachal Pradesh",
        "releaseDate": "25.01.2021",
        "denomination": "500p",
        "quantity": "403825",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/Stamp_50%20Years%20of%20Full%20Statehood%20of%20HP.jpg",
        "fdcImage": "https://postagestamps.gov.in/Uploads/FDC_50%20Years%20of%20Full%20Statehood%20of%20HP.jpg",
        "brochure": "https://postagestamps.gov.in/FDC_50%20Years%20of%20Full%20Statehood%20of%20HP.jpg"
    },
    {
        "name": "125th Birth Anniversary Year of Netaji Subhas Chandra Bose",
        "releaseDate": "23.01.2021",
        "denomination": "2500p",
        "quantity": "504000",
        "printer": "Security Printing Press, Hyderabad",
        "stampImage": "https://postagestamps.gov.in/Uploads/stamp_netaji_08022021.jpg",
        "fdcImage": "https://postagestamps.gov.in/Uploads/fdc_netaji_08022021.jpg",
        "brochure": "https://postagestamps.gov.in/fdc_netaji_08022021.jpg"
    }
];

export default products;