var dataSetMatches = [
["23/9/2019","Zhuhai","R16","LR","Adrian Mannarino d. Stefanos Tsitsipas (1)","3-6 7-5 0-0 RET"],
["24/9/2019","Wimbledon","R128","L","Thomas Fabbiano d. Stefanos Tsitsipas (7)","6-4 3-6 6-4 6-7(8) 6-3"],
["25/9/2019","Wimbledon","R16","L","John Isner (9) d. Stefanos Tsitsipas (31)","6-4 7-6(8) 7-6(4)"],
["26/9/2019","Wimbledon","R32","W","Stefanos Tsitsipas (31) d. Thomas Fabbiano","6-2 6-1 6-4"],
["27/9/2019","Wimbledon","R64","W","Stefanos Tsitsipas (31) d. Jared Donaldson","6-3 6-2 3-6 4-6 6-3"],
["28/9/2019","Wimbledon","R128","W","Stefanos Tsitsipas (31) d. Gregoire Barrere","6-3 6-4 6-7(3) 7-5"],
["29/9/2019","Wimbledon","R128","L","Dusan Lajovic d. Stefanos Tsitsipas","6-4 6-4 6-4"],
["30/9/2019","Washington","SF","L","Nick Kyrgios d. Stefanos Tsitsipas (1)","6-4 3-6 7-6(7)"],
["1/10/2019","Washington","QF","W","Stefanos Tsitsipas (1) d. Benoit Paire (10)","7-5 6-0"],
["2/10/2019","Washington","R16","W","Stefanos Tsitsipas (1) d. Jordan Thompson","6-3 7-6(4)"],
["3/10/2019","Washington","R32","W","Stefanos Tsitsipas (1) d. Tommy Paul (WC)","6-3 7-5"],
["4/10/2019","Washington","SF","L","Alexander Zverev (1) d. Stefanos Tsitsipas (10)","6-2 6-4"],
["5/10/2019","Washington","QF","W","Stefanos Tsitsipas (10) d. David Goffin (3)","6-3 6-4"],
["6/10/2019","Washington","R16","W","Stefanos Tsitsipas (10) d. James Duckworth (PR)","6-3 6-4"],
["7/10/2019","Washington","R32","W","Stefanos Tsitsipas (10) d. Jared Donaldson","3-6 6-3 7-5"],
["8/10/2019","Vienna","R16","L","Grigor Dimitrov d. Stefanos Tsitsipas (3)","6-7(5) 6-4 6-3"],
["9/10/2019","Vienna","R32","W","Stefanos Tsitsipas (3) d. Jan Lennard Struff","6-7(3) 6-3 6-4"],
["10/10/2019","US Open","R32","L","Borna Coric (27) d. Stefanos Tsitsipas (4)","6-7(2) 6-4 4-6 7-5 7-6(4)"],
["11/10/2019","US Open","R64","W","Stefanos Tsitsipas (4) d. Maxime Cressy","7-6(2) 6-3 6-4"],
["12/10/2019","US Open","R128","W","Stefanos Tsitsipas (4) d. Albert Ramos","6-2 6-1 6-1"],
["13/10/2019","US Open","R128","L","Andrey Rublev d. Stefanos Tsitsipas (8)","6-4 6-7(5) 7-6(7) 7-5"],
["14/10/2019","US Open","R64","L","Daniil Medvedev d. Stefanos Tsitsipas (15)","6-4 6-3 4-6 6-3"],
["15/10/2019","US Open","R128","W","Stefanos Tsitsipas (15) d. Tommy Robredo","6-3 7-6(1) 6-4"],
["16/10/2019","Tour Finals","RR","L","Rafael Nadal (2) d. Stefanos Tsitsipas (6)","6-4 4-6 6-2"],
["17/10/2019","Tour Finals","RR","L","Dominic Thiem (3) d. Stefanos Tsitsipas (6)","7-6(5) 4-6 6-3"],
["18/10/2019","Tour Finals","RR","W","Stefanos Tsitsipas (6) d. Andrey Rublev (7)","6-1 4-6 7-6(6)"],
["19/10/2019","Tour Finals","F","W","Stefanos Tsitsipas (6) d. Dominic Thiem (5)","6-7(6) 6-2 7-6(4)"],
["20/10/2019","Tour Finals","SF","W","Stefanos Tsitsipas (6) d. Roger Federer (3)","6-3 6-4"],
["21/10/2019","Tour Finals","RR","L","Rafael Nadal (1) d. Stefanos Tsitsipas (6)","6-7(4) 6-4 7-5"],
["22/10/2019","Tour Finals","RR","W","Stefanos Tsitsipas (6) d. Daniil Medvedev (4)","7-6(5) 6-4"],
["23/10/2019","Tour Finals","RR","W","Stefanos Tsitsipas (6) d. Alexander Zverev (7)","6-3 6-2"],
["24/10/2019","Tokyo","QF","L","Kei Nishikori (3) d. Stefanos Tsitsipas (5)","6-3 6-3"],
["25/10/2019","Tokyo","R16","W","Stefanos Tsitsipas (5) d. Alex De Minaur","6-3 5-7 6-1"],
["26/10/2019","Tokyo","R32","W","Stefanos Tsitsipas (5) d. Taro Daniel (WC)","6-1 6-3"],
["27/10/2019","Tokyo","R32","L","Marin Cilic (1) d. Stefanos Tsitsipas (Q)","6-3 6-2"],
["28/10/2019","Sydney","QF","L","Andreas Seppi (8) d. Stefanos Tsitsipas (1)","4-6 6-4 6-4"],
["29/10/2019","Sydney","R16","W","Stefanos Tsitsipas (1) d. Guido Andreozzi (LL)","6-3 6-4"],
["30/10/2019","Stockholm","F","W","Stefanos Tsitsipas (3) d. Ernests Gulbis (Q)","6-4 6-4"],
["31/10/2019","Stockholm","SF","W","Stefanos Tsitsipas (3) d. Fabio Fognini (2)","6-3 6-2"],
["1/11/2019","Stockholm","QF","W","Stefanos Tsitsipas (3) d. Philipp Kohlschreiber","6-3 7-6(4)"],
["2/11/2019","Stockholm","R16","W","Stefanos Tsitsipas (3) d. John Millman","6-4 3-6 6-3"],
["3/11/2019","Sofia","QF","L","Gael Monfils (7) d. Stefanos Tsitsipas (2)","6-3 7-6(5)"],
["4/11/2019","Sofia","R16","W","Stefanos Tsitsipas (2) d. Jan Lennard Struff","7-6(5) 6-4"],
["5/11/2019","s Hertogenbosch","R16","L","Nicolas Jarry d. Stefanos Tsitsipas (1)","6-4 3-6 6-4"],
["6/11/2019","s Hertogenbosch","QF","L","Richard Gasquet (2) d. Stefanos Tsitsipas (5)","7-6(2) 7-6(4)"],
["7/11/2019","s Hertogenbosch","R16","W","Stefanos Tsitsipas (5) d. Malek Jaziri","4-6 7-6(6) 6-2"],
["8/11/2019","s Hertogenbosch","R32","W","Stefanos Tsitsipas (5) d. John Patrick Smith (LL)","3-6 6-3 6-4"],
["9/11/2019","Shenzhen","R16","L","Pierre Hugues Herbert d. Stefanos Tsitsipas (2)","6-3 7-6(4)"],
["10/11/2019","Shanghai Masters","SF","L","Daniil Medvedev (3) d. Stefanos Tsitsipas (6)","7-6(5) 7-5"],
["11/11/2019","Shanghai Masters","QF","W","Stefanos Tsitsipas (6) d. Novak Djokovic (1)","3-6 7-5 6-3"],
["12/11/2019","Shanghai Masters","R16","W","Stefanos Tsitsipas (6) d. Hubert Hurkacz","7-5 3-6 7-6(5)"],
["13/11/2019","Shanghai Masters","R32","W","Stefanos Tsitsipas (6) d. Felix Auger Aliassime","7-6(3) 7-6(3)"],
["14/11/2019","Shanghai Masters","R16","L","Kevin Anderson (7) d. Stefanos Tsitsipas (10)","6-4 7-6(1)"],
["15/11/2019","Shanghai Masters","R32","W","Stefanos Tsitsipas (10) d. Karen Khachanov","6-4 7-6(8)"],
["16/11/2019","Shanghai Masters","R64","W","Stefanos Tsitsipas (10) d. Gael Monfils","7-6(4) 4-6 6-4"],
["17/11/2019","Shanghai Masters","R32","L","John Isner (12) d. Stefanos Tsitsipas (Q)","7-6(2) 7-6(9)"],
["18/11/2019","Shanghai Masters","R64","W","Stefanos Tsitsipas (Q) d. Karen Khachanov","7-5 6-3"],
["19/11/2019","Rotterdam","SF","L","Andrey Rublev (4) d. Stefanos Tsitsipas (2)","6-3 7-6(2)"],
["20/11/2019","Rotterdam","QF","W","Stefanos Tsitsipas (2) d. Karen Khachanov","4-6 6-3 7-5"],
["21/11/2019","Rotterdam","R16","W","Stefanos Tsitsipas (2) d. Hubert Hurkacz","6-4 4-6 7-5"],
["22/11/2019","Rotterdam","R32","W","Stefanos Tsitsipas (2) d. Egor Gerasimov (SE)","7-6(4) 7-5"],
["23/11/2019","Rotterdam","R16","L","Aljaz Bedene d. Stefanos Tsitsipas (2)","7-5 6-4"],
["24/11/2019","Rotterdam","R32","W","Stefanos Tsitsipas (2) d. Hubert Hurkacz","6-7(2) 6-3 6-1"],
["25/11/2019","Rotterdam","R32","L","Damir Dzumhur d. Stefanos Tsitsipas (3)","6-4 1-6 7-5"],
["26/11/2019","Rotterdam","R32","L","Jo Wilfried Tsonga (6) d. Stefanos Tsitsipas (WC)","6-4 7-6(2)"],
["27/11/2019","Rome Masters","QF","L","Novak Djokovic (1) d. Stefanos Tsitsipas (5)","4-6 7-5 7-5"],
["28/11/2019","Rome Masters","R16","W","Stefanos Tsitsipas (5) d. Matteo Berrettini (9)","7-6(3) 6-2"],
["29/11/2019","Rome Masters","R32","W","Stefanos Tsitsipas (5) d. Marin Cilic","7-5 6-2"],
["30/11/2019","Rome Masters","R32","L","Jannik Sinner (WC) d. Stefanos Tsitsipas (3)","6-1 6-7(9) 6-2"],
["1/12/2019","Rome Masters","SF","L","Rafael Nadal (2) d. Stefanos Tsitsipas (8)","6-3 6-4"],
["2/12/2019","Rome Masters","QF","WW","Stefanos Tsitsipas (8) d. Roger Federer (3)","W/O"],
["3/12/2019","Rome Masters","R16","W","Stefanos Tsitsipas (8) d. Fabio Fognini (10)","6-4 6-3"],
["4/12/2019","Rome Masters","R32","W","Stefanos Tsitsipas (8) d. Jannik Sinner (WC)","6-3 6-2"],
["5/12/2019","Rome Masters","R32","L","Juan Martin Del Potro (5) d. Stefanos Tsitsipas (Q)","7-5 6-3"],
["6/12/2019","Rome Masters","R64","WR","Stefanos Tsitsipas (Q) d. Borna Coric","4-1 RET"],
["7/12/2019","Roland Garros","F","L","Novak Djokovic (1) d. Stefanos Tsitsipas (5)","6-7(6) 2-6 6-3 6-2 6-4"],
["8/12/2019","Roland Garros","SF","W","Stefanos Tsitsipas (5) d. Alexander Zverev (6)","6-3 6-3 4-6 4-6 6-3"],
["9/12/2019","Roland Garros","QF","W","Stefanos Tsitsipas (5) d. Daniil Medvedev (2)","6-3 7-6(3) 7-5"],
["10/12/2019","Roland Garros","R16","W","Stefanos Tsitsipas (5) d. Pablo Carreno Busta (12)","6-3 6-2 7-5"],
["11/12/2019","Roland Garros","R32","W","Stefanos Tsitsipas (5) d. John Isner (31)","5-7 6-3 7-6(3) 6-1"],
["12/12/2019","Roland Garros","R64","W","Stefanos Tsitsipas (5) d. Pedro Martinez Portero","6-3 6-4 6-3"],
["13/12/2019","Roland Garros","R128","W","Stefanos Tsitsipas (5) d. Jeremy Chardy","7-6(6) 6-3 6-1"],
["14/12/2019","Roland Garros","SF","L","Novak Djokovic (1) d. Stefanos Tsitsipas (5)","6-3 6-2 5-7 4-6 6-1"],
["15/12/2019","Roland Garros","QF","W","Stefanos Tsitsipas (5) d. Andrey Rublev (13)","7-5 6-2 6-3"],
["16/12/2019","Roland Garros","R16","W","Stefanos Tsitsipas (5) d. Grigor Dimitrov (18)","6-3 7-6(9) 6-2"],
["17/12/2019","Roland Garros","R32","WR","Stefanos Tsitsipas (5) d. Aljaz Bedene","6-1 6-2 3-1 RET"],
["18/12/2019","Roland Garros","R64","W","Stefanos Tsitsipas (5) d. Pablo Cuevas","6-1 6-4 6-2"],
["19/12/2019","Roland Garros","R128","W","Stefanos Tsitsipas (5) d. Jaume Munar","4-6 2-6 6-1 6-4 6-4"],
["20/12/2019","Roland Garros","R16","L","Stan Wawrinka (24) d. Stefanos Tsitsipas (6)","7-6(6) 5-7 6-4 3-6 8-6"],
["21/12/2019","Roland Garros","R32","W","Stefanos Tsitsipas (6) d. Filip Krajinovic","7-5 6-3 6-7(7) 7-6(6)"],
["22/12/2019","Roland Garros","R64","W","Stefanos Tsitsipas (6) d. Hugo Dellien","4-6 6-0 6-3 7-5"],
["23/12/2019","Roland Garros","R128","W","Stefanos Tsitsipas (6) d. Maximilian Marterer","6-2 6-2 7-6(4)"],
["24/12/2019","Roland Garros","R64","L","Dominic Thiem (7) d. Stefanos Tsitsipas","6-2 2-6 6-4 6-4"],
["25/12/2019","Roland Garros","R128","W","Stefanos Tsitsipas d. Carlos Taberner","7-5 6-7(5) 6-4 6-3"],
["26/12/2019","Roland Garros","R128","L","Ivo Karlovic (23) d. Stefanos Tsitsipas","7-6(5) 7-5 6-4"],
["27/12/2019","Queen's Club","QF","L","Felix Auger Aliassime (8) d. Stefanos Tsitsipas (1)","7-5 6-2"],
["28/12/2019","Queen's Club","R16","W","Stefanos Tsitsipas (1) d. Jeremy Chardy","4-6 7-6(0) 7-6(4)"],
["29/12/2019","Queen's Club","R32","W","Stefanos Tsitsipas (1) d. Kyle Edmund","6-3 7-5"],
["30/12/2019","Paris Masters","R32","L","Ugo Humbert d. Stefanos Tsitsipas (2)","7-6(4) 6-7(6) 7-6(3)"],
["31/12/2019","Paris Masters","QF","L","Novak Djokovic (1) d. Stefanos Tsitsipas (7)","6-1 6-2"],
["1/1/2020","Paris Masters","R16","W","Stefanos Tsitsipas (7) d. Alex De Minaur","6-3 6-4"],
["2/1/2020","Paris Masters","R32","W","Stefanos Tsitsipas (7) d. Taylor Harry Fritz","7-6(3) 6-3"],
["3/1/2020","Paris Masters","R32","L","Damir Dzumhur d. Stefanos Tsitsipas (14)","6-3 6-3"],
["4/1/2020","Next Gen Finals","F","WR","Stefanos Tsitsipas (1) d. Alex De Minaur (2)","2-4 4-1 4-3(3) 4-3(3) RET"],
["5/1/2020","Next Gen Finals","SF","WR","Stefanos Tsitsipas (1) d. Andrey Rublev (5)","4-3(3) 3-4(5) 4-0 2-4 4-3(2) RET"],
["6/1/2020","Next Gen Finals","RR","WR","Stefanos Tsitsipas (1) d. Frances Tiafoe (3)","4-3(3) 4-3(5) 4-2 RET"],
["7/1/2020","Next Gen Finals","RR","WR","Stefanos Tsitsipas (1) d. Hubert Hurkacz (6)","4-1 4-3(2) 4-1 RET"],
["8/1/2020","Next Gen Finals","RR","WR","Stefanos Tsitsipas (1) d. Jaume Munar (7)","4-3(5) 4-3(3) 3-4(4) 4-2 RET"],
["9/1/2020","Montpellier","R32","L","Jeremy Chardy d. Stefanos Tsitsipas","4-6 7-5 7-5"],
["10/1/2020","Monte Carlo Masters","F","W","Stefanos Tsitsipas (4) d. Andrey Rublev (6)","6-3 6-3"],
["11/1/2020","Monte Carlo Masters","SF","W","Stefanos Tsitsipas (4) d. Daniel Evans","6-2 6-1"],
["12/1/2020","Monte Carlo Masters","QF","WR","Stefanos Tsitsipas (4) d. Alejandro Davidovich Fokina","7-5 0-0 RET"],
["13/1/2020","Monte Carlo Masters","R16","W","Stefanos Tsitsipas (4) d. Christian Garin (16)","6-3 6-4"],
["14/1/2020","Monte Carlo Masters","R32","W","Stefanos Tsitsipas (4) d. Aslan Karatsev","6-3 6-4"],
["15/1/2020","Monte Carlo Masters","R16","L","Daniil Medvedev (10) d. Stefanos Tsitsipas (6)","6-2 1-6 6-4"],
["16/1/2020","Monte Carlo Masters","R32","W","Stefanos Tsitsipas (6) d. Mikhail Kukushkin","6-3 7-5"],
["17/1/2020","Monte Carlo Masters","R32","L","David Goffin (6) d. Stefanos Tsitsipas (Q)","7-6(4) 7-5"],
["18/1/2020","Monte Carlo Masters","R64","W","Stefanos Tsitsipas (Q) d. Denis Shapovalov","6-3 6-4"],
["19/1/2020","Miami Masters","QF","L","Hubert Hurkacz (26) d. Stefanos Tsitsipas (2)","2-6 6-3 6-4"],
["20/1/2020","Miami Masters","R16","W","Stefanos Tsitsipas (2) d. Lorenzo Sonego (24)","6-2 7-6(2)"],
["21/1/2020","Miami Masters","R32","W","Stefanos Tsitsipas (2) d. Kei Nishikori (28)","6-3 3-6 6-1"],
["22/1/2020","Miami Masters","R64","W","Stefanos Tsitsipas (2) d. Damir Dzumhur (LL)","6-1 6-4"],
["23/1/2020","Miami Masters","R16","L","Denis Shapovalov (20) d. Stefanos Tsitsipas (8)","4-6 6-3 7-6(3)"],
["24/1/2020","Miami Masters","R32","W","Stefanos Tsitsipas (8) d. Leonardo Mayer","6-4 6-4"],
["25/1/2020","Miami Masters","R64","W","Stefanos Tsitsipas (8) d. Mackenzie Mcdonald (LL)","7-6(4) 6-1"],
["26/1/2020","Miami Masters","R128","L","Daniil Medvedev d. Stefanos Tsitsipas","2-6 6-4 6-2"],
["27/1/2020","Metz","R16","L","Ricardas Berankis d. Stefanos Tsitsipas (2)","6-7(5) 7-6(6) 6-3"],
["28/1/2020","Metz","R32","L","Benoit Paire (7) d. Stefanos Tsitsipas (Q)","6-2 6-4"],
["29/1/2020","Marseille","QF","L","Pierre Hugues Herbert d. Stefanos Tsitsipas (2)","6-7(6) 6-4 6-2"],
["30/1/2020","Marseille","R16","W","Stefanos Tsitsipas (2) d. Lucas Pouille","6-2 6-3"],
["31/1/2020","Marseille","F","W","Stefanos Tsitsipas (2) d. Felix Auger Aliassime (7)","6-3 6-4"],
["1/2/2020","Marseille","SF","W","Stefanos Tsitsipas (2) d. Alexander Bublik","7-5 6-3"],
["2/2/2020","Marseille","QF","W","Stefanos Tsitsipas (2) d. Vasek Pospisil (PR)","7-5 6-3"],
["3/2/2020","Marseille","R16","W","Stefanos Tsitsipas (2) d. Mikael Ymer","6-1 6-3"],
["4/2/2020","Marseille","F","W","Stefanos Tsitsipas (1) d. Mikhail Kukushkin","7-5 7-6(5)"],
["5/2/2020","Marseille","SF","W","Stefanos Tsitsipas (1) d. David Goffin (3)","7-6(1) 6-2"],
["6/2/2020","Marseille","QF","W","Stefanos Tsitsipas (1) d. Sergiy Stakhovsky (LL)","6-4 6-3"],
["7/2/2020","Marseille","R16","W","Stefanos Tsitsipas (1) d. Hubert Hurkacz","6-4 6-2"],
["8/2/2020","Marseille","R32","L","Nicolas Mahut d. Stefanos Tsitsipas","7-5 7-6(4)"],
["9/2/2020","Marseille","R32","L","Mikhail Youzhny d. Stefanos Tsitsipas (WC)","6-1 4-6 7-5"],
["10/2/2020","Madrid Masters","R16","L","Casper Ruud d. Stefanos Tsitsipas (4)","7-6(4) 6-4"],
["11/2/2020","Madrid Masters","R32","W","Stefanos Tsitsipas (4) d. Benoit Paire","6-1 6-2"],
["12/2/2020","Madrid Masters","F","L","Novak Djokovic (1) d. Stefanos Tsitsipas (8)","6-3 6-4"],
["13/2/2020","Madrid Masters","SF","W","Stefanos Tsitsipas (8) d. Rafael Nadal (2)","6-4 2-6 6-3"],
["14/2/2020","Madrid Masters","QF","W","Stefanos Tsitsipas (8) d. Alexander Zverev (3)","7-5 3-6 6-2"],
["15/2/2020","Madrid Masters","R16","W","Stefanos Tsitsipas (8) d. Fernando Verdasco","6-3 6-4"],
["16/2/2020","Madrid Masters","R32","W","Stefanos Tsitsipas (8) d. Adrian Mannarino (LL)","6-2 7-5"],
["17/2/2020","Madrid Masters","R64","L","Evgeny Donskoy (Q) d. Stefanos Tsitsipas (WC)","5-7 6-4 7-6(3)"],
["18/2/2020","Lyon","F","W","Stefanos Tsitsipas (2 WC) d. Cameron Norrie","6-3 6-3"],
["19/2/2020","Lyon","SF","W","Stefanos Tsitsipas (2 WC) d. Lorenzo Musetti (AL)","4-6 6-3 6-0"],
["20/2/2020","Lyon","QF","W","Stefanos Tsitsipas (2 WC) d. Yoshihito Nishioka","6-3 6-4"],
["21/2/2020","Lyon","R16","W","Stefanos Tsitsipas (2 WC) d. Tommy Paul","6-1 6-4"],
["22/2/2020","Istanbul","R32","L","Damir Dzumhur d. Stefanos Tsitsipas (Q)","6-4 7-5"],
["23/2/2020","Indian Wells Masters","R64","L","Felix Auger Aliassime (WC) d. Stefanos Tsitsipas (9)","6-4 6-2"],
["24/2/2020","Indian Wells Masters","R64","L","Dominic Thiem (5) d. Stefanos Tsitsipas","6-2 3-6 6-3"],
["25/2/2020","Indian Wells Masters","R128","W","Stefanos Tsitsipas d. Radu Albot","7-6(2) 6-2"],
["26/2/2020","Hamburg","F","L","Andrey Rublev (5) d. Stefanos Tsitsipas (2)","6-4 3-6 7-5"],
["27/2/2020","Hamburg","SF","W","Stefanos Tsitsipas (2) d. Christian Garin","7-5 3-6 6-4"],
["28/2/2020","Hamburg","QF","W","Stefanos Tsitsipas (2) d. Dusan Lajovic","7-6(5) 6-2"],
["29/2/2020","Hamburg","R16","W","Stefanos Tsitsipas (2) d. Pablo Cuevas (Q)","7-5 6-4"],
["1/3/2020","Hamburg","R32","W","Stefanos Tsitsipas (2) d. Daniel Evans","6-3 6-1"],
["2/3/2020","Halle","R16","L","Denis Kudla (Q) d. Stefanos Tsitsipas","6-3 6-4"],
["3/3/2020","Halle","R32","W","Stefanos Tsitsipas d. Lucas Pouille (5)","6-2 7-6(3)"],
["4/3/2020","Estoril","F","W","Stefanos Tsitsipas (1) d. Pablo Cuevas (LL)","6-3 7-6(4)"],
["5/3/2020","Estoril","SF","W","Stefanos Tsitsipas (1) d. David Goffin (4)","3-6 6-4 6-4"],
["6/3/2020","Estoril","QF","W","Stefanos Tsitsipas (1) d. Joao Domingues (Q)","7-6(3) 6-4"],
["7/3/2020","Estoril","R16","W","Stefanos Tsitsipas (1) d. Guido Andreozzi","6-3 6-4"],
["8/3/2020","Estoril","SF","L","Joao Sousa d. Stefanos Tsitsipas","6-4 1-6 7-6(4)"],
["9/3/2020","Estoril","QF","W","Stefanos Tsitsipas d. Roberto Carballes Baena","6-7(2) 6-2 7-6(3)"],
["10/3/2020","Estoril","R16","W","Stefanos Tsitsipas d. Kevin Anderson (1)","6-7(3) 6-3 6-3"],
["11/3/2020","Estoril","R32","W","Stefanos Tsitsipas d. Pablo Andujar (PR)","7-6(2) 6-3"],
["12/3/2020","Dubai","F","L","Novak Djokovic (1) d. Stefanos Tsitsipas (2)","6-3 6-4"],
["13/3/2020","Dubai","SF","W","Stefanos Tsitsipas (2) d. Daniel Evans","6-2 6-3"],
["14/3/2020","Dubai","QF","W","Stefanos Tsitsipas (2) d. Jan Lennard Struff","4-6 6-4 6-4"],
["15/3/2020","Dubai","R16","W","Stefanos Tsitsipas (2) d. Alexander Bublik","7-6(1) 6-4"],
["16/3/2020","Dubai","R32","W","Stefanos Tsitsipas (2) d. Pablo Carreno Busta","7-6(1) 6-1"],
["17/3/2020","Dubai","F","L","Roger Federer (2) d. Stefanos Tsitsipas (5)","6-4 6-4"],
["18/3/2020","Dubai","SF","W","Stefanos Tsitsipas (5) d. Gael Monfils","4-6 7-6(4) 7-6(4)"],
["19/3/2020","Dubai","QF","W","Stefanos Tsitsipas (5) d. Hubert Hurkacz","7-6(4) 6-7(1) 6-1"],
["20/3/2020","Dubai","R16","W","Stefanos Tsitsipas (5) d. Egor Gerasimov (Q)","6-3 6-1"],
["21/3/2020","Dubai","R32","W","Stefanos Tsitsipas (5) d. Matthew Ebden","6-4 3-6 6-3"],
["22/3/2020","Dubai","QF","L","Malek Jaziri (WC) d. Stefanos Tsitsipas (WC)","6-4 3-6 6-3"],
["23/3/2020","Dubai","R16","W","Stefanos Tsitsipas (WC) d. Philipp Kohlschreiber (6)","4-6 6-3 6-4"],
["24/3/2020","Dubai","R32","W","Stefanos Tsitsipas (WC) d. Mikhail Kukushkin","6-2 6-7(5) 6-3"],
["25/3/2020","Doha","QF","L","Dominic Thiem (1) d. Stefanos Tsitsipas (Q)","7-5 6-4"],
["26/3/2020","Doha","R16","W","Stefanos Tsitsipas (Q) d. Richard Gasquet (5)","6-3 6-4"],
["27/3/2020","Doha","R32","W","Stefanos Tsitsipas (Q) d. Florian Mayer","4-6 7-5 6-4"],
["28/3/2020","Davis Cup WG2","RR","W","Stefanos Tsitsipas d. Jeson Patrombon","6-2 6-1"],
["29/3/2020","Davis Cup WG2","RR","W","Stefanos Tsitsipas d. Alberto Lim","6-2 6-1"],
["30/3/2020","Cincinnati Masters","SF","L","Milos Raonic d. Stefanos Tsitsipas (4)","7-6(5) 6-3"],
["31/3/2020","Cincinnati Masters","QF","WR","Stefanos Tsitsipas (4) d. Reilly Opelka","5-6 RET"],
["1/4/2020","Cincinnati Masters","R16","W","Stefanos Tsitsipas (4) d. John Isner (16)","7-6(2) 7-6(4)"],
["2/4/2020","Cincinnati Masters","R32","W","Stefanos Tsitsipas (4) d. Kevin Anderson (PR)","6-1 6-3"],
["3/4/2020","Cincinnati Masters","R32","L","Jan Lennard Struff d. Stefanos Tsitsipas (5)","6-4 6-7(5) 7-6(6)"],
["4/4/2020","Cincinnati Masters","R64","L","David Goffin (11) d. Stefanos Tsitsipas","7-5 6-3"],
["5/4/2020","Chengdu","R32","L","Jared Donaldson d. Stefanos Tsitsipas (Q)","6-7(2) 7-5 7-5"],
["6/4/2020","Canada Masters","R32","L","Hubert Hurkacz (AL) d. Stefanos Tsitsipas (4)","6-4 3-6 6-3"],
["7/4/2020","Canada Masters","F","L","Rafael Nadal (1) d. Stefanos Tsitsipas","6-2 7-6(4)"],
["8/4/2020","Canada Masters","SF","W","Stefanos Tsitsipas d. Kevin Anderson (4)","6-7(4) 6-4 7-6(7)"],
["9/4/2020","Canada Masters","QF","W","Stefanos Tsitsipas d. Alexander Zverev (2)","3-6 7-6(11) 6-4"],
["10/4/2020","Canada Masters","R16","W","Stefanos Tsitsipas d. Novak Djokovic (9)","6-3 6-7(5) 6-3"],
["11/4/2020","Canada Masters","R32","W","Stefanos Tsitsipas d. Dominic Thiem (7)","6-3 7-6(6)"],
["12/4/2020","Canada Masters","R64","W","Stefanos Tsitsipas d. Damir Dzumhur","6-3 7-6(3)"],
["13/4/2020","Beijing","F","L","Dominic Thiem (1) d. Stefanos Tsitsipas (3)","3-6 6-4 6-1"],
["14/4/2020","Beijing","SF","W","Stefanos Tsitsipas (3) d. Alexander Zverev (2)","7-6(6) 6-4"],
["15/4/2020","Beijing","QF","W","Stefanos Tsitsipas (3) d. John Isner","7-6(3) 6-3"],
["16/4/2020","Beijing","R16","W","Stefanos Tsitsipas (3) d. Nikoloz Basilashvili","4-6 6-3 6-2"],
["17/4/2020","Beijing","R32","W","Stefanos Tsitsipas (3) d. Dusan Lajovic","4-6 6-3 6-4"],
["18/4/2020","Basel","SF","L","Roger Federer (1) d. Stefanos Tsitsipas (3)","6-4 6-4"],
["19/4/2020","Basel","QF","W","Stefanos Tsitsipas (3) d. Filip Krajinovic (SE)","3-6 6-4 6-4"],
["20/4/2020","Basel","R16","W","Stefanos Tsitsipas (3) d. Ricardas Berankis (Q)","6-7(4) 6-2 6-4"],
["21/4/2020","Basel","R32","W","Stefanos Tsitsipas (3) d. Albert Ramos","6-3 7-6(6)"],
["22/4/2020","Basel","QF","L","Daniil Medvedev (7) d. Stefanos Tsitsipas (4)","6-4 3-6 6-3"],
["23/4/2020","Basel","R16","W","Stefanos Tsitsipas (4) d. Peter Gojowczyk","6-3 6-1"],
["24/4/2020","Basel","R32","W","Stefanos Tsitsipas (4) d. Jeremy Chardy","6-2 7-6(3)"],
["25/4/2020","Barcelona","F","L","Rafael Nadal (1) d. Stefanos Tsitsipas (2)","6-4 6-7(6) 7-5"],
["26/4/2020","Barcelona","SF","W","Stefanos Tsitsipas (2) d. Jannik Sinner (11)","6-3 6-3"],
["27/4/2020","Barcelona","QF","W","Stefanos Tsitsipas (2) d. Felix Auger Aliassime (10)","6-3 6-3"],
["28/4/2020","Barcelona","R16","W","Stefanos Tsitsipas (2) d. Alex De Minaur (14)","7-5 6-3"],
["29/4/2020","Barcelona","R32","W","Stefanos Tsitsipas (2) d. Jaume Munar (WC)","6-0 6-2"],
["30/4/2020","Barcelona","R16","L","Jan Lennard Struff d. Stefanos Tsitsipas (5)","6-4 3-6 6-2"],
["1/5/2020","Barcelona","R32","W","Stefanos Tsitsipas (5) d. Marton Fucsovics","6-3 6-4"],
["2/5/2020","Barcelona","F","L","Rafael Nadal (1) d. Stefanos Tsitsipas","6-2 6-1"],
["3/5/2020","Barcelona","SF","W","Stefanos Tsitsipas d. Pablo Carreno Busta (5)","7-5 6-3"],
["4/5/2020","Barcelona","QF","W","Stefanos Tsitsipas d. Dominic Thiem (3)","6-3 6-2"],
["5/5/2020","Barcelona","R16","W","Stefanos Tsitsipas d. Albert Ramos (10)","6-4 7-5"],
["6/5/2020","Barcelona","R32","W","Stefanos Tsitsipas d. Diego Sebastian Schwartzman (7)","6-2 6-1"],
["7/5/2020","Barcelona","R64","W","Stefanos Tsitsipas d. Corentin Moutet (Q)","6-4 6-1"],
["8/5/2020","Australian Open","SF","L","Daniil Medvedev (4) d. Stefanos Tsitsipas (5)","6-4 6-2 7-5"],
["9/5/2020","Australian Open","QF","W","Stefanos Tsitsipas (5) d. Rafael Nadal (2)","3-6 2-6 7-6(4) 6-4 7-5"],
["10/5/2020","Australian Open","R16","WW","Stefanos Tsitsipas (5) d. Matteo Berrettini (9)","W/O"],
["11/5/2020","Australian Open","R32","W","Stefanos Tsitsipas (5) d. Mikael Ymer","6-4 6-1 6-1"],
["12/5/2020","Australian Open","R64","W","Stefanos Tsitsipas (5) d. Thanasi Kokkinakis (WC)","6-7(5) 6-4 6-1 6-7(5) 6-4"],
["13/5/2020","Australian Open","R128","W","Stefanos Tsitsipas (5) d. Gilles Simon","6-1 6-2 6-1"],
["14/5/2020","Australian Open","R32","L","Milos Raonic (32) d. Stefanos Tsitsipas (6)","7-5 6-4 7-6(2)"],
["15/5/2020","Australian Open","R64","WW","Stefanos Tsitsipas (6) d. Philipp Kohlschreiber","W/O"],
["16/5/2020","Australian Open","R128","W","Stefanos Tsitsipas (6) d. Salvatore Caruso","6-0 6-2 6-3"],
["17/5/2020","Australian Open","SF","L","Rafael Nadal (2) d. Stefanos Tsitsipas (14)","6-2 6-4 6-0"],
["18/5/2020","Australian Open","QF","W","Stefanos Tsitsipas (14) d. Roberto Bautista Agut (22)","7-5 4-6 6-4 7-6(2)"],
["19/5/2020","Australian Open","R16","W","Stefanos Tsitsipas (14) d. Roger Federer (3)","6-7(11) 7-6(3) 7-5 7-6(5)"],
["20/5/2020","Australian Open","R32","W","Stefanos Tsitsipas (14) d. Nikoloz Basilashvili (19)","6-3 3-6 7-6(7) 6-4"],
["21/5/2020","Australian Open","R64","W","Stefanos Tsitsipas (14) d. Viktor Troicki (Q)","6-3 2-6 6-2 7-5"],
["22/5/2020","Australian Open","R128","W","Stefanos Tsitsipas (14) d. Matteo Berrettini","6-7(3) 6-4 6-3 7-6(4)"],
["23/5/2020","Australian Open","R128","L","Denis Shapovalov d. Stefanos Tsitsipas","6-1 6-3 7-6(5)"],
["24/5/2020","Auckland","R32","L","Lukas Lacko (LL) d. Stefanos Tsitsipas (WC)","6-3 6-7(5) 6-3"],
["25/5/2020","ATP Cup","RR","W","Stefanos Tsitsipas d. Roberto Bautista Agut","7-5 7-5"],
["26/5/2020","ATP Cup","RR","W","Stefanos Tsitsipas d. Alex De Minaur","6-3 7-5"],
["27/5/2020","ATP Cup","RR","W","Stefanos Tsitsipas d. Alexander Zverev","6-1 6-4"],
["28/5/2020","ATP Cup","RR","L","Denis Shapovalov d. Stefanos Tsitsipas","7-6(6) 7-6(4)"],
["29/5/2020","ATP Cup","RR","L","Nick Kyrgios d. Stefanos Tsitsipas","7-6(7) 6-7(3) 7-6(5)"],
["30/5/2020","Antwerp","SF","L","Diego Sebastian Schwartzman (4) d. Stefanos Tsitsipas (Q)","6-3 7-5"],
["31/5/2020","Antwerp","QF","W","Stefanos Tsitsipas (Q) d. David Goffin (1)","2-6 7-6(1) 7-6(4)"],
["1/6/2020","Antwerp","R16","WR","Stefanos Tsitsipas (Q) d. Ivo Karlovic","7-6(4) 5-6 RET"],
["2/6/2020","Antwerp","R32","W","Stefanos Tsitsipas (Q) d. Pablo Cuevas (6)","6-1 6-4"],
["3/6/2020","Acapulco","F","L","Alexander Zverev (2) d. Stefanos Tsitsipas (1)","6-4 7-6(3)"],
["4/6/2020","Acapulco","SF","W","Stefanos Tsitsipas (1) d. Lorenzo Musetti (Q)","6-1 6-3"],
["5/6/2020","Acapulco","QF","W","Stefanos Tsitsipas (1) d. Felix Auger Aliassime (7)","7-5 4-6 6-3"],
["6/6/2020","Acapulco","R16","W","Stefanos Tsitsipas (1) d. John Isner","6-3 6-2"],
["7/6/2020","Acapulco","R32","W","Stefanos Tsitsipas (1) d. Benoit Paire","6-3 6-1"]
];

$(document).ready(function() {
    $('#example2').DataTable( {
        data: dataSetMatches,
        columns: [
            { title: "Date" },
            { title: "Tournament" },
            { title: "Round" },
            { title: "W/L" },
            { title: "Match" },
            { title: "Score" }
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