// alert('cocoa');

const POTUS_DATA = {
    "P1" : {
        "name": "George Washigton",
        "presidency": "April 30, 1789 / March 4, 1797",
        "number": "1",
        "party": "Unafiliated to any Party", 
        "urlPic": "assets/presidents/1-GeorgeWashington.webp",
        "urlWiki": "https://en.wikipedia.org/wiki/George_Washington",
        "quote": "The basis of our political systems is the right of the people to make and to alter their constitutions of government."
    },
    "P2": {
        "name": "John Adams",
        "presidency": "March 4, 1797 / March 4, 1801",
        "number": "2",
        "party": "Federalist", 
        "urlPic": "assets/presidents/2-JohnAdams.webp",
        "urlWiki": "https://en.wikipedia.org/wiki/John_Adams",
        "quote": "Liberty, according to my metaphysics is a self-determining power in an intellectual agent. It implies thought and choice and power."
    },
    "P3": {
        "name": "Thomas Jefferson",
        "presidency": "March 4, 1801 / March 4, 1809",
        "number": "3",
        "party": "Democratic-Republican",
        "urlPic": "assets/presidents/3-ThomasJefferson.webp",
        "urlWiki": "https://en.wikipedia.org/wiki/Thomas_Jefferson",
        "quote": "…some honest men fear that a republican government can not be strong, that this Government is not strong enough"
    },
    "P4": {
        "name": "James Madison",
        "presidency": "March 4, 1809 / March 4, 1817",
        "number": "4",
        "party": "Democratic-Republican",
        "urlPic": "assets/presidents/4-JamesMadison.jpg",
        "urlWiki": "https://en.wikipedia.org/wiki/James_Madison",
        "quote": "If men were angels, no government would be necessary. If angels were to govern men, neither external nor internal controls on government would be…"
    },
    "P5": {
        "name": "James Monroe",
        "presidency": "March 4, 1817 / March 4, 1825",
        "number": "5",
        "party": "Democratic-Republican",
        "urlPic": "assets/presidents/5-JamesMonroe.webp",
        "urlWiki": "https://en.wikipedia.org/wiki/James_Monroe",
        "quote": "To what, then, do we owe these blessings? It is known to all that we derive them from the excellence of our institutions."
    },
    "P6": {
        "name": "John Quincy Adams",
        "presidency": "March 4, 1825 / March 4, 1829",
        "number": "6",
        "party": "Democratic-Republican",
        "urlPic": "assets/presidents/6-JohnQuincyAdams.jpg",
        "urlWiki": "https://en.wikipedia.org/wiki/John_Quincy_Adams",
        "quote": "Union, justice, tranquillity, the common defense, the general welfare, and the blessings of liberty—all have been promoted by the Government under…"
    },
    "P7": {
        "name": "Andrew Jackson",
        "presidency": "March 4, 1829 / March 4, 1837",
        "number": "7",
        "party": "Democratic",
        "urlPic": "assets/presidents/7-AndrewJackson.webp",
        "urlWiki": "https://en.wikipedia.org/wiki/Andrew_Jackson",
        "quote": "But you must remember, my fellow-citizens, eternal vigilance by the people is the price of liberty, and that you must pay the price if you wish to…"
    },
    "P8": {
        "name": "Martin Van Buren",
        "presidency": "March 4, 1837 / March 4, 1841",
        "number": "8",
        "party": "Democratic",
        "urlPic": "assets/presidents/8-MartinVanBuren.jpg",
        "urlWiki": "https://en.wikipedia.org/wiki/Martin_Van_Buren",
        "quote": "...in all the attributes of a great, happy, and flourishing people we stand without a parallel in the world."
    },
    "P9": {
        "name": "William Henry Harrison",
        "presidency": "March 4, 1841 / April 4, 1841",
        "number": "9",
        "party": "Whig",
        "urlPic": "assets/presidents/9-WilliamHenryHarrison.jpg",
        "urlWiki": "https://en.wikipedia.org/wiki/William_Henry_Harrison",
        "quote": "I too well understand the dangerous temptations to which I shall be exposed from the magnitude of the power which it has been the pleasure of the…"
    },
    "P10": {
        "name": "John Tyler",
        "presidency": "April 4, 1841 / March 4, 1845",
        "number": "10",
        "party": "Whig",
        "urlPic": "assets/presidents/10-JohnTyler.jpg",
        "urlWiki": "https://en.wikipedia.org/wiki/John_Tyler",
        "quote": "Wealth can only be accumulated by the earnings of industry and the savings of frugality..."
    },
    "P11": {
        "name": "James K. Polk",
        "presidency": "March 4, 1845 / March 4, 1849",
        "number": "11",
        "party": "Democratic",
        "urlPic": "assets/presidents/11-JamesKPolk.webp",
        "urlWiki": "https://en.wikipedia.org/wiki/James_K._Polk",
        "quote": "Mexico has passed the boundary of the United States, has invaded our territory and shed American blood upon the American soil."
    },
    "P12": {
        "name": "Zachary Taylor",
        "presidency": "March 4, 1849 / July 9, 1850",
        "number": "12",
        "party": "Whig",
        "urlPic": "assets/presidents/12-ZacharyTaylor.jpg",
        "urlWiki": "https://en.wikipedia.org/wiki/Zachary_Taylor",
        "quote": "...I shall make honesty, capacity, and fidelity indispensable prerequisites to the bestowal of office.."
    },
    "P13": {
        "name": "Millard Fillmore",
        "presidency": "July 9, 1850 / March 4, 1853",
        "number": "13",
        "party": "Whig",
        "urlPic": "assets/presidents/13-MillardFillmore.webp",
        "urlWiki": "https://en.wikipedia.org/wiki/Millard_Fillmore",
        "quote": "The great law of morality ought to have a national as well as a personal and individual application."
    },
    "P14": {
        "name": "Franklin Pierce",
        "presidency": "March 4, 1853 / March 4, 1857",
        "number": "14",
        "party": "Democratic",
        "urlPic": "assets/presidents/14-FranklinPierce.jpg",
        "urlWiki": "https://en.wikipedia.org/wiki/Franklin_Pierce",
        "quote": "The storm of frenzy and faction must inevitably dash itself in vain against the unshaken rock of the Constitution."
    },
    "P15": {
        "name": "James Buchanan",
        "presidency": "March 4, 1857 / March 4, 1861",
        "number": "15",
        "party": "Democratic",
        "urlPic": "assets/presidents/15-JamesBuchanan.webp",
        "urlWiki": "https://en.wikipedia.org/wiki/James_Buchanan",
        "quote": "Next in importance to the maintenance of the Constitution and the Union is the duty of preserving the Government free from the taint or even the…"
    },
    "P16": {
        "name": "Abraham Lincoln",
        "presidency": "March 4, 1861 / April 15, 1865",
        "number": "16",
        "party": "Republican & National Union",
        "urlPic": "assets/presidents/16-AbrahamLincoln.webp",
        "urlWiki": "https://en.wikipedia.org/wiki/Abraham_Lincoln",
        "quote": "With malice toward none, with charity for all, with firmness in the right as God gives us to see the right, let us strive on to finish the work we…"
    },
    "P17": {
        "name": "Andrew Johnson",
        "presidency": "April 15, 1865 / March 4, 1869",
        "number": "17",
        "party": "National Union",
        "urlPic": "assets/presidents/17-AndrewJohnson.webp",
        "urlWiki": "https://en.wikipedia.org/wiki/Andrew_Johnson",
        "quote": "Legislation can neither be wise nor just which seeks the welfare of a single interest at the expense and to the injury of many... "
    },
    "P18": {
        "name": "Ulysses S. Grant",
        "presidency": "March 4, 1869 / March 4, 1877",
        "number": "18",
        "party": "Republican",
        "urlPic": "assets/presidents/18-UlyssesSGrant.jpg",
        "urlWiki": "https://en.wikipedia.org/wiki/Ulysses_S._Grant",
        "quote": "It was my fortune, or misfortune, to be called to the office of Chief Executive without any previous political training."
    },
    "P19": {
        "name": "Rutherford B. Hayes",
        "presidency": "March 4, 1877 / March 4, 1881",
        "number": "19",
        "party": "Republican",
        "urlPic": "assets/presidents/19-RutherfordBHayes.webp",
        "urlWiki": "https://en.wikipedia.org/wiki/Rutherford_B._Hayes",
        "quote": "It is the desire of the good people of the whole country that sectionalism as a factor in our politics should disappear."
    },
    "P20": {
        "name": "James A. Garfield",
        "presidency": "March 4, 1881 / September 19, 1881",
        "number": "20",
        "party": "Republican",
        "urlPic": "assets/presidents/20-JamesAGarfield.webp",
        "urlWiki": "https://en.wikipedia.org/wiki/James_A._Garfield",
        "quote": "There can be no permanent disfranchised peasantry in the United States."
    },
    "P21": {
        "name": "Chester A. Arthur",
        "presidency": "September 19, 1881 / March 4, 1885",
        "number": "21",
        "party": "Republican",
        "urlPic": "assets/presidents/21-ChesterAArthur.webp",
        "urlWiki": "https://en.wikipedia.org/wiki/Chester_A._Arthur",
        "quote": "Experience has shown that the trade of the East is the key to national wealth and influence."
    },
    "P22": {
        "name": "Grover Cleveland",
        "presidency": "March 4, 1885 / March 4, 1889",
        "number": "22",
        "party": "Democratic",
        "urlPic": "assets/presidents/22+24-GroverCleveland.webp",
        "urlWiki": "https://en.wikipedia.org/wiki/Grover_Cleveland",
        "quote": "It is a plain dictate of honesty and good government that public expenditures should be limited by public necessity..."
    },
    "P23": {
        "name": "Benjamin Harrison",
        "presidency": "March 4, 1889 / March 4, 1893",
        "number": "23",
        "party": "Republican",
        "urlPic": "assets/presidents/23-BenjaminHarrison.webp",
        "urlWiki": "https://en.wikipedia.org/wiki/Benjamin_Harrison",
        "quote": "...opportunities offered to the individual to secure the comforts of life are better than are found elsewhere and largely better than they were here…"
    },
    "P24": {
        "name": "Grover Cleveland",
        "presidency": "March 4, 1893 / March 4, 1897",
        "number": "24",
        "party": "Democratic",
        "urlPic": "assets/presidents/22+24-GroverCleveland.webp",
        "urlWiki": "https://en.wikipedia.org/wiki/Grover_Cleveland",
        "quote": "It is a plain dictate of honesty and good government that public expenditures should be limited by public necessity..."
    },
    "P25": {
        "name": "William McKinley",
        "presidency": "March 4, 1897 / September 14, 1901",
        "number": "25",
        "party": "Republican",
        "urlPic": "assets/presidents/25-WilliamMcKinley.webp",
        "urlWiki": "https://en.wikipedia.org/wiki/William_McKinley",
        "quote": "War should never be entered upon until every agency of peace has failed; peace is preferable to war in almost every contingency."
    },
    "P26": {
        "name": "Theodore Roosevelt",
        "presidency": "September 14, 1901 / March 4, 1909",
        "number": "26",
        "party": "Republican",
        "urlPic": "assets/presidents/26-TheodoreRoosevelt.jpg",
        "urlWiki": "https://en.wikipedia.org/wiki/Theodore_Roosevelt",
        "quote": "...legislation will generally be both unwise and ineffective unless undertaken after calm inquiry and with sober self-restraint."
    },
    "P27": {
        "name": "William Howard Taft",
        "presidency": "March 4, 1909 / March 4, 1913",
        "number": "27",
        "party": "Republican",
        "urlPic": "assets/presidents/27-WilliamHowardTaft.webp",
        "urlWiki": "https://en.wikipedia.org/wiki/William_Howard_Taft",
        "quote": "Our international policy is always to promote peace."
    },
    "P28": {
        "name": "Woodrow Wilson",
        "presidency": "March 4, 1913 / March 4, 1921",
        "number": "28",
        "party": "Democratic",
        "urlPic": "assets/presidents/28-WoodrowWilson.jpg",
        "urlWiki": "https://en.wikipedia.org/wiki/Woodrow_Wilson",
        "quote": "The world must be made safe for democracy. Its peace must be planted upon the tested foundations of political liberty."
    },
    "P29": {
        "name": "Warren G. Harding",
        "presidency": "March 4, 1921 / August 2, 1923",
        "number": "29",
        "party": "Republican",
        "urlPic": "assets/presidents/29-WarrenGHarding.webp",
        "urlWiki": "https://en.wikipedia.org/wiki/Warren_G._Harding",
        "quote": "Our most dangerous tendency is to expect too much of government, and at the same time do for it too little."
    },
    "P30": {
        "name": "Calvin Coolidge",
        "presidency": "August 2, 1923 / March 4, 1929",
        "number": "30",
        "party": "Republican",
        "urlPic": "assets/presidents/30-CalvinCoolidge.webp",
        "urlWiki": "https://en.wikipedia.org/wiki/Calvin_Coolidge",
        "quote": "The fundamental precept of liberty is toleration."
    },
    "P31": {
        "name": "Herbert Hoover",
        "presidency": "March 4, 1929 / March 4, 1933",
        "number": "31",
        "party": "Republican",
        "urlPic": "assets/presidents/31-HerbertHoover.webp",
        "urlWiki": "https://en.wikipedia.org/wiki/Herbert_Hoover",
        "quote": "In the soil poisoned by speculation grew those ugly weeds of waste, exploitation, and abuse of financial power."
    },
    "P32": {
        "name": "Franklin D. Roosevelt",
        "presidency": "March 4, 1933 / April 12, 1945",
        "number": "32",
        "party": "Democratic",
        "urlPic": "assets/presidents/32-FranklinDRoosevelt.webp",
        "urlWiki": "https://en.wikipedia.org/wiki/Franklin_D._Roosevelt",
        "quote": "And the love of freedom is still fierce and steady in the nation today."
    },
    "P33": {
        "name": "Harry S. Truman",
        "presidency": "April 12, 1945 / January 20, 1953",
        "number": "33",
        "party": "Democratic",
        "urlPic": "assets/presidents/33-HarrySTruman.jpg",
        "urlWiki": "https://en.wikipedia.org/wiki/Harry_S._Truman",
        "quote": "No government is perfect. One of the chief virtues of a democracy, however, is that its defects are always visible..."
    },
    "P34": {
        "name": "Dwight D. Eisenhower",
        "presidency": "January 20, 1953 / January 20, 1961",
        "number": "35",
        "party": "Republican",
        "urlPic": "assets/presidents/34-DwightDEisenhower.webp",
        "urlWiki": "https://en.wikipedia.org/wiki/Dwight_D._Eisenhower",
        "quote": "A people that values its privileges above its principles soon loses both."
    },
    "P35": {
        "name": "John F. Kennedy",
        "presidency": "January 20, 1961 / November 22, 1963",
        "number": "35",
        "party": "Democratic",
        "urlPic": "assets/presidents/35-JohnFKennedy.jpg",
        "urlWiki": "https://en.wikipedia.org/wiki/John_F._Kennedy",
        "quote": "Let the word go forth from this time and place, to friend and foe alike, that the torch has been passed to a new generation of Americans..."
    },
    "P36": {
        "name": "Lyndon B. Johnson",
        "presidency": "November 22, 1963 / January 20, 1969",
        "number": "36",
        "party": "Democratic",
        "urlPic": "assets/presidents/36-LyndonBJohnson.jpg",
        "urlWiki": "https://en.wikipedia.org/wiki/Lyndon_B._Johnson",
        "quote": "We believe that all men have certain unalienable rights. Yet many Americans do not enjoy those rights."
    },
    "P37": {
        "name": "Richard Nixon",
        "presidency": "January 20, 1969 / August 9, 1974",
        "number": "37",
        "party": "Republican",
        "urlPic": "assets/presidents/37-RichardNixon.jpg",
        "urlWiki": "https://en.wikipedia.org/wiki/Richard_Nixon",
        "quote": "In any organization, the man at the top must bear the responsibility. That responsibility, therefore, belongs here, in this office. I accept it."
    },
    "P38": {
        "name": "Gerald Ford",
        "presidency": "August 9, 1974 / January 20, 1977",
        "number": "38",
        "party": "Republican",
        "urlPic": "assets/presidents/38-GeradlFord.jpg",
        "urlWiki": "https://en.wikipedia.org/wiki/Gerald_Ford",
        "quote": "We are bound together by the most powerful of all ties, our fervent love for freedom and independence, which knows no homeland but the human heart."
    },
    "P39": {
        "name": "Jimmy Carter",
        "presidency": "January 20, 1977 / January 20, 1981",
        "number": "39",
        "party": "Democratic",
        "urlPic": "assets/presidents/39-JimmyCarter.webp",
        "urlWiki": "https://en.wikipedia.org/wiki/Jimmy_Carter",
        "quote": "We simply must have faith in each other, faith in our ability to govern ourselves, and faith in the future of this Nation."
    },
    "P40": {
        "name": "Ronald Reagan",
        "presidency": "January 20, 1981 / January 20, 1989",
        "number": "40",
        "party": "Republican",
        "urlPic": "assets/presidents/40-RonaldReagan.jpg",
        "urlWiki": "https://en.wikipedia.org/wiki/Ronald_Reagan",
        "quote": "…let us begin an era of national renewal. Let us renew our determination, our courage, and our strength. And let us renew our faith and our hope…"
    },
    "P41": {
        "name": "George H. W. Bush",
        "presidency": "January 20, 1989 / January 20, 1993",
        "number": "41",
        "party": "Republican",
        "urlPic": "assets/presidents/41-GeorgeHWBush.jpg",
        "urlWiki": "https://en.wikipedia.org/wiki/George_H._W._Bush",
        "quote": "We are approaching the conclusion of an historic postwar struggle between two visions: one of tyranny and conflict and one of democracy and freedom."
    },
    "P42": {
        "name": "Bill Clinton",
        "presidency": "January 20, 1993 / January 20, 2001",
        "number": "42",
        "party": "Democratic",
        "urlPic": "assets/presidents/42-BillClinton.webp",
        "urlWiki": "https://en.wikipedia.org/wiki/Bill_Clinton",
        "quote": "Our democracy must be not only the envy of the world but the engine of our own renewal."
    },
    "P43": {
        "name": "George W. Bush",
        "presidency": "January 20, 2001 / January 20, 2009",
        "number": "43",
        "party": "Republican",
        "urlPic": "assets/presidents/43-GeorgeWBush.jpg",
        "urlWiki": "https://en.wikipedia.org/wiki/George_W._Bush",
        "quote": "Today, we affirm a new commitment to live out our nation's promise through civility, courage, compassion and character."
    },
    "P44": {
        "name": "Barack Obama",
        "presidency": "January 20, 2009 / January 20, 2017",
        "number": "44",
        "party": "Democratic",
        "urlPic": "assets/presidents/44-BarackObama.webp",
        "urlWiki": "https://en.wikipedia.org/wiki/Barack_Obama",
        "quote": "Change will not come if we wait for some other person or some other time. We are the ones we've been waiting for. We are the change that we seek."
    },
    "P45": {
        "name": "Donald Trump",
        "presidency": "January 20, 2017 / January 20, 2021",
        "number": "45",
        "party": "Republican",
        "urlPic": "assets/presidents/45-DonaldTrump.jpg",
        "urlWiki": "https://en.wikipedia.org/wiki/Donald_Trump",
        "quote": "...we all bleed the same red blood of patriots, we all enjoy the same glorious freedoms, and we all salute the same great American Flag."
    },
    "P46": {
        "name": "Joe Biden",
        "presidency": "January 20, 2021 / Incumbent",
        "number": "46",
        "party": "Democratic",
        "urlPic": "assets/presidents/46-JoeBiden.jpg",
        "urlWiki": "https://en.wikipedia.org/wiki/Joe_Biden",
        "quote": "Fear never builds the future, but hope does. Keep faith folks."
    },
};

