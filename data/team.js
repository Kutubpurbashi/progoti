const categoryData = [
    {
      photo: "https://scontent.fdac41-1.fna.fbcdn.net/v/t1.18169-9/12107039_136954893327349_7361340785337145390_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=174925&_nc_eui2=AeHxTMgHu20a_35lwnshbhn9nB0kDjQYF7GcHSQONBgXsbOgKaSB8mFE-GpP6FH4sZ-n-sJ7qR9dSp3M4LQyiZDK&_nc_ohc=Z-M3d19iHFwAX8vKwJY&_nc_ht=scontent.fdac41-1.fna&oh=00_AT_m16gWCJ8rZPy2EPEdj156QdcvichLedgXD2eQQel-ww&oe=62AE3C5C",
      name: "মনিরুল আলম সেন্টু",
      designation: "প্রধান উপদেষ্টা"
    },
    {
      photo: "https://scontent.fdac41-1.fna.fbcdn.net/v/t39.30808-6/281803482_3302540959991936_8563885613916259844_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFocYwIlh4-TtXzyqsIK6DqsAwJWX8j-JOwDAlZfyP4k8pvqU9boMCoAzQA-r6qUyvHQ-LhqFygS8FdwUMTUv0S&_nc_ohc=3saXiscYVToAX_XXByl&tn=SGASXOK3c_jEIybK&_nc_ht=scontent.fdac41-1.fna&oh=00_AT8Ti8noTcCSqJTRH8NigwB9Q4legB6D1deaDUCIByrgAA&oe=628D1E84",
      name: "মোস্তফা হোসেন চৌধুরী",
      designation: "উপদেষ্টা"
    },
    {
      photo: "https://scontent.fdac41-1.fna.fbcdn.net/v/t39.30808-6/281803482_3302540959991936_8563885613916259844_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFocYwIlh4-TtXzyqsIK6DqsAwJWX8j-JOwDAlZfyP4k8pvqU9boMCoAzQA-r6qUyvHQ-LhqFygS8FdwUMTUv0S&_nc_ohc=3saXiscYVToAX_XXByl&tn=SGASXOK3c_jEIybK&_nc_ht=scontent.fdac41-1.fna&oh=00_AT8Ti8noTcCSqJTRH8NigwB9Q4legB6D1deaDUCIByrgAA&oe=628D1E84",
      name: "মোঃ মঞ্জুরুল ইসলাম",
      designation: "উপদেষ্টা"
    },
    {
      photo: "https://scontent.fdac41-1.fna.fbcdn.net/v/t39.30808-6/281803482_3302540959991936_8563885613916259844_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFocYwIlh4-TtXzyqsIK6DqsAwJWX8j-JOwDAlZfyP4k8pvqU9boMCoAzQA-r6qUyvHQ-LhqFygS8FdwUMTUv0S&_nc_ohc=3saXiscYVToAX_XXByl&tn=SGASXOK3c_jEIybK&_nc_ht=scontent.fdac41-1.fna&oh=00_AT8Ti8noTcCSqJTRH8NigwB9Q4legB6D1deaDUCIByrgAA&oe=628D1E84",
      name: "হাজী মোঃ শহীদুল্লাহ্",
      designation: "উপদেষ্টা"
    },
    {
      photo: "https://scontent.fdac41-1.fna.fbcdn.net/v/t1.18169-9/408327_104717719685615_304323171_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=174925&_nc_eui2=AeG9PbSSU1CFWLFY3U-O3dtg3wNY0IYc8TjfA1jQhhzxOOIrp0tiIu4-SY7RvXU2FSjNFN9n9ECUwGB7x3o1znTs&_nc_ohc=R7-xOqnEk40AX9GAKgA&_nc_ht=scontent.fdac41-1.fna&oh=00_AT8PvUivjlT54ZW0H-IV9jaJWNNwq7HUueIaH_iCqV1wMg&oe=62AD6DA2",
      name: "মোঃ মোজাম্মেল হোসেন",
      designation: "উপদেষ্টা"
    },
    {
      photo: "https://scontent.fdac41-1.fna.fbcdn.net/v/t39.30808-6/281803482_3302540959991936_8563885613916259844_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFocYwIlh4-TtXzyqsIK6DqsAwJWX8j-JOwDAlZfyP4k8pvqU9boMCoAzQA-r6qUyvHQ-LhqFygS8FdwUMTUv0S&_nc_ohc=3saXiscYVToAX_XXByl&tn=SGASXOK3c_jEIybK&_nc_ht=scontent.fdac41-1.fna&oh=00_AT8Ti8noTcCSqJTRH8NigwB9Q4legB6D1deaDUCIByrgAA&oe=628D1E84",
      name: "হাজী মোঃ রোকন উদ্দিন রোকন",
      designation: "উপদেষ্টা"
    },
    {
      photo: "https://scontent.fdac41-1.fna.fbcdn.net/v/t39.30808-6/281803482_3302540959991936_8563885613916259844_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFocYwIlh4-TtXzyqsIK6DqsAwJWX8j-JOwDAlZfyP4k8pvqU9boMCoAzQA-r6qUyvHQ-LhqFygS8FdwUMTUv0S&_nc_ohc=3saXiscYVToAX_XXByl&tn=SGASXOK3c_jEIybK&_nc_ht=scontent.fdac41-1.fna&oh=00_AT8Ti8noTcCSqJTRH8NigwB9Q4legB6D1deaDUCIByrgAA&oe=628D1E84",
      name: "অনামিকা হক প্রিয়াংকা",
      designation: "উপদেষ্টা"
    },
    {
      photo: "https://scontent.fdac41-1.fna.fbcdn.net/v/t39.30808-6/281803482_3302540959991936_8563885613916259844_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFocYwIlh4-TtXzyqsIK6DqsAwJWX8j-JOwDAlZfyP4k8pvqU9boMCoAzQA-r6qUyvHQ-LhqFygS8FdwUMTUv0S&_nc_ohc=3saXiscYVToAX_XXByl&tn=SGASXOK3c_jEIybK&_nc_ht=scontent.fdac41-1.fna&oh=00_AT8Ti8noTcCSqJTRH8NigwB9Q4legB6D1deaDUCIByrgAA&oe=628D1E84",
      name: "মোঃ আলমগীর ভূইয়া",
      designation: "উপদেষ্টা"
    },
    {
      photo: "https://scontent.fdac41-1.fna.fbcdn.net/v/t39.30808-6/281803482_3302540959991936_8563885613916259844_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFocYwIlh4-TtXzyqsIK6DqsAwJWX8j-JOwDAlZfyP4k8pvqU9boMCoAzQA-r6qUyvHQ-LhqFygS8FdwUMTUv0S&_nc_ohc=3saXiscYVToAX_XXByl&tn=SGASXOK3c_jEIybK&_nc_ht=scontent.fdac41-1.fna&oh=00_AT8Ti8noTcCSqJTRH8NigwB9Q4legB6D1deaDUCIByrgAA&oe=628D1E84",
      name: "ডা.আবদুন নূর সায়েম",
      designation: "উপদেষ্টা"
    },
    {
      photo: "https://scontent.fdac41-1.fna.fbcdn.net/v/t39.30808-6/281803482_3302540959991936_8563885613916259844_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFocYwIlh4-TtXzyqsIK6DqsAwJWX8j-JOwDAlZfyP4k8pvqU9boMCoAzQA-r6qUyvHQ-LhqFygS8FdwUMTUv0S&_nc_ohc=3saXiscYVToAX_XXByl&tn=SGASXOK3c_jEIybK&_nc_ht=scontent.fdac41-1.fna&oh=00_AT8Ti8noTcCSqJTRH8NigwB9Q4legB6D1deaDUCIByrgAA&oe=628D1E84",
      name: "মাজহারুল ইসলাম মিথুন",
      designation: "উপদেষ্টা"
    },
    {
      photo: "https://scontent.fdac41-1.fna.fbcdn.net/v/t31.18172-8/25311330_973649572788537_2724615870662991026_o.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_eui2=AeHpM12hDf-qSiQpnbucXH87WxM-v0zRFghbEz6_TNEWCOQSUlHuBCphGhmo00lNbxNdYUpSGJQVqW7-kscstf5O&_nc_ohc=gU7BD_Nuo6IAX-L2yKl&tn=SGASXOK3c_jEIybK&_nc_ht=scontent.fdac41-1.fna&oh=00_AT9GfYeA0_l8-VW6qTmwGFdoSkK1r6JZQDg7vB8gx290Fg&oe=62AC477F",
      name: "এম.এ.জাহের মোল্লা",
      designation: "উপদেষ্টা"
    },
    {
      photo: "https://scontent.fdac41-1.fna.fbcdn.net/v/t39.30808-6/281803482_3302540959991936_8563885613916259844_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFocYwIlh4-TtXzyqsIK6DqsAwJWX8j-JOwDAlZfyP4k8pvqU9boMCoAzQA-r6qUyvHQ-LhqFygS8FdwUMTUv0S&_nc_ohc=3saXiscYVToAX_XXByl&tn=SGASXOK3c_jEIybK&_nc_ht=scontent.fdac41-1.fna&oh=00_AT8Ti8noTcCSqJTRH8NigwB9Q4legB6D1deaDUCIByrgAA&oe=628D1E84",
      name: "গাউছুল আজম রানা",
      designation: "উপদেষ্টা"
    },
    {
      photo: "https://scontent.fdac41-1.fna.fbcdn.net/v/t39.30808-6/281803482_3302540959991936_8563885613916259844_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFocYwIlh4-TtXzyqsIK6DqsAwJWX8j-JOwDAlZfyP4k8pvqU9boMCoAzQA-r6qUyvHQ-LhqFygS8FdwUMTUv0S&_nc_ohc=3saXiscYVToAX_XXByl&tn=SGASXOK3c_jEIybK&_nc_ht=scontent.fdac41-1.fna&oh=00_AT8Ti8noTcCSqJTRH8NigwB9Q4legB6D1deaDUCIByrgAA&oe=628D1E84",
      name: "ইঞ্জিনিয়ার মোঃ আলাউদ্দিন",
      designation: "উপদেষ্টা"
    },
    {
      photo: "https://scontent.fdac41-1.fna.fbcdn.net/v/t39.30808-6/281803482_3302540959991936_8563885613916259844_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFocYwIlh4-TtXzyqsIK6DqsAwJWX8j-JOwDAlZfyP4k8pvqU9boMCoAzQA-r6qUyvHQ-LhqFygS8FdwUMTUv0S&_nc_ohc=3saXiscYVToAX_XXByl&tn=SGASXOK3c_jEIybK&_nc_ht=scontent.fdac41-1.fna&oh=00_AT8Ti8noTcCSqJTRH8NigwB9Q4legB6D1deaDUCIByrgAA&oe=628D1E84",
      name: "আলহাজ্ব মুহাম্মদ মাওলানা মামুনুর রশিদ ",
      designation: "উপদেষ্টা"
    },
    {
      photo: "https://scontent.fdac41-1.fna.fbcdn.net/v/t39.30808-6/281803482_3302540959991936_8563885613916259844_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFocYwIlh4-TtXzyqsIK6DqsAwJWX8j-JOwDAlZfyP4k8pvqU9boMCoAzQA-r6qUyvHQ-LhqFygS8FdwUMTUv0S&_nc_ohc=3saXiscYVToAX_XXByl&tn=SGASXOK3c_jEIybK&_nc_ht=scontent.fdac41-1.fna&oh=00_AT8Ti8noTcCSqJTRH8NigwB9Q4legB6D1deaDUCIByrgAA&oe=628D1E84",
      name: "মোঃ আমির হোসেন লিটন",
      designation: "সদস্য"
    },

    {
      photo: "https://scontent.fdac41-1.fna.fbcdn.net/v/t1.6435-9/186478028_4084372408326399_1141960088020371870_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_eui2=AeFo5-5l5OEEsu86-hJtxRxYFNgc5b8kSvAU2BzlvyRK8A5OaYgA_7s9uTDysC-GgUcEJisj5uo-QqGDpFRSTVuX&_nc_ohc=4eWWZuVtxCAAX-4Bdy0&tn=SGASXOK3c_jEIybK&_nc_ht=scontent.fdac41-1.fna&oh=00_AT_Kr7FLVOnjpLCnzNUHaHfHQWyYXRYd72COVQuvi8mjcw&oe=62AD36E1",
      name: "মোহাম্মমদ মনির হোসেন",
      designation: "সদস্য সচিব"
    },
    {
      photo: "https://scontent.fdac41-1.fna.fbcdn.net/v/t39.30808-6/277517442_684224932922858_4615594934201492355_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_eui2=AeGxR39i4eSX7N9SivgSASK9mSp_mKJLyj-ZKn-YokvKPzTELSwdk7x2Yn06zLGVz9Bkn0v70tXUohG_zKwn3Rv3&_nc_ohc=yWYHk6dASwwAX-fH5fB&tn=SGASXOK3c_jEIybK&_nc_ht=scontent.fdac41-1.fna&oh=00_AT9dD4xi7fK6FDGJjT7jroeUUbhb2O3RQlfz6-kmVsoxRQ&oe=628E6705",
      name: "মোহাম্মদ ইলিয়াছ",
      designation: "সদস্য"
    },
    {
      photo: "https://scontent.fdac41-1.fna.fbcdn.net/v/t39.30808-6/281803482_3302540959991936_8563885613916259844_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFocYwIlh4-TtXzyqsIK6DqsAwJWX8j-JOwDAlZfyP4k8pvqU9boMCoAzQA-r6qUyvHQ-LhqFygS8FdwUMTUv0S&_nc_ohc=3saXiscYVToAX_XXByl&tn=SGASXOK3c_jEIybK&_nc_ht=scontent.fdac41-1.fna&oh=00_AT8Ti8noTcCSqJTRH8NigwB9Q4legB6D1deaDUCIByrgAA&oe=628D1E84",
      name: "মোঃ আশিকুল্লাহ রাশেদ",
      designation: "সদস্য"
    },
    {
      photo: "../img/team/moin.jpg",
      name: "মঈনূল ইসলাম",
      designation: "সদস্য"
    },
    {
      photo: "https://scontent.fdac41-1.fna.fbcdn.net/v/t39.30808-6/281803482_3302540959991936_8563885613916259844_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFocYwIlh4-TtXzyqsIK6DqsAwJWX8j-JOwDAlZfyP4k8pvqU9boMCoAzQA-r6qUyvHQ-LhqFygS8FdwUMTUv0S&_nc_ohc=3saXiscYVToAX_XXByl&tn=SGASXOK3c_jEIybK&_nc_ht=scontent.fdac41-1.fna&oh=00_AT8Ti8noTcCSqJTRH8NigwB9Q4legB6D1deaDUCIByrgAA&oe=628D1E84",
      name: "মোঃ রবিউল ইসলাম",
      designation: "সদস্য"
    },
    {
      photo: "https://scontent.fdac41-1.fna.fbcdn.net/v/t39.30808-6/281803482_3302540959991936_8563885613916259844_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFocYwIlh4-TtXzyqsIK6DqsAwJWX8j-JOwDAlZfyP4k8pvqU9boMCoAzQA-r6qUyvHQ-LhqFygS8FdwUMTUv0S&_nc_ohc=3saXiscYVToAX_XXByl&tn=SGASXOK3c_jEIybK&_nc_ht=scontent.fdac41-1.fna&oh=00_AT8Ti8noTcCSqJTRH8NigwB9Q4legB6D1deaDUCIByrgAA&oe=628D1E84",
      name: "নির্মল সরকার",
      designation: "সদস্য"
    },
    {
      photo: "https://scontent.fdac41-1.fna.fbcdn.net/v/t39.30808-6/281803482_3302540959991936_8563885613916259844_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFocYwIlh4-TtXzyqsIK6DqsAwJWX8j-JOwDAlZfyP4k8pvqU9boMCoAzQA-r6qUyvHQ-LhqFygS8FdwUMTUv0S&_nc_ohc=3saXiscYVToAX_XXByl&tn=SGASXOK3c_jEIybK&_nc_ht=scontent.fdac41-1.fna&oh=00_AT8Ti8noTcCSqJTRH8NigwB9Q4legB6D1deaDUCIByrgAA&oe=628D1E84",
      name: "মোঃ বায়েজিদ শাকিল",
      designation: "সদস্য"
    },
    {
      photo: "https://scontent.fdac41-1.fna.fbcdn.net/v/t39.30808-6/281803482_3302540959991936_8563885613916259844_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFocYwIlh4-TtXzyqsIK6DqsAwJWX8j-JOwDAlZfyP4k8pvqU9boMCoAzQA-r6qUyvHQ-LhqFygS8FdwUMTUv0S&_nc_ohc=3saXiscYVToAX_XXByl&tn=SGASXOK3c_jEIybK&_nc_ht=scontent.fdac41-1.fna&oh=00_AT8Ti8noTcCSqJTRH8NigwB9Q4legB6D1deaDUCIByrgAA&oe=628D1E84",
      name: "মোঃ আল আমিন",
      designation: "সদস্য"
    },
    {
      photo: "https://scontent.fdac41-1.fna.fbcdn.net/v/t39.30808-6/281803482_3302540959991936_8563885613916259844_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFocYwIlh4-TtXzyqsIK6DqsAwJWX8j-JOwDAlZfyP4k8pvqU9boMCoAzQA-r6qUyvHQ-LhqFygS8FdwUMTUv0S&_nc_ohc=3saXiscYVToAX_XXByl&tn=SGASXOK3c_jEIybK&_nc_ht=scontent.fdac41-1.fna&oh=00_AT8Ti8noTcCSqJTRH8NigwB9Q4legB6D1deaDUCIByrgAA&oe=628D1E84",
      name: "মোঃ পলাশ",
      designation: "সদস্য"
    },
    {
      photo: "https://scontent.fdac41-1.fna.fbcdn.net/v/t39.30808-6/281803482_3302540959991936_8563885613916259844_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFocYwIlh4-TtXzyqsIK6DqsAwJWX8j-JOwDAlZfyP4k8pvqU9boMCoAzQA-r6qUyvHQ-LhqFygS8FdwUMTUv0S&_nc_ohc=3saXiscYVToAX_XXByl&tn=SGASXOK3c_jEIybK&_nc_ht=scontent.fdac41-1.fna&oh=00_AT8Ti8noTcCSqJTRH8NigwB9Q4legB6D1deaDUCIByrgAA&oe=628D1E84",
      name: "মোঃ শফিকুল ইসলাম",
      designation: "সদস্য"
    },
    {
      photo: "https://scontent.fdac41-1.fna.fbcdn.net/v/t39.30808-6/281803482_3302540959991936_8563885613916259844_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFocYwIlh4-TtXzyqsIK6DqsAwJWX8j-JOwDAlZfyP4k8pvqU9boMCoAzQA-r6qUyvHQ-LhqFygS8FdwUMTUv0S&_nc_ohc=3saXiscYVToAX_XXByl&tn=SGASXOK3c_jEIybK&_nc_ht=scontent.fdac41-1.fna&oh=00_AT8Ti8noTcCSqJTRH8NigwB9Q4legB6D1deaDUCIByrgAA&oe=628D1E84",
      name: "নাম",
      designation: "সদস্য"
    },
    {
      photo: "https://scontent.fdac41-1.fna.fbcdn.net/v/t39.30808-6/281803482_3302540959991936_8563885613916259844_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFocYwIlh4-TtXzyqsIK6DqsAwJWX8j-JOwDAlZfyP4k8pvqU9boMCoAzQA-r6qUyvHQ-LhqFygS8FdwUMTUv0S&_nc_ohc=3saXiscYVToAX_XXByl&tn=SGASXOK3c_jEIybK&_nc_ht=scontent.fdac41-1.fna&oh=00_AT8Ti8noTcCSqJTRH8NigwB9Q4legB6D1deaDUCIByrgAA&oe=628D1E84",
      name: "নাম",
      designation: "সদস্য"
    },
    {
      photo: "https://scontent.fdac41-1.fna.fbcdn.net/v/t39.30808-6/281803482_3302540959991936_8563885613916259844_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFocYwIlh4-TtXzyqsIK6DqsAwJWX8j-JOwDAlZfyP4k8pvqU9boMCoAzQA-r6qUyvHQ-LhqFygS8FdwUMTUv0S&_nc_ohc=3saXiscYVToAX_XXByl&tn=SGASXOK3c_jEIybK&_nc_ht=scontent.fdac41-1.fna&oh=00_AT8Ti8noTcCSqJTRH8NigwB9Q4legB6D1deaDUCIByrgAA&oe=628D1E84",
      name: "নাম",
      designation: "সদস্য"
    },
  ];
  
