module.exports.config = {
  name: "automsg",
  version: "2.0",
  Permssion: 0,
  credits: "nazrul",
  prefix : true,
  description: "সেট করা সময় অনুযায়ী স্বয়ংক্রিয়ভাবে বার্তাগুলি পাঠানো হবে!",
  category: "AutoTime",
  countDown: 5
};

module.exports.onLoad = async ({ api }) => {
  const timerData = {
"05:30 AM": {
message: "======== 𝗧𝗜𝗠𝗘 =========\n𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 05:30 A𝐌\n✢━━━━━━━━━━━━━━━✢\nউচ্চারণ : ‘আতুবু ইলাল্লাহি মিম্মা আজনাবতু\n⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆\nঅর্থ : (হে আল্লাহ!) আমি যে গোনাহ করেছি; তা থেকে আল্লাহর কাছে ক্ষমা প্রার্থনা করছি।\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 ━➢ 𝐈𝐬𝐥𝐦𝐚𝐢𝐜𝐤 𝐂𝐡𝐚𝐭",
url: "https://i.imgur.com/NUQMK4M.jpeg"
},
{
"06:00 AM":
message: "======== 𝗧𝗜𝗠𝗘 =========\n𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 06:00 A𝐌\n✢━━━━━━━━━━━━━━━✢\nউচ্চারন:- আল্লাহুম্মাগ্ফিরলি, ওয়ারহামনি, ওয়াহদিনি, ওয়া-আফিনি, ওয়ারজুক্বনি।\n⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆\nঅর্থ : ‘হে আল্লাহ! আমাকে ক্ষমা কর, আমার প্রতি দয়া কর, আমাকে সঠিক পথ দেখাও, আমাকে নিরাপত্তা দান কর এবং আমাকে জীবিকা দাও।\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 ━➢ 𝐈𝐬𝐥𝐦𝐚𝐢𝐜𝐤 𝐂𝐡𝐚𝐭",
url: "https://i.imgur.com/DW2mVqj.jpeg"
},
{
"06:30 AM":
message: "======== 𝗧𝗜𝗠𝗘 =========\n𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 06:30 A𝐌\n✢━━━━━━━━━━━━━━━✢\nসকল প্রসসা আল্লাহ জন্য, যিনি সমস্ত বিশ্বের রব যিনি বিচার দিবসের  মালিক,যদি আমাকে সৃষ্টি করছেন এবং ঘুম থেকে জগত্ব করলেন তার কাছে আমরা পুনরায় ফিরে যাবো\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 ━➢ 𝐈𝐬𝐥𝐦𝐚𝐢𝐜𝐤 𝐂𝐡𝐚𝐭",
url: "https://i.imgur.com/WiyuCd0.jpeg"
},
{
"07:00 AM":
message: "======== 𝗧𝗜𝗠𝗘 =========\n𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 7:00 A𝐌\n✢━━━━━━━━━━━━━━━✢\nউচ্চারন:- বিসমিল্লাহির রাহমানির রাহিম\n⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆\nঅর্থ:-দয়ামত পরুম দয়ালু আল্লাহ নামে\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 ━➢ 𝐈𝐬𝐥𝐦𝐚𝐢𝐜𝐤 𝐂𝐡𝐚𝐭",
url: "https://i.imgur.com/V85N643.jpeg"
},
{
"07:30 AM":
message: "======== 𝗧𝗜𝗠𝗘 =========\n𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 07:30 A𝐌\n✢━━━━━━━━━━━━━━━✢\nউচ্চারন:- আলহামদুলিল্লাহ\n⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆\nঅর্থ :-প্রশংসা একমাত্র আল্লাহর জন্য\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 ━➢ 𝐈𝐬𝐥𝐦𝐚𝐢𝐜𝐤 𝐂𝐡𝐚𝐭",
url: "https://i.imgur.com/y10EH1w.jpeg"
},
{
"08:00 AM":
message: "======== 𝗧𝗜𝗠𝗘 =========\n𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 8:00 A𝐌\n✢━━━━━━━━━━━━━━━✢\nউচ্চারন:- রাব্বাবা যালামনা আনফুসানা ওয়া ইল্লাম তাগফির্লানা ওয়াতার হামনা লানা কুনান্না মিনাল খা’সিরিন।\n⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆\nঅর্থঃ হে আল্লাহ্, আমি আমার নিজের উপর জুলুম করে ফেলেছি। এখন তুমি যদি ক্ষমা ও রহম না কর, তাহলে আমি ধ্বংস হয়ে যাব।\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 ━➢ 𝐈𝐬𝐥𝐦𝐚𝐢𝐜𝐤 𝐂𝐡𝐚𝐭",
url: "https://i.imgur.com/W16nrBG.jpeg"
},
{
"08:30 AM":
message: "======== 𝗧𝗜𝗠𝗘 =========\n𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 08:30 A𝐌\n✢━━━━━━━━━━━━━━━✢\nউচ্চারন:- লা ইলাহা ইল্লা আন্তা সুবহানাকা ইন্নি কুনতু মিনাজ্ জালিমীন।\n⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆\nঅর্থ:- আল্লাহ ব্যতীত আর কোনো উপাস্য নেই। আমি আল্লাহর পবিত্রতা ঘোষণা করছি। অবশ্যই আমি পাপী। (সূরা: আল আম্বিয়া, আয়াত: ৮৭)\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 ━➢ 𝐈𝐬𝐥𝐦𝐚𝐢𝐜𝐤 𝐂𝐡𝐚𝐭",
url: "https://i.imgur.com/yMz61Vz.jpeg"
},
{
"09:00 AM":
message: "======== 𝗧𝗜𝗠𝗘 =========\n𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 9:00 A𝐌\n✢━━━━━━━━━━━━━━━✢\nউচ্চারন:- রাব্বানাগ ফিরলি ওয়ালি ওয়ালিদাইয়া, ওয়ালিল মু’মিনিনা ইয়াওমা ইয়াক্বুমুল\n⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆\nঅর্থ:- হে আমাদের প্রতিপালক! রোজ কেয়ামতে আমাকে, আমার পিতা-মাতা ও সকল মুমিনকে ক্ষমা করুন।’ (সুরা ইবরাহিম: ৪১)\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 ━➢ 𝐈𝐬𝐥𝐦𝐚𝐢𝐜𝐤 𝐂𝐡𝐚𝐭",
url: "https://i.imgur.com/CTLgCs9.jpeg"
},
{
"09:30 AM":
message: "======== 𝗧𝗜𝗠𝗘 =========\n𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 09:30 A𝐌\n✢━━━━━━━━━━━━━━━✢\nউচ্চারণ : ‘আতুবু ইলাল্লাহি মিম্মা আজনাবতু\n⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆\nঅর্থ :- যে গোনাহ আমি করেছি তা থেকে আল্লাহর কাছে তাওবাহ করছি।\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 ━➢ 𝐈𝐬𝐥𝐦𝐚𝐢𝐜𝐤 𝐂𝐡𝐚𝐭",
url: "https://i.imgur.com/fwJDXSB.jpeg"
},
{
"10:00 AM":
message: "======== 𝗧𝗜𝗠𝗘 =========\n𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 10:00 A𝐌\n✢━━━━━━━━━━━━━━━✢\nউচ্চারন:- আউজুবিল্লাহ মিনাশ শাইতোয়ানির রাজীম\n⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆\nঅর্থ :- বিতাড়িত শয়তান হতে আল্লাহ তা'য়ালার কাছে সাহায্য প্রার্থনা করছি\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 ━➢ 𝐈𝐬𝐥𝐦𝐚𝐢𝐜𝐤 𝐂𝐡𝐚𝐭",
url: "https://i.imgur.com/lKQ8Hcn.jpeg"
},
{
"10:30 AM":
message: "======== 𝗧𝗜𝗠𝗘 =========\n𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 10:30 A𝐌\n✢━━━━━━━━━━━━━━━✢\nউচ্চারন:- লা' আনাতুল্লাহি আলা ইবলীস\n⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆\nঅর্থ :- ইবলীসের উপরে আল্লাহর অভিশাপ বর্ষিত হোক\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 ━➢ 𝐈𝐬𝐥𝐦𝐚𝐢𝐜𝐤 𝐂𝐡𝐚𝐭",
url: "https://i.imgur.com/xJq3VKj.jpeg"
},
{
"11:00 AM":
message: "======== 𝗧𝗜𝗠𝗘 =========\n𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 11:00 𝗔𝐌\n✢━━━━━━━━━━━━━━━✢\nউচ্চারন:- আল্লাহুম্মা ইন্নী আসআলুকাল আফিয়াতা ফী দীনী ওয়া আহলী\n⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆\nঅর্থ:-হে আল্লাহ! আমি আপনার কাছে প্রার্থনা করি আমার দীন ও আমার পরিবার-পরিজনের নিরাপত্তা। (আদাবুল মুফরাদ: ৭০৩)\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 ━➢ 𝐈𝐬𝐥𝐦𝐚𝐢𝐜𝐤 𝐂𝐡𝐚𝐭",
url: "https://i.imgur.com/D6kz9Ho.jpeg"
},
{
"11:30 AM":
message: "======== 𝗧𝗜𝗠𝗘 =========\n𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 11:30 A𝐌\n✢━━━━━━━━━━━━━━━✢\nউচ্চারন:- আল্লাহুম্মা আনতা হাস্সানতা খালক্বি, ফাহাসসিন খুলুক্বি।\n⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆\nঅর্থ:- হে আল্লাহ, আপনি আমার চেহারায় সৌন্দর্য দিয়েছেন। অতএব আমার চরিত্রও সুন্দর করে দিন।’ (আহমদ: ২৪৩৯২; আবু ইয়ালা: ৫০৭৫)\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 ━➢ 𝐈𝐬𝐥𝐦𝐚𝐢𝐜𝐤 𝐂𝐡𝐚𝐭",
url: "https://i.imgur.com/WEaT4yE.jpeg"
},
{
"12:00 PM":
message: "======== 𝗧𝗜𝗠𝗘 =========\n𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 12:00 𝐏𝐌\n✢━━━━━━━━━━━━━━━✢\nউচ্চারণ: আল্লাহুম্মাগ ফিরলি হায়্যিনা ওয়া মাইয়্যিতিনা ওয়া শাহিদিনা ওয়া গায়িবিনা ওয়া সাগীরিনা ওয়া কাবীরিনা ওয়া যাকারিনা ওয়া উনছানা। আল্লাহুম্মা মান আহইয়াহতাহু মিন্না, ফাআহয়িহী আলাল ইসলামি ওয়া মান তাওয়াফ ফাইতাহু মিন্না ফাতাওয়াফফাহ আলাল ইমান।\n⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆\nঅর্থ:- হে আল্লাহ, আমাদের জীবিত ও মৃত, উপস্থিত ও অনুপস্থিত, ছোট ও বড় এবং পুরুষ ও নারী সকলকে ক্ষমা করে দিন। হে আল্লাহ, আপনি আমাদের মধ্য থেকে যাদেরকে জীবিত রেখেছেন ইসলামের উপর জীবিত রাখেন আর যাদেরকে মৃত্যু দান করেছেন তাদেরকে ঈমানের সঙ্গেই মৃত্যু দান করুন।\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 ━➢ 𝐈𝐬𝐥𝐦𝐚𝐢𝐜𝐤 𝐂𝐡𝐚𝐭",
url: "https://i.imgur.com/qIkjPVE.jpeg"
},
{
"12:30 PM":
message: "======== 𝗧𝗜𝗠𝗘 =========\n𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 12:30 𝐏𝐌\n✢━━━━━━━━━━━━━━━✢\nউচ্চারন:- আল্লাহুম্মাফ তাহলি আবওয়াবা রহমাতিক।\n⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆\nঅর্থ:-হে আল্লাহ! আমার জন্য আপনার রহমতের দরজাগুলো খুলে দিন।’ (আবু দাউদ: ৪৬৬)\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 ━➢ 𝐈𝐬𝐥𝐦𝐚𝐢𝐜𝐤 𝐂𝐡𝐚𝐭",
url: "https://i.imgur.com/HFXjoKQ.jpeg"
},
{
"12:50 PM":
message: "======== 𝗧𝗜𝗠𝗘 =========\n𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 12:50 𝐏𝐌\n✢━━━━━━━━━━━━━━━✢\nআসাসালামু আলাইকুম\nসম্মানিত গ্রুফ বাসী এখন যোহর এর আজান এর সময় হইছে সবাই খেলাধুলা আড্ডা বন্ধ করে নামাজের জন্য প্রস্থুত হন\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 ━➢ 𝐈𝐬𝐥𝐦𝐚𝐢𝐜𝐤 𝐂𝐡𝐚𝐭",
url: "https://i.imgur.com/hPLxW1X.jpeg"
},
{
"01:30 PM":
message: "======== 𝗧𝗜𝗠𝗘 =========\n𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 01:30 𝐏𝐌\n✢━━━━━━━━━━━━━━━✢\nউচ্চারণ: সুবহানাকাল্লাহুম্মা ওয়াবিহামদিকা আশহাদু আন লা ইলাহা ইল্লা আনতা আসতাগফিরুকা ওয়া আতুবু ইলাইক।\n⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆\nঅর্থ:- হে আল্লাহ, আমি আপনার সপ্রশংস পবিত্রতা ঘোষণা করছি। আমি সাক্ষ্য দিচ্ছি যে আপনি ছাড়া কোনো উপাস্য নেই। আমি আপনার কাছে ক্ষমা প্রার্থনা করছি এবং আপনার কাছে তাওবা করছি। (তিরমিজি: ৩৪৩৩)\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 ━➢ 𝐈𝐬𝐥𝐦𝐚𝐢𝐜𝐤 𝐂𝐡𝐚𝐭",
url: "https://i.imgur.com/y10EH1w.jpeg"
},
{
"02:00 PM":
message: "======== 𝗧𝗜𝗠𝗘 =========\n𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 02:00 𝐏𝐌\n✢━━━━━━━━━━━━━━━✢\nউচ্চারণ: ‘আল্লাহুম্মা মা আসবাহা বী মিন নি’মাতিন আও বিআহাদিম মিন খালকিকা ফামিনকা ওয়াহদাকা লা শারীকা লাকা, লাকাল হামদু ওয়ালাকাশ-শোকরু।\n⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆\nঅর্থ:- হে আল্লাহ! এই সকালে আমার মাঝে বা আপনার যেকোনো সৃষ্টির মাঝে যা কিছু নেয়ামত, সব আপনারই তরফ থেকে। আপনি একক, আপনার কোনো শরিক নেই। সুতরাং আপনারই প্রশংসা, আপনারই কৃতজ্ঞতা।’ (সুনানে আবু দাউদ: ৫০৭৩)\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 ━➢ 𝐈𝐬𝐥𝐦𝐚𝐢𝐜𝐤 𝐂𝐡𝐚𝐭",
url: "https://i.imgur.com/Ed2MdNd.jpeg"
},
{
"02:30 PM":
message: "উচ্চারণ: আস্তাগফিরুল্লা-হাল্লাজি লা- ইলা-হা ইল্লা- হুওয়া হাইয়্যুল কইয়্যূম ওয়া আতূবু ইলাইহি।\n⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆\nঅর্থ:- আমি আল্লাহর কাছে ক্ষমা চাই, তিনি ছাড়া প্রকৃতপক্ষে কোন মাবুদ নেই, তিনি চিরঞ্জীব, চিরস্থায়ী এবং তাঁর কাছে তাওবা করি। (আবু দাউদ: ১৫১৭)\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 ━➢ 𝐈𝐬𝐥𝐦𝐚𝐢𝐜𝐤 𝐂𝐡𝐚𝐭",
url: "https://i.imgur.com/WEaT4yE.jpeg"
},
{
"03:00 PM":
message: "======== 𝗧𝗜𝗠𝗘 =========\n𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 03:00 𝐏𝐌\n✢━━━━━━━━━━━━━━━✢\nউচ্চারন:- রাব্বানা ফাগফিরলানা যুনুবানা ওয়া কাফফির আন্না সাইয়্যিআতিনা ওয়া তাওয়াফ্ফানা মায়াল আবরার\n⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆\nঅর্থঃ হে আমাদের পালনকর্তা, আমাদের গুনাহসমূহ মাফ করে দাও, আমাদের থেকে সকল মন্দ দূর করে দাও এবং আমাদের নেক লোকদের সাহচার্য দান কর।\n(সূরা আল ইমরান, আয়াতঃ ১৯৩)\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 ━➢ 𝐈𝐬𝐥𝐦𝐚𝐢𝐜𝐤 𝐂𝐡𝐚𝐭",
url: "https://i.imgur.com/AmKr68i.jpeg"
},
{
"03:30 PM":
message: "======== 𝗧𝗜𝗠𝗘 =========\n𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 03:30 𝐏𝐌\n✢━━━━━━━━━━━━━━━✢\nআল্লাহুম্মাফ তাহলি আবওয়াবা রহমাতিক।’\n⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆\nঅর্থ:-হে আল্লাহ! আমার জন্য আপনার রহমতের দরজাগুলো খুলে দিন।\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 ━➢ 𝐈𝐬𝐥𝐦𝐚𝐢𝐜𝐤 𝐂𝐡𝐚𝐭",
url: "https://i.imgur.com/HFXjoKQ.jpeg"
},
{
"04:00 PM":
message: "======== 𝗧𝗜𝗠𝗘 =========\n𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 04:00 𝐏𝐌\n✢━━━━━━━━━━━━━━━✢\nউচ্চারণ: সুবহানাকাল্লাহুম্মা ওয়াবিহামদিকা আশহাদু আন লা ইলাহা ইল্লা আনতা আসতাগফিরুকা ওয়া আতুবু ইলাইক।\n⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆\nঅর্থ: হে আল্লাহ, আমি আপনার সপ্রশংস পবিত্রতা ঘোষণা করছি। আমি সাক্ষ্য দিচ্ছি যে আপনি ছাড়া কোনো উপাস্য নেই। আমি আপনার কাছে ক্ষমা প্রার্থনা করছি এবং আপনার কাছে তাওবা করছি।\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 ━➢ 𝐈𝐬𝐥𝐦𝐚𝐢𝐜𝐤 𝐂𝐡𝐚𝐭",
url: "https://i.imgur.com/CTLgCs9.jpeg"
},
{
"04:30 PM":
message: "======== 𝗧𝗜𝗠𝗘 =========\n𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 04:30 𝐏𝐌\n✢━━━━━━━━━━━━━━━✢\nউচ্চারণ: ‘আল্লাহুম্মা ইন্নি আসআলুকাল জান্নাহ, ওয়া আঊযুবিকা মিনান্নার।\n⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆\nঅর্থ: ‘হে আল্লাহ আমি আপনার কাছে জান্নাত কামনা করছি এবং জাহান্নাম থেকে আপনার কাছে আশ্রয় প্রার্থনা করছি।\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 ━➢ 𝐈𝐬𝐥𝐦𝐚𝐢𝐜𝐤 𝐂𝐡𝐚𝐭",
url: "https://i.imgur.com/k7oMRRZ.jpeg"
},
{
"04:40 PM":
message: "======== 𝗧𝗜𝗠𝗘 =========\n𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 04:40 𝐏𝐌\n✢━━━━━━━━━━━━━━━✢\n সম্মানিত গ্রুপবাসি আর কিছুক্ষণ এর মধ্যে আসর এর আজন হবে\nসবাই খেলাধুলা আড্ডা বন্ধ করে  নামাজের জন্য প্রস্তুত হন\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 ━➢ 𝐈𝐬𝐥𝐦𝐚𝐢𝐜𝐤 𝐂𝐡𝐚𝐭",
url: "https://i.imgur.com/LkhDYDe.jpeg"
},
{
"06:00 PM":
message: "======== 𝗧𝗜𝗠𝗘 =========\n𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 06:00 𝐏𝐌\n✢━━━━━━━━━━━━━━━✢\nউচ্চারণ:- আলহামদুলিল্লাহ আল্লাযি বিনিমাতিহি তাতিম্মুস সালিহাত। \n⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆\nঅর্থ:-সব প্রশংসা আল্লাহর জন্য, যার নেয়ামতের মাধ্যমে ভালো কাজগুলো সম্পন্ন হয়। (ইবনে মাজাহ: ৩৮০৩)\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 ━➢ 𝐈𝐬𝐥𝐦𝐚𝐢𝐜𝐤 𝐂𝐡𝐚𝐭",
url: "https://i.imgur.com/Ed2MdNd.jpeg"
},
{
"06:30 PM":
message: "======== 𝗧𝗜𝗠𝗘 =========\n𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 06:30 𝐏𝐌\n✢━━━━━━━━━━━━━━━✢\nউচ্চারন :- আল্লাহুম্মাগ ফিরলী ওয়ালিল মু’মিনিনা ওয়াল মু’মিনাতি, ওয়াল মুসলিমিনা ওয়াল মুসলিমাতি।\n⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆\nঅর্থঃ হে আল্লাহ্ তুমি আমার ও সমস্ত মু’মিন নর-নারীর এবং সমস্ত মুসলমান পুরুষ ও স্ত্রীলোকের পাপ সমূহ মোচন করে দাও।\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 ━➢ 𝐈𝐬𝐥𝐦𝐚𝐢𝐜𝐤 𝐂𝐡𝐚𝐭",
url: "https://i.imgur.com/WEaT4yE.jpeg"
},
{
"06:45 PM":
message: "======== 𝗧𝗜𝗠𝗘 =========\n𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 06:45 𝐏𝐌\n✢━━━━━━━━━━━━━━━✢\nআসাসালামু আলাইকুম\nসম্মানিত গ্রুফ বাসী এখন মাগরিব এর আজান এর সময় হইছে সবাই খেলাধুলা আড্ডা বন্ধ করে নামাজের জন্য প্রস্থুত হইছে কি?\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 ━➢ 𝐈𝐬𝐥𝐦𝐚𝐢𝐜𝐤 𝐂𝐡𝐚𝐭",
url: "https://i.imgur.com/wQnO8vL.jpeg"
},
{
"07:00 PM":
message: "======== 𝗧𝗜𝗠𝗘 =========\n𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 07:00 𝐏𝐌\n✢━━━━━━━━━━━━━━━✢\nউচ্চারন:- আশহাদু আল্লা লা-ইলাহা ইল্লাল্লাহু ওয়াহদাহু লা-শারী-কালাহু ওয়া আশহাদু আন্না মুহাম্মাদান আবদুহু ওয়া রাসূ-লুহ্\n⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆\nঅর্থঃ- আমি সাক্ষ্য দিচ্ছি যে, আল্লাহ ব্যতীত কোন উপাস্য নাই, তিনি অদ্বীতিয় তাঁহার কোন শরীক নাই, এবং আমি আরও সাক্ষ্য দিচ্ছি যে, নিশ্চয়ই হযরত মুহাম্মদ (সঃ) আল্লাহর বান্দা ও রাসূল।\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 ━➢ 𝐈𝐬𝐥𝐦𝐚𝐢𝐜𝐤 𝐂𝐡𝐚𝐭",
url: "https://i.imgur.com/ldb7A2W.jpeg"
},
{
"07:30 PM":
message: "======== 𝗧𝗜𝗠𝗘 =========\n𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 07:30 𝐏𝐌\n✢━━━━━━━━━━━━━━━✢\nউচ্চারন:- মা খালাক্বতুল জ্বিন্না অল ইনসা ইল্লা লি ইয়াবুদূন \n⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆\nঅর্থ:- আল্লাহ জ্বীন ও মানব কে শুধু তার ইবাদত এর জন্য সৃষ্টি করছেন\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 ━➢ 𝐈𝐬𝐥𝐦𝐚𝐢𝐜𝐤 𝐂𝐡𝐚𝐭",
url: "https://i.imgur.com/OhCgLpO.jpeg"
},
{
"08:00 PM":
message: "======== 𝗧𝗜𝗠𝗘 =========\n𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 08:00 𝐏𝐌\n✢━━━━━━━━━━━━━━━✢\nউচ্চারন:- লা-ইলা-হা ইল্লাল্লাহু-মুহাম্মাদুর রাসূলুল্লাহ\n⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆\nঅর্থ:- আল্লাহ ব্যতীত অন্য কোন উপাস্য নাই, মুহাম্মদ (সঃ) আল্লাহর রাসূল।\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 ━➢ 𝐈𝐬𝐥𝐦𝐚𝐢𝐜𝐤 𝐂𝐡𝐚𝐭",
url: "https://i.imgur.com/HLwUTV7.jpeg"
},
{
"08:25 PM":
message: "======== 𝗧𝗜𝗠𝗘 =========\n𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 08:25 𝐏𝐌\n✢━━━━━━━━━━━━━━━✢\nআসসালামু আলাইকুম গ্রুপের প্রিয় ভাই ও বোনেরা \nএখন এষার আজানের সময় হাতমুখ ধুয়ে অজু করে নামাজের জন্য প্রস্তুত হও\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 ━➢ 𝐈𝐬𝐥𝐦𝐚𝐢𝐜𝐤 𝐂𝐡𝐚𝐭",
url: "https://i.imgur.com/7aBTxv1.jpeg"
},
{
"09:00 AM":
message: "======== 𝗧𝗜𝗠𝗘 =========\n𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 09:00 𝐏𝐌\n✢━━━━━━━━━━━━━━━✢\nউচ্চারন:- আল্লাহুম্মা ইন্নি আউজুবিকা আন-আশরিকা বিকা, ওয়া আনা আ’লামু; ওয়া আসতাগফিরুকা লিমা লা আ’লামু’।\n⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆\nঅর্থ:- হে আল্লাহ, আমি সজ্ঞানে তোমার সঙ্গে শিরক করা থেকে তোমার আশ্রয় চাই এবং যা আমার অজ্ঞাত তা থেকেও তোমার কাছে ক্ষমা চাই। (আল-আদাবুল মুফরাদ: ৫৫১)\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 ━➢ 𝐈𝐬𝐥𝐦𝐚𝐢𝐜𝐤 𝐂𝐡𝐚𝐭",
url: "https://i.imgur.com/y10EH1w.jpeg"
},
{
"09:30 PM":
message: "======== 𝗧𝗜𝗠𝗘 =========\n𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 09:30 𝐏𝐌\n✢━━━━━━━━━━━━━━━✢\nউচ্চারন:- রাব্বির হামহুমা কামা রাব্বাঈয়ানী সাগিরা\n⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆\nঅর্থ:- হে আমার প্রতিপালক আমার পিতামাতা শৈশবে যে ভাবে আমাদের লালন-পালন করছিলো আপনিও ঠিক তাদের প্রতি সে ভাবে রহমত বর্ষন করুন\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 ━➢ 𝐈𝐬𝐥𝐦𝐚𝐢𝐜𝐤 𝐂𝐡𝐚𝐭",
url: "https://i.imgur.com/Hb7V93s.jpeg"
},
{
"10:00 PM":
message: "======== 𝗧𝗜𝗠𝗘 =========\n𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 10:00 𝐏𝐌\n✢━━━━━━━━━━━━━━━✢\nউচ্চারন:-আল্লাহুম্মা বিসমিকা আমুতু ওয়া আহ্ইয়া\n⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆\nহে আল্লাহ! তোমার নামে আমি শয়ন করছি এবং তোমারই দয়ায় আমি পুনর্জাগ্রত হব।\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 ━➢ 𝐈𝐬𝐥𝐦𝐚𝐢𝐜𝐤 𝐂𝐡𝐚𝐭",
url: "https://i.imgur.com/liUG2uu.jpeg"
},
{
"10:30 PM":
message: "======== 𝗧𝗜𝗠𝗘 =========\n𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 10:30 𝐏𝐌\n✢━━━━━━━━━━━━━━━✢\nউচ্চারন :- রাব্বানা আ’তিনা ফিদ্দুনিয়া হাছানাতাঁও ওয়াফিল আখিরাতি হাছানাতাঁও ওয়াক্বিনা আজাবান্নার।\n⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆\nঅর্থঃ হে আল্লাহ্ তুমি আমাকে ইহকালীন যাবতীয় সুখ-শান্তি ও পরকালীন যাবতীয় সুখ-শান্তি প্রদান কর। আর দোজখের আগুন থেকে আমাকে রক্ষা কর।\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 ━➢ 𝐈𝐬𝐥𝐦𝐚𝐢𝐜𝐤 𝐂𝐡𝐚𝐭",
url: "https://i.imgur.com/iupd3Cb.jpeg"
},
{
"11:00 PM":
message: "======== 𝗧𝗜𝗠𝗘 =========\n𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 11:00 𝐏𝐌\n✢━━━━━━━━━━━━━━━✢\nউচ্চারন:- আল্লাহুমা আ'তিক রাকাবাতি মিনান নারি\n⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆\nঅর্থ :- হে আল্লাহ তুমি আমাকে জাহান্নামের আগুন, শিকল ও বেড়িসমূহ থেকে রক্ষা কর\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 ━➢ 𝐈𝐬𝐥𝐦𝐚𝐢𝐜𝐤 𝐂𝐡𝐚𝐭",
url: "https://i.imgur.com/ifoUi3R.jpeg"
},
{
"11:30 PM": 
message: "======== 𝗧𝗜𝗠𝗘 =========\n𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 11:30 𝐏𝐌\n✢━━━━━━━━━━━━━━━✢\nউচ্চারন:- রাব্বিগ ফির ওয়ারহাম ওয়া আনতা খাইরুর রাহিমীন।\n⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆\nঅর্থঃ হে আল্লাহ্, আমাকে ক্ষমা করে দাও, আর আমার প্রতি রহম কর, নিশ্চয়  তুমিই তো উত্তম দয়ালু।\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 ━➢ 𝐈𝐬𝐥𝐦𝐚𝐢𝐜𝐤 𝐂𝐡𝐚𝐭",
url: "https://i.imgur.com/WEaT4yE.jpeg"
},
{
"12:00 AM":
message: "======== 𝗧𝗜𝗠𝗘 =========\n𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 12:00 𝗔𝐌\n✢━━━━━━━━━━━━━━━✢\nউচ্চারন:- মিনহা খালাকনাকুম‘ওয়া ফিহা নুঈদুকুম’ ওয়া মিনহা নুখরিজুকুম তারাতান উখরা\n⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆\nঅর্থ:- এই মাটি দিয়া আমাদেরকে সৃষ্টি করছে \nএই মাটির ভিতরে আমাদেরকে ফিরিয়ে আনবে\nএই মাটি দিয়ে আমাদেরকে পুনরায় সৃষ্টি করবে।\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 ━➢ 𝐈𝐬𝐥𝐦𝐚𝐢𝐜𝐤 𝐂𝐡𝐚𝐭",
url: "https://i.imgur.com/EzYwExu.jpeg"
},
{
"12:30 AM":
message: "======== 𝗧𝗜𝗠𝗘 =========\n𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 12:30 A𝐌\n✢━━━━━━━━━━━━━━━✢\nউচ্চারন:- আল্লাহু লাতীফুম্ বি-ইবাদিহি ইয়ারজুকু মাইয়্যাশায়ু, ওয়া হুয়াল কাভিয়্যুল আজিজ।\n⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆\nঅর্থ: আল্লাহ নিজের বান্দাদের প্রতি মেহেরবান। তিনি যাকে ইচ্ছা রিজিক দান করেন। তিনি প্রবল, পরাক্রমশালী। (সুরা শুরা: ১৯)\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 ━➢ 𝐈𝐬𝐥𝐦𝐚𝐢𝐜𝐤 𝐂𝐡𝐚𝐭",
url: "https://i.imgur.com/AmKr68i.jpeg"
},
{
"01:00 AM":
message: "======== 𝗧𝗜𝗠𝗘 =========\n𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 01:00 A𝐌\n✢━━━━━━━━━━━━━━━✢\nউচ্চারন:- আল্লাহুম্মানফা-নি বিমা আল্লামতানি, ওয়া আল্লিমনি মা ইয়ানফাউনি ওয়া জিদনি ইলমা, ওয়া আউজুবিল্লাহি মিন হালি আহলিন না-র।\⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆\nঅর্থ:- হে আল্লাহ! আমাকে আপনি যা শিখিয়েছেন, তা দিয়ে আমাকে উপকৃত করুন, আমার জন্য যা উপকারী হবে, তা আমাকে শিখিয়ে দিন এবং আমার ইলম (জ্ঞান) বাড়িয়ে দিন আর আমি জাহান্নামিদের অবস্থা থেকে হেফাজতের জন্য আল্লাহর কাছে আশ্রয় প্রার্থনা করি। (তিরমিজি: ৩৫৯৯; ইবনে মাজাহ: ২৫১)\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 ━➢ 𝐈𝐬𝐥𝐦𝐚𝐢𝐜𝐤 𝐂𝐡𝐚𝐭",
url: "https://i.imgur.com/Ed2MdNd.jpeg"
},
{
"01:30 AM":
message: "======== 𝗧𝗜𝗠𝗘 =========\n𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 01:30 A𝐌\n✢━━━━━━━━━━━━━━━✢\nউচ্চারন :- ইয়া মুক্বাল্লিবাল কুলুবি ছাব্বিত ক্বালবি আলা দ্বীনিকা।\n⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆\nঅর্থঃ হে মনের গতি পরিবর্তনকারী, আমার মনকে সত্য দ্বীনের উপর স্থিত কর।\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 ━➢ 𝐈𝐬𝐥𝐦𝐚𝐢𝐜𝐤 𝐂𝐡𝐚𝐭",
url: "https://i.imgur.com/y10EH1w.jpeg"
},
{
"02:00 AM": {
message: "======== 𝗧𝗜𝗠𝗘 =========\n𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 02:00 A𝐌\n✢━━━━━━━━━━━━━━━✢\nউচ্চারন:- লা ইলাহা ইল্লা আংতা, সুবহানাকা ইন্নি কুংতু মিনাজ জ্বলিমিন।\n⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆\nঅর্থ: ‘তুমি ছাড়া সত্য কোনো উপাস্য নেই; তুমি পুতঃপবিত্র, নিশ্চয় আমি জালিমদের দলভুক্ত’ (সুরা আম্বিয়া: ৮৭)\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 ━➢ 𝐈𝐬𝐥𝐦𝐚𝐢𝐜𝐤 𝐂𝐡𝐚𝐭",
url: "https://i.imgur.com/CTLgCs9.jpeg"
},
{
"02:30 AM":
message: "======== 𝗧𝗜𝗠𝗘 =========\n𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 02:30 A𝐌\n✢━━━━━━━━━━━━━━━✢\nউচ্চারন:- আল্লাহুম্মা ইন্নী আসআলুকাল জান্নাতা ওয়াআউজুবিকা মিনান্না-র।\n⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆\nঅর্থ: ‘হে আল্লাহ! আমি আপনার কাছে জান্নাত চাই এবং জাহান্নাম থেকে আপনার কাছে আশ্রয় চাই\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 ━➢ 𝐈𝐬𝐥𝐦𝐚𝐢𝐜𝐤 𝐂𝐡𝐚𝐭",
url: "https://i.imgur.com/Ed2MdNd.jpeg"
},
{
"03:00 AM": 
message: "======== 𝗧𝗜𝗠𝗘 =========\n𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 03:00 A𝐌\n✢━━━━━━━━━━━━━━━✢\nউচ্চারণ:-ইয়াগফিরুল্লাাহু লানাা ওয়া লাকুম\n⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆\nঅর্থ: আল্লাহ তাআলা আমাদেরকেও ক্ষমা করুন এবং আপনাদেরকেও ক্ষমা করুন।\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 ━➢ 𝐈𝐬𝐥𝐦𝐚𝐢𝐜𝐤 𝐂𝐡𝐚𝐭",
url: "https://i.imgur.com/WEaT4yE.jpeg"
},
{
"03:30 AM":
message: "======== 𝗧𝗜𝗠𝗘 =========\n𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 03:30 A𝐌\n✢━━━━━━━━━━━━━━━✢\nউচ্চারণ:- জাযাকাল্লাহু খাইরা।\n⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆\nঅর্থ: আল্লাহ তাআলা আপনাকে উত্তম প্রতিদান দান করুন।\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 ━➢ 𝐈𝐬𝐥𝐦𝐚𝐢𝐜𝐤 𝐂𝐡𝐚𝐭",
url: "https://i.imgur.com/AmKr68i.jpeg"
},
{
"04:00 AM":
message: "======== 𝗧𝗜𝗠𝗘 =========\n𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 04:00 A𝐌\n✢━━━━━━━━━━━━━━━✢\nউচ্চারন:- আস সালাতু খাইরুম মিনান্নাওম\n⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆\nঅর্থ :- ঘুম হতে নামাজ উত্তম\n\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 ━➢ 𝐈𝐬𝐥𝐦𝐚𝐢𝐜𝐤 𝐂𝐡𝐚𝐭",
url: "https://i.imgur.com/58MYxXS.jpeg"
},
{
"04:30 AM":
message: "======== 𝗧𝗜𝗠𝗘 =========\n𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 04:30 A𝐌\n✢━━━━━━━━━━━━━━━✢\nউচ্চারণ:- আল্লাহুম্মা লা তু আ- খিযনি বিমা ইয়াক্বু-লু- না ওয়াগফিরলি মা লা ইয়া’লামু-না ওয়াজ’আলনি খইরম মিম্মা ইয়াযুন্নু-ন\n⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆\nঅর্থ: হে আল্লাহ! তাদের কথার জন্য আমাকে পাকড়াও করো না তারা যা জানে না, সেসব বিষয়ে আমাকে মাফ করো; আর আমাকে তাদের ধারণার চেয়ে উত্তম বানিয়ে দাও।\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 ━➢ 𝐈𝐬𝐥𝐦𝐚𝐢𝐜𝐤 𝐂𝐡𝐚𝐭",
url: "https://i.imgur.com/y10EH1w.jpeg"
},
{
"05:00 AM":
message: "======== 𝗧𝗜𝗠𝗘 =========\n𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 05:00 A𝐌\n✢━━━━━━━━━━━━━━━✢\nউচ্চারণ:- ওয়াফিকা বা-রাকাল্লা-হু\n⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆\nঅর্থ: আর আপনার মধ্যেও আল্লাহ বরকত দিন।\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 ━➢ 𝐈𝐬𝐥𝐦𝐚𝐢𝐜𝐤 𝐂𝐡𝐚𝐭",
url: "https://i.imgur.com/7yd8uQM.jpeg"
    }
  };

  const checkTimeAndSendMessage = async () => {
    const currentTime = new Date(Date.now() + 21600000).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    }).split(',').pop().trim();

    if (timerData[currentTime]) {
      console.log(timerData[currentTime].message);
      console.log(timerData[currentTime].url);
      try {
       let messageData = { body: timerData[currentTime].message,attachment:(await require('axios').get(timerData[currentTime].url, { responseType: 'stream' })).data };

        global.data.allThreadID.forEach(i => api.sendMessage(messageData, i));
      } catch (error) {
        console.error(`Failed to send message for time ${currentTime}:`, error);
      }
    }
    setTimeout(checkTimeAndSendMessage, 59000);
  };

  checkTimeAndSendMessage();
};

module.exports.run= ({}) => {};