$("body").on('DOMSubtreeModified', '.gallery', function () {
    // console.log('changed');
    // let potusCase = $(this).find('div.is-selected')[0].id;
    
    // let potusCase = $(this).find('div.is-selected')[0]; 
    // // console.log(potusCase.id);    
    // return potusInfo(potusCase.id);            

    let potusCase = $(this).find('div.is-selected')[0];
    // console.log(potusCase.id);    
    return potusInfo(potusCase.id);

    // function test(t) {
        
    //     if (t === undefined) {
    //         console.log(t + ' is undefined');
    //     }
    //     return t + ' is defined';
    // }

    // console.log(test(potusCase.id));
});

function potusInfo(POTUS) {
    let potusID = `#${POTUS}`;
    let potusIDPic = `#${POTUS} .potus-pic`;

    // console.log(potusID); 
    // console.log(POTUS_DATA[POTUS].name);
    // console.log(POTUS_DATA[POTUS].urlPic);

    // Picture Management

    $('.potus-pic').css("display", "none");
    $(potusIDPic).css({
        "display":"block",
        "background": `url(${POTUS_DATA[POTUS].urlPic})`,
        "background-size": "cover",
        "background-position": "center",
        "background-repeat": "no-repeat",
    });

    // POTUS Number Management
    potusNumber(POTUS);

    // POTUS Party-Afiliation Management
    $('.party-name p').fadeOut(250, function () {
        $('.party-name p').html(POTUS_DATA[POTUS].party);
        $('.party-name p').delay(150).fadeIn(250);
    });
    // $('.party-name p').html(POTUS_DATA[POTUS].party);

    // POTUS Name
    $('.president-name h1').fadeOut(250, function () {
        $('.president-name h1').html(POTUS_DATA[POTUS].name);
        $('.president-name h1').delay(150).fadeIn(250);
    });
    // $('.president-name h1').html(POTUS_DATA[POTUS].name);

    // POTUS Presidency
    $('.presidency-data h3').fadeOut(250, function () {
        $('.presidency-data h3').html(POTUS_DATA[POTUS].presidency);
        $('.presidency-data h3').delay(250).fadeIn(250);
    });
    // $('.presidency-data h3').html(POTUS_DATA[POTUS].presidency);

    // POTUS Quote
    $('.quote').fadeOut(250, function () {
        $('.quote p').html(`"${POTUS_DATA[POTUS].quote}"`);
        $('.quote').delay(350).fadeIn(250);
    });
    // $('.quote p').html(`"${POTUS_DATA[POTUS].quote}"`);

    // POTUS WIKI
    // $('.wiki-load').addClass('wiki-load-scale');
    $('.wiki-load').fadeOut(250, function(){
        $('.wiki-load a').attr("href", POTUS_DATA[POTUS].urlWiki);
        $('.wiki-load').delay(250).fadeIn(250);
        // $('.wiki-load').removeClass('wiki-load-scale');
    });

    // $('.wiki-load a').attr("href", POTUS_DATA[POTUS].urlWiki);
};

