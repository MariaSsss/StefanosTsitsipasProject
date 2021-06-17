var dataSet = [
["[ESP] Rafael Nadal [Active] ","1","9","2","7","L [ 6-4 6-7(6) 7-5 ] at 2021 Barcelona Clay F"],
["[SRB] Novak Djokovic [Active] ","1","8","2","6","L [ 6-7(6) 2-6 6-3 6-2 6-4 ] at 2021 Roland Garros Clay F"],
["[RUS] Daniil Medvedev [Active] ","2","8","2","6","W [ 6-3 7-6(3) 7-5 ] at 2021 Roland Garros Clay QF"],
["[GER] Alexander Zverev [Active] ","3","8","6","2","W [ 6-3 6-3 4-6 4-6 6-3 ] at 2021 Roland Garros Clay SF"],
["[AUT] Dominic Thiem [Active] ","3","8","3","5","L [ 7-6(5) 4-6 6-3 ] at 2020 Tour Finals Hard (i) RR"],
["[POL] Hubert Hurkacz [Active] ","16","7","5","2","L [ 2-6 6-3 6-4 ] at 2021 Miami Masters Hard QF"],
["[BEL] David Goffin [Active] ","7","6","4","2","W [ 3-6 6-4 6-4 ] at 2019 Estoril Clay SF"],
["[RUS] Andrey Rublev [Active] ","7","6","3","3","W [ 6-3 6-3 ] at 2021 Monte Carlo Masters Clay F"],
["[USA] John Isner [Active] ","8","6","4","2","W [ 5-7 6-3 7-6(3) 6-1 ] at 2021 Roland Garros Clay R32"],
["[CAN] Felix Auger Aliassime [Active] ","17","6","4","2","W [ 6-3 6-3 ] at 2021 Barcelona Clay QF"],
["[SUI] Roger Federer [Active] ","1","5","2","2","W [ 6-3 6-4 ] at 2019 Tour Finals Hard (i) SF"],
["[BIH] Damir Dzumhur [Active] ","23","5","2","3","W [ 6-1 6-4 ] at 2021 Miami Masters Hard R64"],
["[GER] Jan Lennard Struff [Active] ","29","5","3","2","W [ 6-7(3) 6-3 6-4 ] at 2020 Vienna Hard (i) R32"],
["[RSA] Kevin Anderson [Active] ","5","4","3","1","W [ 6-1 6-3 ] at 2020 Cincinnati Masters Hard R32"],
["[CAN] Denis Shapovalov [Active] ","10","4","1","3","L [ 7-6(6) 7-6(4) ] at 2020 ATP Cup Hard RR"],
[" [AUS] Alex De Minaur [Active] ","18","4","4","0","W [ 7-5 6-3 ] at 2021 Barcelona Clay R16"],
["[FRA] Benoit Paire [Active] ","18","4","3","1","W [ 6-1 6-2 ] at 2021 Madrid Masters Clay R32"],
["[URU] Pablo Cuevas [Active] ","19","4","4","0","W [ 6-1 6-4 6-2 ] at 2020 Roland Garros Clay R64"],
["[FRA] Jeremy Chardy [Active] ","25","4","3","1","W [ 7-6(6) 6-3 6-1 ] at 2021 Roland Garros Clay R128"],
["[FRA] Gael Monfils [Active] ","6","3","2","1","W [ 4-6 7-6(4) 7-6(4) ] at 2019 Dubai Hard SF"],
["[RUS] Karen Khachanov [Active] ","8","3","3","0","W [ 4-6 6-3 7-5 ] at 2021 Rotterdam Hard (i) QF"],
["[ITA] Matteo Berrettini [Active] ","8","3","2","0","W [ 7-6(3) 6-2 ] at 2021 Rome Masters Clay R16"],
["[ESP] Pablo Carreno Busta [Active] ","10","3","3","0","W [ 6-3 6-2 7-5 ] at 2021 Roland Garros Clay R16"],
["[GER] Philipp Kohlschreiber [Active] ","16","3","2","0","W [ W/O ] at 2020 Australian Open Hard R64"],
["[ESP] Albert Ramos [Active] ","17","3","3","0","W [ 6-2 6-1 6-1 ] at 2020 US Open Hard R128"],
["[ITA] Jannik Sinner [Active] ","17","3","2","1","W [ 6-3 6-3 ] at 2021 Barcelona Clay SF"],
["[SRB] Dusan Lajovic [Active] ","23","3","2","1","W [ 7-6(5) 6-2 ] at 2020 Hamburg Clay QF"],
["[GBR] Daniel Evans [Active] ","25","3","3","0","W [ 6-2 6-1 ] at 2021 Monte Carlo Masters Clay SF"],
["[KAZ] Mikhail Kukushkin [Active] ","39","3","3","0","W [ 6-3 7-5 ] at 2019 Monte Carlo Masters Clay R32"],
["[USA] Jared Donaldson","48","3","2","1","W [ 3-6 6-3 7-5 ] at 2018 Washington Hard R32"],
[" [CRO] Marin Cilic [Active] ","3","2","1","1","W [ 7-5 6-2 ] at 2021 Rome Masters Clay R32"],
["[BUL] Grigor Dimitrov [Active] ","3","2","1","1","L [ 6-7(5) 6-4 6-3 ] at 2020 Vienna Hard (i) R16"],
["[CAN] Milos Raonic [Active] ","3","2","0","2","L [ 7-6(5) 6-3 ] at 2020 Cincinnati Masters Hard SF"],
["[JPN] Kei Nishikori [Active] ","4","2","1","1","W [ 6-3 3-6 6-1 ] at 2021 Miami Masters Hard R32"],
["[FRA] Richard Gasquet [Active] ","7","2","1","1","L [ 7-6(2) 7-6(4) ] at 2018 s Hertogenbosch Grass QF"],
["[ARG] Diego Sebastian Schwartzman [Active] ","8","2","1","1","W [ 6-2 6-1 ] at 2018 Barcelona Clay R32"],
["[ESP] Roberto Bautista Agut [Active] ","9","2","2","0","W [ 7-5 7-5 ] at 2021 ATP Cup Hard RR"],
["[ITA] Fabio Fognini [Active] ","9","2","2","0","W [ 6-4 6-3 ] at 2019 Rome Masters Clay R16"],
["[FRA] Lucas Pouille [Active] ","10","2","2","0","W [ 6-2 6-3 ] at 2021 Marseille Hard (i) R16"],
["[CRO] Borna Coric [Active] ","12","2","1","1","L [ 6-7(2) 6-4 4-6 7-5 7-6(4) ] at 2020 US Open Hard R32"],
["[AUS] Nick Kyrgios [Active] ","13","2","0","2","L [ 7-6(7) 6-7(3) 7-6(5) ] at 2020 ATP Cup Hard RR"],
["[CRO] Ivo Karlovic [Active] ","14","2","1","1","W [ 7-6(4) 5-6 RET ] at 2017 Antwerp Hard (i) R16"],
["[GEO] Nikoloz Basilashvili [Active] ","16","2","2","0","W [ 4-6 6-3 6-2 ] at 2019 Beijing Hard R16"],
["[CHI] Christian Garin [Active] ","18","2","2","0","W [ 6-3 6-4 ] at 2021 Monte Carlo Masters Clay R16"],
["[FRA] Adrian Mannarino [Active] ","22","2","1","1","L [ 3-6 7-5 0-0 RET ] at 2019 Zhuhai Hard R16"],
["[SRB] Filip Krajinovic [Active] ","26","2","2","0","W [ 3-6 6-4 6-4 ] at 2019 Basel Hard (i) QF"],
["[FRA] Pierre Hugues Herbert [Active] ","36","2","0","2","L [ 6-7(6) 6-4 6-2 ] at 2021 Marseille Hard (i) QF"],
["[KAZ] Alexander Bublik [Active] ","37","2","2","0","W [ 7-6(1) 6-4 ] at 2020 Dubai Hard R16"],
["[TUN] Malek Jaziri [Active] ","42","2","1","1","W [ 4-6 7-6(6) 6-2 ] at 2018 s Hertogenbosch Grass R16"],
["[SLO] Aljaz Bedene [Active] ","43","2","1","1","W [ 6-1 6-2 3-1 RET ] at 2020 Roland Garros Clay R32"],
["[USA] Tommy Paul [Active] ","50","2","2","0","W [ 6-1 6-4 ] at 2021 Lyon Clay R16"],
["[LTU] Ricardas Berankis [Active] ","50","2","1","1","W [ 6-7(4) 6-2 6-4 ] at 2019 Basel Hard (i) R16"],
["[ESP] Jaume Munar [Active] ","52","2","2","0","W [ 6-0 6-2 ] at 2021 Barcelona Clay R32"],
["[ITA] Lorenzo Musetti [Active] ","61","2","2","0","W [ 4-6 6-3 6-0 ] at 2021 Lyon Clay SF"],
["[BLR] Egor Gerasimov [Active] ","65","2","2","0","W [ 7-6(4) 7-5 ] at 2021 Rotterdam Hard (i) R32"],
["[SWE] Mikael Ymer [Active] ","67","2","2","0","W [ 6-4 6-1 6-1 ] at 2021 Australian Open Hard R32"],
["[ARG] Guido Andreozzi","70","2","2","0","W [ 6-3 6-4 ] at 2019 Estoril Clay R16"],
["[ITA] Thomas Fabbiano [Active] ","70","2","1","1","L [ 6-4 3-6 6-4 6-7(8) 6-3 ] at 2019 Wimbledon Grass R128"],
["[ARG] Juan Martin Del Potro [Active] ","3","1","0","1","L [ 7-5 6-3 ] at 2018 Rome Masters Clay R32"],
["[SUI] Stan Wawrinka [Active] ","3","1","0","1","L [ 7-6(6) 5-7 6-4 3-6 8-6 ] at 2019 Roland Garros Clay R16"],
[" [ESP] Tommy Robredo [Active] ","5","1","1","0","W [ 6-3 7-6(1) 6-4 ] at 2018 US Open Hard R128"],
["[FRA] Jo Wilfried Tsonga [Active] ","5","1","0","1","L [ 6-4 7-6(2) ] at 2017 Rotterdam Hard (i) R32"],
["[FRA] Gilles Simon [Active] ","6","1","1","0","W [ 6-1 6-2 6-1 ] at 2021 Australian Open Hard R128"],
["[ESP] Fernando Verdasco [Active] ","7","1","1","0","W [ 6-3 6-4 ] at 2019 Madrid Masters Clay R16"],
["[RUS] Mikhail Youzhny","8","1","0","1","L [ 6-1 4-6 7-5 ] at 2017 Marseille Hard (i) R32"],
["[LAT] Ernests Gulbis [Active] ","10","1","1","0","W [ 6-4 6-4 ] at 2018 Stockholm Hard (i) F"],
["[SRB] Viktor Troicki [Active] ","12","1","1","0","W [ 6-3 2-6 6-2 7-5 ] at 2019 Australian Open Hard R64"],
["[GBR] Kyle Edmund [Active] ","14","1","1","0","W [ 6-3 7-5 ] at 2019 Queen's Club Grass R32"],
["[NOR] Casper Ruud [Active] ","15","1","0","1","L [ 7-6(4) 6-4 ] at 2021 Madrid Masters Clay R16"],
["[GER] Florian Mayer","18","1","1","0","W [ 4-6 7-5 6-4 ] at 2018 Doha Hard R32"],
["[ITA] Andreas Seppi [Active] ","18","1","0","1","L [ 4-6 6-4 6-4 ] at 2019 Sydney Hard QF"],
["[ARG] Leonardo Mayer [Active] ","21","1","1","0","W [ 6-4 6-4 ] at 2019 Miami Masters Hard R32"],
["[RUS] Aslan Karatsev [Active] ","24","1","1","0","W [ 6-3 6-4 ] at 2021 Monte Carlo Masters Clay R32"],
["[USA] Taylor Harry Fritz [Active] ","24","1","1","0","W [ 7-6(3) 6-3 ] at 2019 Paris Masters Hard (i) R32"],
["[CAN] Vasek Pospisil [Active] ","25","1","1","0","W [ 7-5 6-3 ] at 2020 Marseille Hard (i) QF"],
[" [ITA] Lorenzo Sonego [Active] ","26","1","1","0","W [ 6-2 7-6(2) ] at 2021 Miami Masters Hard R16"],
["[POR] Joao Sousa [Active] ","28","1","0","1","L [ 6-4 1-6 7-6(4) ] at 2018 Estoril Clay SF"],
["[FRA] Ugo Humbert [Active] ","29","1","0","1","L [ 7-6(4) 6-7(6) 7-6(3) ] at 2020 Paris Masters Hard (i) R32"],
["[USA] Reilly Opelka [Active] ","31","1","1","0","W [ 5-6 RET ] at 2020 Cincinnati Masters Hard QF"],
["[UKR] Sergiy Stakhovsky [Active] ","31","1","1","0","W [ 6-4 6-3 ] at 2019 Marseille Hard (i) QF"],
["[HUN] Marton Fucsovics [Active] ","31","1","1","0","W [ 6-3 6-4 ] at 2019 Barcelona Clay R32"],
["[ESP] Pablo Andujar [Active] ","32","1","1","0","W [ 7-6(2) 6-3 ] at 2018 Estoril Clay R32"],
["[AUS] John Millman [Active] ","33","1","1","0","W [ 6-4 3-6 6-3 ] at 2018 Stockholm Hard (i) R16"],
["[ESP] Alejandro Davidovich Fokina [Active] ","35","1","1","0","W [ 7-5 0-0 RET ] at 2021 Monte Carlo Masters Clay QF"],
["[FRA] Nicolas Mahut [Active] ","37","1","0","1","L [ 7-5 7-6(4) ] at 2018 Marseille Hard (i) R32"],
["[CHI] Nicolas Jarry [Active] ","38","1","0","1","L [ 6-4 3-6 6-4 ] at 2019 s Hertogenbosch Grass R16"],
["[AUS] Matthew Ebden [Active] ","39","1","1","0","W [ 6-4 3-6 6-3 ] at 2019 Dubai Hard R32"],
["[MDA] Radu Albot [Active] ","39","1","1","0","W [ 7-6(2) 6-2 ] at 2018 Indian Wells Masters Hard R128"],
["[GER] Peter Gojowczyk [Active] ","39","1","1","0","W [ 6-3 6-1 ] at 2018 Basel Hard (i) R16"],
["[GBR] Cameron Norrie [Active] ","41","1","1","0","W [ 6-3 6-3 ] at 2021 Lyon Clay F"],
[" [AUS] Jordan Thompson [Active] ","43","1","1","0","W [ 6-3 7-6(4) ] at 2019 Washington Hard R16"],
["[SVK] Lukas Lacko","44","1","0","1","L [ 6-3 6-7(5) 6-3 ] at 2018 Auckland Hard R32"],
["[GER] Maximilian Marterer [Active] ","45","1","1","0","W [ 6-2 6-2 7-6(4) ] at 2019 Roland Garros Clay R128"],
["[JPN] Yoshihito Nishioka [Active] ","48","1","1","0","W [ 6-3 6-4 ] at 2021 Lyon Clay QF"],
["[USA] Denis Kudla [Active] ","53","1","0","1","L [ 6-3 6-4 ] at 2018 Halle Grass R16"],
["[USA] Mackenzie Mcdonald [Active] ","57","1","1","0","W [ 7-6(4) 6-1 ] at 2019 Miami Masters Hard R64"],
["[JPN] Taro Daniel [Active] ","64","1","1","0","W [ 6-1 6-3 ] at 2018 Tokyo Hard (i) R32"],
["[RUS] Evgeny Donskoy [Active] ","65","1","0","1","L [ 5-7 6-4 7-6(3) ] at 2018 Madrid Masters Clay R64"],
["[FRA] Corentin Moutet [Active] ","67","1","1","0","W [ 6-4 6-1 ] at 2018 Barcelona Clay R64"],
["[AUS] Thanasi Kokkinakis [Active] ","69","1","1","0","W [ 6-7(5) 6-4 6-1 6-7(5) 6-4 ] at 2021 Australian Open Hard R64"],
["[AUS] James Duckworth [Active] ","71","1","1","0","W [ 6-3 6-4 ] at 2018 Washington Hard R16"],
["[BOL] Hugo Dellien [Active] ","72","1","1","0","W [ 4-6 6-0 6-3 7-5 ] at 2019 Roland Garros Clay R64"],
["[ESP] Roberto Carballes Baena [Active] ","72","1","1","0","W [ 6-7(2) 6-2 7-6(3) ] at 2018 Estoril Clay QF"],
["[ITA] Salvatore Caruso [Active] ","76","1","1","0","W [ 6-0 6-2 6-3 ] at 2020 Australian Open Hard R128"],
["[FRA] Gregoire Barrere [Active] ","80","1","1","0","W [ 6-3 6-4 6-7(3) 7-5 ] at 2018 Wimbledon Grass R128"],
[" [ESP] Pedro Martinez Portero [Active] ","82","1","1","0","W [ 6-3 6-4 6-3 ] at 2021 Roland Garros Clay R64"],
["[AUS] John Patrick Smith [Active] ","108","1","1","0","W [ 3-6 6-3 6-4 ] at 2018 s Hertogenbosch Grass R32"],
["[ESP] Carlos Taberner [Active] ","128","1","1","0","W [ 7-5 6-7(5) 6-4 6-3 ] at 2018 Roland Garros Clay R128"],
["[POR] Joao Domingues","150","1","1","0","W [ 7-6(3) 6-4 ] at 2019 Estoril Clay QF"],
["[FRA] Maxime Cressy [Active] ","150","1","1","0","W [ 7-6(2) 6-3 6-4 ] at 2020 US Open Hard R64"],
["[PHI] Jeson Patrombon","869","1","1","0","W [ 6-2 6-1 ] at 2020 Davis Cup WG2 Clay RR"],
["[PHI] Alberto Lim","1371","1","1","0","W [ 6-2 6-1 ] at 2020 Davis Cup WG2 Clay RR"]
];

$(document).ready(function() {
    $('#example').DataTable( {
        data: dataSet,
        columns: [
            { title: "Opponent" },
            { title: "Best Rank" },
            { title: "Matches" },
            { title: "Won" },
            { title: "Lost" },
            { title: "Last Match" }
        ],
        dom: 'Bfrtip',
        stateSave: true,
        buttons: [
            'colvis'
        ],
        scrollY:        400,
        scrollX:        200,
        scrollCollapse: true,
        scroller:       true
    } );
} );