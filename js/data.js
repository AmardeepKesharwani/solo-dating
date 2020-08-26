const users = [
    {
        id: 1,
        name: "Shreya",
        profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRcwbUnKf9b7UUNb9OCgQiDZq3jSoslIUH2VQ&usqp=CAU",
        gender: "f",
        bio: "If you like me Then raise your hand, If not then raise your standard.",
        request: false,
        friend: false,
        block: false
    },
    {
        id: 2,
        name: "Jhimjhin",
        profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ73d8DFdJbeGigA2PQ_rSgcB1buo9N9sLikw&usqp=CAU",
        gender: "f",
        bio: "My personality is who I am and my Attitude depends on who you are!",
        request: false,
        friend: false,
        block: false
    },
    {
        id: 3,
        name: "Aman Roy",
        profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT61EdjEL9U5Xm6x8Q8euJ9WY3K2UdfU38VPw&usqp=CAU",
        gender: "m",
        bio: "Love is a feeling that is felt _deep in the heart and I feel it for you",
        request: false,
        friend: false,
        block: false
    },
    {
        id: 4,
        name: "Riya Soni",
        profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTX-VKzx8bczIn1DC6GRfiXbsBj8OE8FU_3lA&usqp=CAU",
        gender: "f",
        bio: "I’m a princess without a Prince. My father is the King ",
        request: false,
        friend: false,
        block: false
    },
    {
        id: 5,
        name: "Prashanth",
        profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSdMEtE2GDfpjadhGTlUx-83-Qil9SLug7Egg&usqp=CAU",
        gender: "m",
        bio: "Hum To #Pahle se Bigde Hue Hai, #Hamaara Koi Kya #Bigaad Lega.",
        request: false,
        friend: false,
        block: false
    },
    {
        id: 6,
        name: "Amardeep",
        profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSmJ9CLhOyNsDXimvw0EM3b0Y7VD-RFXVkNqw&usqp=CAU",
        gender: "m",
        bio: "Sun mere humsafar Kya tujhe itni si bhi khabar Ki teri saansein chalti jidhar Rahungi bas wahin umrr bhar",
        request: false,
        friend: false
    },
    {
        id: 7,
        name: "Somya Singh",
        profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRn8-bWNecvlo2vE5YZprsl8bst-KEyntyOzg&usqp=CAU",
        gender: "f",
        bio: "Dreaming impossible things is my stuff. After all dreams come true",
        request: false,
        friend: false
    },
    {
        id: 8,
        name: "Amit KM",
        profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRmQBUzzx0Liz6xa-7LFd5fIdLcRInqpkZaCQ&usqp=CAU",
        gender: "m",
        bio: "I’m 99% sure that she doesn’t like me, But its the 1% that keeps me going.",
        request: false,
        friend: false
    },
    {
        id: 9,
        name: "Bad Boy Subham",
        profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQnSfNam_TEJT1qJakoy736G3JLoDTDrxDHfw&usqp=CAU",
        gender: "m",
        bio: "Apni #Khubsurat Par #Ghamand Mat Kar Pagli, Kyonki Hum Wo Hai, Jo Ghamand #jeb Mei Liye #Ghumte Hain.",
        request: false,
        friend: false
    },
    {
        id: 10,
        name: "Janhvi keshri",
        profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSszl9r4yJ9HeN4wYEvozw-B7IREUi0maer3A&usqp=CAU",
        gender: "f",
        bio: "My personality is who I am and my Attitude depends on who you are!",
        request: false,
        friend: false
    },
    {
        id: 11,
        name: "Ananya Jain",
        profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTAYPseFNgne9QcP48C8Gz3CeB6K0jxpF9_ng&usqp=CAU",
        gender: "f",
        bio: "It’s okay if you don’t like me. Not everyone has good taste.",
        request: false,
        friend: false
    },
    {
        id: 12,
        name: "Krishna",
        profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTNP5ulQ1ecVhGOt_KcmDQZl5DKcKVEcTDGkw&usqp=CAU",
        gender: "m",
        bio: "Bande Ke Paas Agar Jigar Ho To Bina #Trigar Ke Bhi Dushmano Ki #VAT Lagai Ja Sakti Hai.",
        request: false,
        friend: false
    },
    {
        id: 13,
        name: "Anvi keshri",
        profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT-1iJZrI1Rwiv0-2yYFuMPUIwAoI_Gq6ytfQ&usqp=CAU",
        gender: "f",
        bio: "I may not be the girl that everyone wants, but at least I am not the girl that everyone’s had",
        request: false,
        friend: false
    },
    {
        id: 14,
        name: "Neha Sharma",
        profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ1dkOu5Vcxdi1S4to5PwUmgzkvJLFsWj-6hA&usqp=CAU",
        gender: "f",
        bio: "I don’t always have to be, Who you want me to be, I am me..",
        request: false,
        friend: false
    }, {
        id: 15,
        name: "Chhota Boss",
        profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT462uIGsnUbtInjtasT0mnV1bPNUCieoEu_g&usqp=CAU",
        gender: "m",
        bio: "Karle Aaj Didar Mera Solo Par Ji Bhar Ke, Taras Jaegi Ek Jhalak Ke Liye Jis Din Wikipedia Mei Milunga.",
        request: false,
        friend: false
    },
    {
        id: 16,
        name: "Pooja Negi",
        profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRVxQiZsOSOYcJR7TLl6s-b8UBlibxmx08BAg&usqp=CAU",
        gender: "f",
        bio: "Boys Ka Sabse Bara Jhooth Aap Pehli Ladki Ho Jisse Main Iss Tarh Se Baat Karta Hu.",
        request: false,
        friend: false
    },
    {
        id: 17,
        name: "Priya Raj",
        profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS7Qw9N8Pcf9TGwgaSiKNSVpVaU3HCQRMYK1A&usqp=CAU",
        gender: "f",
        bio: "Cooking nahi karni aati to kya hua, makeup karne me to ek number hoon.",
        request: false,
        friend: false
    },
    {
        id: 18,
        name: "Nishant",
        profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSZFEyw942Yi3Sa3-biIwIvuZFKCBhDIseXPA&usqp=CAU",
        gender: "m",
        bio: "I'm a very private person. You don’t ask i don’t tell.",
        request: false,
        friend: false
    },
    {
        id: 19,
        name: "Love boy shiva",
        profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSEWok9LvWdUg0Whgv7PkScxAZeNG2TN2GRPA&usqp=CAU",
        gender: "m",
        bio: "Dear Girls, Stop comparing all guys with your ex. Not all of us are players and jerks.",
        request: false,
        friend: false
    },
    {
        id: 20,
        name: "Deepu Yadav",
        profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRbhId37x5FiycZepm-BY07IyFF0V3Fk2nA1A&usqp=CAU",
        gender: "m",
        bio: "Don’t be afraid of being outnumbered , eagles fly alone. Pigeons flock together.",
        request: false,
        friend: false
    },
];