// POTUS NUMBER DEFINITION
function potusNumber(potusID) {
    let potusNumber = POTUS_DATA[potusID].number;
    if (potusNumber === "1" || potusNumber === "11" || potusNumber === "21" || potusNumber === "31" || potusNumber === "41") {
        $('.presidency-number p').fadeOut(250, function(){
            $('.presidency-number p').html(`${potusNumber}<span>st</span>`);
            $('.presidency-number p').fadeIn(250);
        });
        // $('.presidency-number p').html(`${potusNumber}<span>st</span>`);
    } else if (potusNumber === "2" || potusNumber === "12" || potusNumber === "22" || potusNumber === "32" || potusNumber === "42"){
        $('.presidency-number p').fadeOut(250, function () {
            $('.presidency-number p').html(`${potusNumber}<span>nd</span>`);
            $('.presidency-number p').fadeIn(250);
        });
        // $('.presidency-number p').html(`${potusNumber}<span>nd</span>`);
    } else if (potusNumber === "3" || potusNumber === "13" || potusNumber === "23" || potusNumber === "33" || potusNumber === "43") {
        $('.presidency-number p').fadeOut(250, function () {
            $('.presidency-number p').html(`${potusNumber}<span>rd</span>`);
            $('.presidency-number p').fadeIn(250);
        });
        // $('.presidency-number p').html(`${potusNumber}<span>rd</span>`);
    } else {
        $('.presidency-number p').fadeOut(250, function () {
            $('.presidency-number p').html(`${potusNumber}<span>th</span>`);
            $('.presidency-number p').fadeIn(250);
        });
        // $('.presidency-number p').html(`${potusNumber}<span>th</span>`);
    }  
}

// Detection changes

$('.main-container').on('DOMSubtreeModified', '.wiki-load', function () {
    console.log('changed');
});

