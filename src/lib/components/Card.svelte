<script>
    import ExpandImage from "$lib/components/ExpandImage.svelte";
    import ImageTitleBlock from "$lib/components/ImageTitleBlock.svelte";
</script>

<div class="_container">
    <div class="_wrapper card">
        <ImageTitleBlock
                image="voicemain.jpg"
                title="VOICE"
                subTitle="ХОЧЕШЬ ПОРВАТЬ ЗАЛ СВОИМ ЗАВОРАЖИВАЮЩИМ ПЕНИЕМ? ВПЕРЕД, НА ПУТЬ К ЭСТРАДЕ"
        />
    </div>
    <div class="_wrapper card">
        <ExpandImage image1="voice1.jpg" image2="voice2.jpg" image3="voice3.jpg" image4="voice4.jpg" title1="Анастасия Аралина" title2="Дарья Головина" title3="Арина Попова" title4="Дарья Найдёнова"
                     text1="Наставник 2023" text2="Наставник 2023" text3="Победитель проекта 2023" text4="Приз зрительских симпатий 2023"/>
    </div>
</div>
<div class="_container">
    <div class="_wrapper card">
        <ImageTitleBlock
                image="PARADE2.jpg"
                title="TALENT PARADE"
                subTitle="ХОРОШО ТАНЦУЕШЬ? ВЕЛИКОЛЕПНО ПОЕШЬ? ЗДЕСЬ ТЫ МОЖЕШЬ ПОКАЗАТЬ ВСЕ СВОИ СКРЫТЫЕ ТАЛАНТЫ"
        />
    </div>
    <div class="_wrapper card">
        <ExpandImage image1="p1.jpg" image2="p2.jpg" image3="p3.jpg" image4="p4.jpg" title1="«Бабабуй»" title2="«ЫЦ-ЫЦ»" title3="«Египетская сила» ИЭФ" title4="Анастасия Давидова"
                     text1="ИОМ 1 место" text2="Второе - ИМ" text3="Приз зрительских симпатий " text4="Координатор 2023"/>
    </div>
</div>
<div class="_container">
    <div class="_wrapper card">
        <ImageTitleBlock
                image="mister.jpg"
                title="MR SUM"
                subTitle="ЭКСЦЕНТРИЧНОСТЬ, НЕОБЫЧНЫЕ ОБРАЗЫ И ЭТАПЫ, НИКАКИХ ПАТТЕРНОВ - ТОЛЬКО НАСТОЯЩИЕ ЭМОЦИИ"
        />
    </div>
    <div class="_wrapper card">
        <ExpandImage image1="m1.jpg" image2="m2.jpg" image3="m3.jpg" image4="m4.jpg" title1="Воробьев Василий" title2="Гафаров Айвар" title3="Никита Савин" title4="Лейла"
                     text1="Мистер 2023" text2="Вице-мистер 2023" text3="Приз зрительских симпатий 2023" text4="Координатор проекта 2023"/>
    </div>
</div>
<div class="_container">
    <div class="_wrapper card">
        <ImageTitleBlock
                image="JUST2.jpg"
                title="JUST DANCE"
                subTitle="САМЫЙ ЗАЖИГАТЕЛЬНЫЙ И ОБАЯТЕЛЬНЫЙ ПРОЕКТ. ДОКАЖИ, ЧТО ИМЕННО ТЫ КОРОЛЬ ТАНЦПОЛА."
        />
    </div>
    <div class="_wrapper card">
        <ExpandImage image1="j1.jpg" image2="j2.jpg" image3="j3.jpg" image4="j4.jpg" title1="Александра Павленко" title2="Анастасия Воронцова" title3="Полина Никерова" title4="Даян Зайнуллин"
                     text1="Старший хореограф 2023" text2="Координатор 2023" text3="Приз зрительских симпатий 2023" text4="Победитель 2023"/>
    </div>
</div>
<div class="_container">
    <div class="_wrapper card">
        <ImageTitleBlock
                image="MRS2.jpg"
                title="MRS.SUM"
                subTitle="САМЫЙ ОБАЯТЕЛЬНЫЙ ПРОЕКТ.КРАСИВЫЕ, ТАЛАНТЛИВЫЕ, НЕПОВТОРИМЫЕ И НЕЖНЫЕ ДЕВУШКИ С ТВЕРДЫМИ ХАРАКТЕРАМИ"
        />
    </div>
    <div class="_wrapper card">
        <ExpandImage image1="mi1.jpg" image2="mi2.jpg" image3="mi3.jpg" image4="mi4.jpg" title1="Дарья Кудрявцева" title2="Валерия Чуманченко" title3="Полина Никерова" title4="Елизавета Волкова"
                     text1="Мисс 2023 " text2="Вице-мисс 2023 " text3="Мисс Овации 2023" text4="Координатор 2023"/>
    </div>
</div>

<style>
    .card {
        border-radius: 0.5em;
        margin: 20px;
        background: #4b2877;
    }
</style>