export const colors = [
  { name: 'אדום', range: 'ציון 7.5 ומעלה', class: 'red' },
  { name: 'כתום', range: 'ציון בין 6 ל - 7.5', class: 'orange' },
  { name: 'צהוב', range: 'ציון בין 4.5 ל - 6', class: 'yellow' },
  { name: 'ירוק', range: 'ציון עד 4.5', class: 'green' }
];
export const options: any[] = [{ label: 'עד עכשיו', value: 750 },
{ label: 'שנה', value: 365 },
{ label: 'חצי שנה', value: 180 },
{ label: '3 חודשים', value: 90 },
{ label: 'חודש אחרון', value: 30 }];


export const data: any[] = [
  { label: 'עד עכשיו', value: 750 },
  { label: 'שנה', value: 365 },
  { label: 'חצי שנה', value: 180 },
  { label: '3 חודשים', value: 90 },
  { label: 'חודש אחרון', value: 30 },

];
export const clickCounterObj:any={
  'id':0,
  'name':0,
  'age':0,
  'email':0,
  'phone':0,
  'address':0,
}
export const emphasisStyle = {
  itemStyle: {
    shadowBlur: 0.5,
    shadowColor: 'rgba(0,0,0,0.3)'
  }
};
export const tableData1 = [
  { id: 34, name: '10%', age: '24%', email: 7.2, phone: 7.6, address: 'אילת' },
  { id: 63, name: '30%', age: '24%', email: 4.2, phone: 2.2, address: 'מודיעין' },
  { id: 257, name: '0%', age: '30%', email: 2.2, phone: 5.2, address: 'ירושלים' },
  { id: 29, name: '20%', age: '24%', email: 4.2, phone: 4.2, address: 'תל אביב' },
];
export const tableData2 = [
  {
    address: 2,
    phone: "אין מידע",
    email:"72.69%",
    age: "84.76%",
    name: "מעל 90%",
    id: "אלון שבות"

  },
  {
    address: 3.1,
    phone: "אין מידע",
    email: "72.69%",
    age: "89.81%",
    name: "מעל 90%",
    id: "הר אדר"


  },
  {
    address: 2,
    phone: "אין מידע",
    email: "72.69%",
    age: "85.76%",
    name: "מעל 90%",
    id: "חשמונאים"



  },
  {

    address: 4.2,
    phone: "אין מידע",
    email: "72.69%",
    age: "86.31%",
    name: "מעל 90%",
    id: "מזכרת בתיה"


  }
];


export const sideNavData = [
  {    options: [' ', 'עולמות תוכן נוספים בקרוב', 'קורונה'],
    title: 'עולמות התוכן',
    id: 'firstDiv'
  },
  {
    options: ['Data_Gov', 'GIS', 'DATA -הי'],
    title: 'עולם הדאטא',
    id: 'secondDiv'
  },
  {
    options: ['אודות', 'תנאי שימוש', 'מדריך למשתמש'],
    title: 'על הדשבורד',
    id: 'thirdDiv'
  }
];
export const  links4 = [
  {
    pictureClass: 'blueIsrael',
    link: 'experience.arcgis.com',
    title: 'התחסנות לקורונה',
    description: 'נתוני אוכלוסיית מחוסנים בתוקף, לפי יישובים'
  },
  {
    pictureClass: 'littlePurpleIsrael',
    link: 'experience.arcgis.com',
    title: 'מוקדי התחסנות',
    description: 'מפת מוקדי ההתחסנות נגד נגיף הקורונה, כולל נתונים אודות שעות פתיחה וניווט'
  },
  {
    pictureClass: 'exelPic',
    link: 'data.gov.il',
    title: 'טבלת גילאי המתחסנים',
    description: 'מספר המתחסנים במנה הראשונה והשנייה לפי גילאים'
  }
];
export const  links3 = [
  {
    pictureClass: 'purpleIsrael',
    link: 'health.gov.il',
    title: 'בדיקות מהירות',
    description: 'מפת בדיקות מהירות לקורונה, כולל נתונים אודות שעות פתיחה וניווט'
  },
  {
    pictureClass: 'orangeIsrael',
    link: 'ourworldindata.org',
    title: 'בדיקות יומיות בעולם',
    description: 'תמונת מצב אודות בדיקות יומיות, במדינות העולם'
  },
  {
    pictureClass: 'labPic',
    link: 'health.gov.il',
    title: 'סוגי בדיקות',
    description: 'מרכז '}
  ];
export const linksData2 = [
  {
    pictureClass: 'greenEarth',
    link: 'experience.arcgis.com',
    title: 'תעופה בזמן קורונה',
    description: 'רמזור מדינות העולם לפי רמת סיכון'
  },
  {
    pictureClass: 'orangeEarth',
    link: 'ourworldindata.org',
    title: 'מאומתים לפי מדינות העולם',
    description: 'תמונת מצב בעולם, מספר מאומתים יומי לפי מדינות'
  },
  {
    pictureClass: 'blueEarth',
    link: 'experience.arcgis.com',
    title: 'נתוני תחלואה בעולם Who',
    description: 'תמונת מצב בעולם מוצגת ע&quot;י ארגון הבריאות העולמי'
  }
];

export const linksData = [
  {
    pictureClass: 'littlePurpleIsrael',
    link: 'maps.arcgis.com',
    title: 'מבודדים לפי רשות מקומית וגיל',
    description: 'תמונת מצב אודות נתוני בידודים פעילים, לפי רשות מקומית וגיל'
  },
  {
    pictureClass: 'exelPic',
    link: 'data.gov.il',
    title: 'נתוני מבודדים',
    description: 'נתונים אודות בדודים פעילים'
  },
  {
    pictureClass: 'exelPic',
    link: 'health.gov.il',
    title: 'נתוני קורונה לפי אזורים',
    description: 'נתוני הלמ״ס לפי אזורים'
  }
];
export const linksListData = [
  {
    pictureClass: 'greenIsrael',
    link: 'experience.arcgis.com',
    title: 'מפת מדדי רמזור',
    description: 'מדדי תחלואה וציוני רמזור, בחלוקה לפי יישובים ורובעים'
  },
  {
    pictureClass: 'littlePurpleIsrael',
    link: 'maps.arcgis.com',
    title: 'רובעי רמזור',
    description: 'תמונת מצב מובחנת אודות האוכלוסיה, בתוך תשעת היישובים הגדולים בארץ, רובעי רמזור'
  },
  {
    pictureClass: 'turkizIsrael',
    link: 'experience.arcgis.com',
    title: 'נתוני תחלואה לפי יישוב',
    description: 'תמונת מצב לפי יישוב בקטגוריות- חולים פעילים, מבודדים, מאושפזים, נפטרים ומחוסנים בתוקף'
  }
];





export const ranges: any = [
  [0, 39, 'מבט על','overview'],
  [40, 440, 'מדדים מרכזיים'],
  [441, 893, 'מדדי תחלואה כללית'],
  [894, 1659, 'תחלואה ואשפוזי ילדים'],
  [1660, 2459, 'תחלואה מחול'],
  [2460, 2940, 'חולים קשה ומאושפזים'],
  [2941, 3340, 'נפטרים'],
  [3341, 4550, 'בדיקות'],
  [4551, 5384, 'תחקורים נוספים'],
  [5385, 5792, 'תחלואה חוזרת ומחלימים'],
  [5793, 7014, 'התחסנות האוכלוסיה'],
  [7015, 7839, 'רמזור בישובים']
];

