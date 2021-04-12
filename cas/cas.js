var CAS_EXP = [
    {
        title: "DM for BSGE Dungeons & Dragons Club",
        desc: "Since the beginning of the COVID-19 pandemic, I've been running D&D games for several classmates on Friday afternoons through an online interface. My tasks include writing an open-ended story for players to interact with, managing group scheduling, building an interactive world, and creating monsters and creatures to fight. This experience has provided a valuable social gathering point for many people in BSGE, allowing them to socialize in an otherwise difficult time. Over its length, I've learned a lot about group management, and have acquired valuable social skills that will be invaluable during my college career.",
        hours: 330,
        hour_types: ['C', 'S'],
        img: 'assets/dnd.png',
        certification: 'certifications/ibc-dnd.pdf'
    },
    {
        title: "IB Coding",
        desc: "IB Coding has been my CAS project, in which I've worked with a number of my peers to collaboratively educate other BSGE students on several programming languages. Myself and the rest of my group members each prepared a number of lessons to present to students, each lesson containing multiple examples and interactive portions. Each small unit also ended with a unit project, and students that completed said projects presented their work to the entire club. Over the course of completing this project, I've gained valuable teaching skills, a field which I had a lot of room to improve.",
        hours: 30,
        hour_types: ['C', 'S'],
        img: 'assets/ibc.png',
        certification: 'certifications/ibc-dnd.pdf'
    },
    {
        title: "Pandemic Runs",
        desc: "Over the course of the Covid-19 Pandemic, I've gone on a number of half-hour runs at least once a week for a large part of 2020 and the beginning of 2021. This has assisted me in keeping in shape during a time which would otherwise make this difficult, and has allowed me to continue the exercise that I would normally get at school during PE or similar.",
        hours: 25,
        hour_types: ['A'],
        img: 'assets/activity-img.jpg',
        certification: 'certifications/act-cert'
    }
];

var showingIndex = {
    previous:null,
    current:null,
    next:null
};

function condition(c, t, f) {
    if (c) { return t; } else { return f; }
}

function renderItem(index,pos) {
    var item = $('<div class="cas-item"></div>');
    var exp_item = CAS_EXP[index];
    item.attr('data-pos',pos);
    item.attr('data-index',index);
    item
        .append(
            $('<div class="item-title"></div>')
                .append(
                    $('<div class="exp-title"></div>').text(exp_item.title)
                )
                .append(
                    $('<div class="exp-hours"></div>').text(exp_item.hours + ' hours')
                )
                .append(
                    $('<div class="exp-hour-types"></div>')
                        .append(
                            $('<span class="hr-type"></span>')
                                .text('C')
                                .toggleClass('active',exp_item.hour_types.includes('C'))
                        )
                        .append(
                            $('<span class="hr-type"></span>')
                                .text('A')
                                .toggleClass('active',exp_item.hour_types.includes('A'))
                        )
                        .append(
                            $('<span class="hr-type"></span>')
                                .text('S')
                                .toggleClass('active',exp_item.hour_types.includes('S'))
                        )
                )
        )
        .append(
            $('<img class="item-img">').attr('src',exp_item.img)
        )
        .append(
            $('<div class="item-desc"></div>')
                .append($('<span></span>').text(exp_item.desc))
        )
        .append(
            $('<a class="item-cert" target="_blank"></a>').attr('href',exp_item.certification).append('<i class="material-icons">description</i>')
        );
        return item;
}

function render(indices) {
    var dummyItems = $('<div id="cas-items"></div>');
    dummyItems.append(renderItem(indices.previous,'previous'));
    dummyItems.append(renderItem(indices.current,'current'));
    dummyItems.append(renderItem(indices.next,'next'));
    dummyItems.replaceAll('#cas-items');
}

function animate_to(dir) {
    if (dir == 'left') {
        $('.cas-item[data-pos=current]').animate({left:'100%'},500);
        $('.cas-item[data-pos=previous]').animate({right:'0%'},500);
        window.localStorage.itemPosition = Number(window.localStorage.itemPosition) - 1;
        if (Number(window.localStorage.itemPosition) < 0) {
            window.localStorage.itemPosition = CAS_EXP.length - 1;
        }
    } else {
        $('.cas-item[data-pos=current]').animate({right:'100%'},500);
        $('.cas-item[data-pos=next]').animate({left:'0%'},500);
        window.localStorage.itemPosition = Number(window.localStorage.itemPosition) + 1;
        if (Number(window.localStorage.itemPosition) >= CAS_EXP.length) {
            window.localStorage.itemPosition = 0;
        }
    }
    showingIndex = {
        previous: condition(Number(window.localStorage.itemPosition) == 0, CAS_EXP.length-1, Number(window.localStorage.itemPosition) - 1),
        current: Number(window.localStorage.itemPosition),
        next: condition(Number(window.localStorage.itemPosition) == CAS_EXP.length-1, 0, Number(window.localStorage.itemPosition) + 1)
    };
    setTimeout(function () {render(showingIndex)},480);
}

$(document).ready(function () {
    if (window.localStorage.itemPosition == undefined) {
        window.localStorage.itemPosition = 0;
    }

    showingIndex = {
        previous: condition(Number(window.localStorage.itemPosition) == 0, CAS_EXP.length-1, Number(window.localStorage.itemPosition) - 1),
        current: Number(window.localStorage.itemPosition),
        next: condition(Number(window.localStorage.itemPosition) == CAS_EXP.length-1, 0, Number(window.localStorage.itemPosition) + 1)
    };

    render(showingIndex);
    $('#arrow-left').on('click', function () {animate_to('left')});
    $('#arrow-right').on('click', function () {animate_to('right')});
});