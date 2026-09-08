/* 리치해빗 리뷰 위젯 — 제로투원 제작 2026-09-02
   하는 일
   1) 상품 카드의 "사용후기 : -465" 를 ★4.9 · 리뷰 465 로 교체
   2) 상품 상세 상단에 리뷰 요약바 + 포토리뷰 썸네일 삽입
   3) 메인 히어로 배너에 비네팅(테두리 어둡게) 적용
   PC / 모바일 동일 적용. 지우려면 스크립트태그만 삭제하면 원상복구.
*/
(function () {
  'use strict';
  var RV = {"9":{"avg":4.9,"cnt":465,"photo":312,"pics":["https://phinf.pstatic.net/checkout.phinf/20260901_14/1788221223390UWSlh_JPEG/1.jpg","https://phinf.pstatic.net/checkout.phinf/20260811_268/1786374490004N7U2j_JPEG/IMG_9140.jpeg","https://phinf.pstatic.net/checkout.phinf/20260806_170/1785980420726NDhjX_JPEG/image.jpg","https://phinf.pstatic.net/checkout.phinf/20260803_239/1785743752345Qs0Yp_JPEG/1785743742250.jpg","https://phinf.pstatic.net/checkout.phinf/20260718_41/1784368287737FAgAA_JPEG/74511.jpg","https://phinf.pstatic.net/checkout.phinf/20260716_200/1784202389364tWJLu_JPEG/IMG_1956.jpeg"]},"10":{"avg":4.9,"cnt":47,"photo":19,"pics":["https://phinf.pstatic.net/checkout.phinf/20260901_164/17882210734194hULq_JPEG/1.jpg","https://phinf.pstatic.net/checkout.phinf/20260723_231/1784816216115MnE3c_JPEG/tmp_7425667522814449909.jpg","https://phinf.pstatic.net/checkout.phinf/20260519_254/1779179069500wFQc5_JPEG/1779179055220.jpg","https://phinf.pstatic.net/checkout.phinf/20260514_83/1778744713060xnBv6_PNG/EC8AA4ED81ACEBA6B0EC83B7202026-05-1420164503.png","https://phinf.pstatic.net/checkout.phinf/20260512_7/1778588739758d3pw6_JPEG/image.jpg","https://phinf.pstatic.net/checkout.phinf/20260222_223/1771766969069n6svp_JPEG/1771766956594.jpg"]},"46":{"avg":4.9,"cnt":107,"photo":61,"pics":["https://phinf.pstatic.net/checkout.phinf/20260830_94/1788100638961yhogy_JPEG/image.jpg","https://phinf.pstatic.net/checkout.phinf/20260813_124/1786611738475HkjId_JPEG/1000022158.jpg","https://phinf.pstatic.net/checkout.phinf/20260810_246/1786329955523AfzYW_JPEG/1786329944396.jpg","https://phinf.pstatic.net/checkout.phinf/20260722_236/1784683792276fCu1B_JPEG/1784675761074.jpg","https://phinf.pstatic.net/checkout.phinf/20260717_176/1784296844527iXQCw_JPEG/1000023160.jpg","https://phinf.pstatic.net/checkout.phinf/20260717_95/1784246712332oE1Hx_JPEG/IMG_4344.jpeg"]},"11":{"avg":4.9,"cnt":227,"photo":140,"pics":["https://phinf.pstatic.net/checkout.phinf/20260822_106/1787397893415lybVc_JPEG/PayApp_20260822_202437_8887557403428892655.jpg","https://phinf.pstatic.net/checkout.phinf/20260726_28/1785037825872r3pCb_JPEG/1785037793328.jpg","https://phinf.pstatic.net/checkout.phinf/20260710_126/1783657947851sLun6_JPEG/74261.jpg","https://phinf.pstatic.net/checkout.phinf/20260710_35/17836568841572o05t_JPEG/1000038692.jpg","https://phinf.pstatic.net/checkout.phinf/20260705_145/1783237268192dfmFn_JPEG/1000033587.jpg","https://phinf.pstatic.net/checkout.phinf/20260625_173/1782348218184G076D_JPEG/IMG_7177.jpeg"]},"47":{"avg":4.8,"cnt":12,"photo":8,"pics":["https://phinf.pstatic.net/checkout.phinf/20260812_43/178650286059338H2q_JPEG/20260807_084150.jpg","https://phinf.pstatic.net/checkout.phinf/20260807_24/1786078703426O384E_JPEG/KakaoTalk_20260807_135746999_05.jpg","https://phinf.pstatic.net/checkout.phinf/20260802_17/1785632125789shOuC_JPEG/IMG_2228.jpeg","https://phinf.pstatic.net/checkout.phinf/20260730_193/1785404395454ABAn0_JPEG/KakaoTalk_20260730_183713543.jpg","https://phinf.pstatic.net/checkout.phinf/20260722_80/17847070330959E0q9_JPEG/IMG_9237.jpeg","https://phinf.pstatic.net/checkout.phinf/20260625_61/1782348321734bN72T_JPEG/IMG_7177.jpeg"]}};
  var GAL = {"9":[{"u":"https://phinf.pstatic.net/checkout.phinf/20260901_14/1788221223390UWSlh_JPEG/1.jpg","a":"1764","d":"2026-09-01"},{"u":"https://phinf.pstatic.net/checkout.phinf/20260811_268/1786374490004N7U2j_JPEG/IMG_9140.jpeg","a":"1757","d":"2026-08-11"},{"u":"https://phinf.pstatic.net/checkout.phinf/20260806_170/1785980420726NDhjX_JPEG/image.jpg","a":"1751","d":"2026-08-06"},{"u":"https://phinf.pstatic.net/checkout.phinf/20260803_239/1785743752345Qs0Yp_JPEG/1785743742250.jpg","a":"1747","d":"2026-08-03"},{"u":"https://phinf.pstatic.net/checkout.phinf/20260718_41/1784368287737FAgAA_JPEG/74511.jpg","a":"1737","d":"2026-07-18"},{"u":"https://phinf.pstatic.net/checkout.phinf/20260716_200/1784202389364tWJLu_JPEG/IMG_1956.jpeg","a":"1734","d":"2026-07-16"},{"u":"https://phinf.pstatic.net/checkout.phinf/20260713_295/1783905800720YrfPD_JPEG/tmp_5541601198455932236.jpg","a":"1730","d":"2026-07-13"},{"u":"https://phinf.pstatic.net/checkout.phinf/20260713_170/1783899494730qGGvt_JPEG/image.jpg","a":"1729","d":"2026-07-13"},{"u":"https://phinf.pstatic.net/checkout.phinf/20260711_209/1783732156452CqbeB_JPEG/8802.jpg","a":"1727","d":"2026-07-11"},{"u":"https://phinf.pstatic.net/checkout.phinf/20260624_155/1782312743748iWMdV_JPEG/image.jpg","a":"1715","d":"2026-06-24"},{"u":"https://phinf.pstatic.net/checkout.phinf/20260624_264/1782264732407xodKp_JPEG/IMG_1606.jpeg","a":"1714","d":"2026-06-24"},{"u":"https://phinf.pstatic.net/checkout.phinf/20260618_49/1781746699201nQEEB_JPEG/1000026959.jpg","a":"1713","d":"2026-06-18"},{"u":"https://phinf.pstatic.net/checkout.phinf/20260610_246/1781045652405VAdGG_JPEG/1781045616859.jpg","a":"1708","d":"2026-06-10"},{"u":"https://phinf.pstatic.net/checkout.phinf/20260604_49/178055500610191YmG_JPEG/1000109380.jpg","a":"1707","d":"2026-06-04"},{"u":"https://phinf.pstatic.net/checkout.phinf/20260531_75/1780237251652dlQok_JPEG/1000020712.jpg","a":"1704","d":"2026-05-31"},{"u":"https://phinf.pstatic.net/checkout.phinf/20260530_286/1780141134585lSJf3_JPEG/1000027876.jpg","a":"1703","d":"2026-05-30"},{"u":"https://phinf.pstatic.net/checkout.phinf/20260530_82/1780110206678gUjI1_JPEG/IMG_5096.jpeg","a":"1702","d":"2026-05-30"},{"u":"https://phinf.pstatic.net/checkout.phinf/20260527_43/1779878225461kGwSA_JPEG/IMG_9845.jpeg","a":"1700","d":"2026-05-27"},{"u":"https://phinf.pstatic.net/checkout.phinf/20260518_178/1779052661508UVyNK_JPEG/image.jpg","a":"1693","d":"2026-05-18"},{"u":"https://phinf.pstatic.net/checkout.phinf/20260511_95/1778451224158xKdwj_JPEG/IMG_8433.jpeg","a":"1686","d":"2026-05-11"},{"u":"https://phinf.pstatic.net/checkout.phinf/20260507_136/1778131669093L0HCg_JPEG/image.jpg","a":"1683","d":"2026-05-07"},{"u":"https://phinf.pstatic.net/checkout.phinf/20260505_286/1777990202481DtMlp_JPEG/image.jpg","a":"1681","d":"2026-05-05"},{"u":"https://phinf.pstatic.net/checkout.phinf/20260430_295/1777559740125xQ352_JPEG/IMG_4653.jpeg","a":"1676","d":"2026-04-30"},{"u":"https://phinf.pstatic.net/checkout.phinf/20260429_88/1777468791566ffNCz_JPEG/IMG_3345.jpeg","a":"1675","d":"2026-04-29"},{"u":"https://phinf.pstatic.net/checkout.phinf/20260427_287/1777276867447gxpTf_JPEG/KakaoTalk_20260427_170040303.jpg","a":"1674","d":"2026-04-27"},{"u":"https://phinf.pstatic.net/checkout.phinf/20260426_7/1777170756694CRQyC_JPEG/IMG_2287.jpeg","a":"1673","d":"2026-04-26"},{"u":"https://phinf.pstatic.net/checkout.phinf/20260424_92/1776992267471EdtUz_JPEG/image.jpg","a":"1671","d":"2026-04-24"},{"u":"https://phinf.pstatic.net/checkout.phinf/20260422_187/1776787449168xfKg7_JPEG/image.jpg","a":"1669","d":"2026-04-22"},{"u":"https://phinf.pstatic.net/checkout.phinf/20260410_17/1775796931782E0cHI_JPEG/KakaoTalk_20260410_135516071.jpg","a":"1659","d":"2026-04-10"},{"u":"https://phinf.pstatic.net/checkout.phinf/20260410_77/1775775580135gH8jR_JPEG/EC84B1EAB3B5ED948CEB9E98EB8488.jpg","a":"1657","d":"2026-04-10"}],"10":[{"u":"https://phinf.pstatic.net/checkout.phinf/20260901_164/17882210734194hULq_JPEG/1.jpg","a":"1763","d":"2026-09-01"},{"u":"https://phinf.pstatic.net/checkout.phinf/20260723_231/1784816216115MnE3c_JPEG/tmp_7425667522814449909.jpg","a":"1740","d":"2026-07-23"},{"u":"https://phinf.pstatic.net/checkout.phinf/20260519_254/1779179069500wFQc5_JPEG/1779179055220.jpg","a":"1694","d":"2026-05-19"},{"u":"https://phinf.pstatic.net/checkout.phinf/20260514_83/1778744713060xnBv6_PNG/EC8AA4ED81ACEBA6B0EC83B7202026-05-1420164503.png","a":"1691","d":"2026-05-14"},{"u":"https://phinf.pstatic.net/checkout.phinf/20260512_7/1778588739758d3pw6_JPEG/image.jpg","a":"1689","d":"2026-05-12"},{"u":"https://phinf.pstatic.net/checkout.phinf/20260222_241/1771766901707NE0B5_JPEG/1771766870954.jpg","a":"1615","d":"2026-02-22"},{"u":"https://phinf.pstatic.net/checkout.phinf/20260222_241/1771766901707NE0B5_JPEG/1771766870954.jpg","a":"1614","d":"2026-02-22"},{"u":"https://phinf.pstatic.net/checkout.phinf/20260222_238/1771766809413XzlbA_JPEG/1771766799774.jpg","a":"1612","d":"2026-02-22"},{"u":"https://phinf.pstatic.net/checkout.phinf/20260211_281/1770815956885KQlhL_JPEG/17708159431295318225905979915373.jpg","a":"1599","d":"2026-02-11"},{"u":"https://phinf.pstatic.net/checkout.phinf/20250406_87/1743929281877aAdpD_JPEG/image.jpg","a":"1276","d":"2025-04-06"},{"u":"https://phinf.pstatic.net/checkout.phinf/20250406_28/1743929219468Gcnzq_JPEG/image.jpg","a":"1275","d":"2025-04-06"},{"u":"https://phinf.pstatic.net/checkout.phinf/20250331_257/1743388727164LyVng_JPEG/1743388710164.jpg","a":"1265","d":"2025-03-31"},{"u":"https://phinf.pstatic.net/checkout.phinf/20250328_11/1743114768054Ahjbr_JPEG/1743114753535.jpg","a":"1261","d":"2025-03-28"},{"u":"https://phinf.pstatic.net/checkout.phinf/20250322_195/1742619056080v6t3c_JPEG/image.jpg","a":"1255","d":"2025-03-22"},{"u":"https://phinf.pstatic.net/checkout.phinf/20250314_237/1741926820296XvYtX_JPEG/image.jpg","a":"1247","d":"2025-03-14"},{"u":"https://phinf.pstatic.net/checkout.phinf/20241111_138/1731317184808mQNP6_JPEG/1731317169370.jpg","a":"1140","d":"2024-11-11"},{"u":"https://phinf.pstatic.net/checkout.phinf/20241031_159/1730376635168AoMH7_JPEG/image.jpg","a":"1136","d":"2024-10-31"},{"u":"https://phinf.pstatic.net/checkout.phinf/20240930_92/1727657927383v53s6_JPEG/IMG_8932.jpeg","a":"1130","d":"2024-09-30"},{"u":"https://phinf.pstatic.net/checkout.phinf/20240707_86/172033792938678vJW_JPEG/image.jpg","a":"1115","d":"2024-07-07"}],"46":[{"u":"https://phinf.pstatic.net/checkout.phinf/20260830_94/1788100638961yhogy_JPEG/image.jpg","a":"1762","d":"2026-08-30"},{"u":"https://phinf.pstatic.net/checkout.phinf/20260813_124/1786611738475HkjId_JPEG/1000022158.jpg","a":"1759","d":"2026-08-13"},{"u":"https://phinf.pstatic.net/checkout.phinf/20260810_246/1786329955523AfzYW_JPEG/1786329944396.jpg","a":"1755","d":"2026-08-10"},{"u":"https://phinf.pstatic.net/checkout.phinf/20260722_236/1784683792276fCu1B_JPEG/1784675761074.jpg","a":"1738","d":"2026-07-22"},{"u":"https://phinf.pstatic.net/checkout.phinf/20260717_176/1784296844527iXQCw_JPEG/1000023160.jpg","a":"1736","d":"2026-07-17"},{"u":"https://phinf.pstatic.net/checkout.phinf/20260717_95/1784246712332oE1Hx_JPEG/IMG_4344.jpeg","a":"1735","d":"2026-07-17"},{"u":"https://phinf.pstatic.net/checkout.phinf/20260716_30/1784169789875x1ahf_JPEG/1784169735806.jpg","a":"1733","d":"2026-07-16"},{"u":"https://phinf.pstatic.net/checkout.phinf/20260712_234/17838537345399rUHe_JPEG/image.jpg","a":"1728","d":"2026-07-12"},{"u":"https://phinf.pstatic.net/checkout.phinf/20260708_58/1783507149044B6NWe_JPEG/image.jpg","a":"1723","d":"2026-07-08"},{"u":"https://phinf.pstatic.net/checkout.phinf/20260701_216/1782893792883o9WvF_JPEG/1000034200.jpg","a":"1720","d":"2026-07-01"},{"u":"https://phinf.pstatic.net/checkout.phinf/20260626_128/1782460259642XhkTr_JPEG/1782460242103509291810162362562.jpg","a":"1718","d":"2026-06-26"},{"u":"https://phinf.pstatic.net/checkout.phinf/20260616_190/1781618558792qGwQo_JPEG/1000027913.jpg","a":"1711","d":"2026-06-16"},{"u":"https://phinf.pstatic.net/checkout.phinf/20260612_174/1781230773844HFJ2e_JPEG/IMG_3517.jpeg","a":"1709","d":"2026-06-12"},{"u":"https://phinf.pstatic.net/checkout.phinf/20260526_173/1779804055567dTVmB_JPEG/IMG_6047.jpeg","a":"1699","d":"2026-05-26"},{"u":"https://phinf.pstatic.net/checkout.phinf/20260520_228/1779261740529EPidj_JPEG/image.jpg","a":"1696","d":"2026-05-20"},{"u":"https://phinf.pstatic.net/checkout.phinf/20260515_291/1778832981967ACfyL_JPEG/1778832962399.jpg","a":"1692","d":"2026-05-15"},{"u":"https://phinf.pstatic.net/checkout.phinf/20260512_277/1778563332352tVTPl_JPEG/1000027574.jpg","a":"1687","d":"2026-05-12"},{"u":"https://phinf.pstatic.net/checkout.phinf/20260509_98/17783349961084m6BV_JPEG/1778334988612798713226866781149.jpg","a":"1684","d":"2026-05-09"},{"u":"https://phinf.pstatic.net/checkout.phinf/20260328_14/1774693872770l1SUb_JPEG/1000071605.jpg","a":"1643","d":"2026-03-28"},{"u":"https://phinf.pstatic.net/checkout.phinf/20260302_157/1772462413653QEE8Y_JPEG/image.jpg","a":"1627","d":"2026-03-02"},{"u":"https://phinf.pstatic.net/checkout.phinf/20260225_183/1771945415069jcRqJ_JPEG/image.jpg","a":"1621","d":"2026-02-25"},{"u":"https://phinf.pstatic.net/checkout.phinf/20260223_31/1771815682637sLcQ2_JPEG/63530.jpg","a":"1618","d":"2026-02-23"},{"u":"https://phinf.pstatic.net/checkout.phinf/20260221_237/1771613341907IGAXL_JPEG/1000067754.jpg","a":"1609","d":"2026-02-21"},{"u":"https://phinf.pstatic.net/checkout.phinf/20260220_287/1771579483222wq8ka_JPEG/IMG_3816.jpeg","a":"1608","d":"2026-02-20"},{"u":"https://phinf.pstatic.net/checkout.phinf/20260219_73/1771505730347ukz0S_JPEG/20260219_210315.jpg","a":"1606","d":"2026-02-19"},{"u":"https://phinf.pstatic.net/checkout.phinf/20260214_5/1771038770164yR2tC_JPEG/1000040901.jpg","a":"1602","d":"2026-02-14"},{"u":"https://phinf.pstatic.net/checkout.phinf/20260129_174/1769685763068Si5ak_JPEG/1000032726.jpg","a":"1586","d":"2026-01-29"},{"u":"https://phinf.pstatic.net/checkout.phinf/20260127_232/1769523245779vkDTC_JPEG/54316.jpg","a":"1584","d":"2026-01-27"},{"u":"https://phinf.pstatic.net/checkout.phinf/20260118_87/1768714753084Eha9E_JPEG/IMG_0227.jpeg","a":"1567","d":"2026-01-18"},{"u":"https://phinf.pstatic.net/checkout.phinf/20251229_243/1767009546432dIH7g_JPEG/1000059566.jpg","a":"1511","d":"2025-12-29"}],"11":[{"u":"https://phinf.pstatic.net/checkout.phinf/20260822_106/1787397893415lybVc_JPEG/PayApp_20260822_202437_8887557403428892655.jpg","a":"1761","d":"2026-08-22"},{"u":"https://phinf.pstatic.net/checkout.phinf/20260726_28/1785037825872r3pCb_JPEG/1785037793328.jpg","a":"1741","d":"2026-07-26"},{"u":"https://phinf.pstatic.net/checkout.phinf/20260710_126/1783657947851sLun6_JPEG/74261.jpg","a":"1725","d":"2026-07-10"},{"u":"https://phinf.pstatic.net/checkout.phinf/20260710_35/17836568841572o05t_JPEG/1000038692.jpg","a":"1724","d":"2026-07-10"},{"u":"https://phinf.pstatic.net/checkout.phinf/20260705_145/1783237268192dfmFn_JPEG/1000033587.jpg","a":"1722","d":"2026-07-05"},{"u":"https://phinf.pstatic.net/checkout.phinf/20260625_173/1782348218184G076D_JPEG/IMG_7177.jpeg","a":"1716","d":"2026-06-25"},{"u":"https://phinf.pstatic.net/checkout.phinf/20260512_40/1778588638314gBp8x_JPEG/image.jpg","a":"1688","d":"2026-05-12"},{"u":"https://phinf.pstatic.net/checkout.phinf/20260502_124/177771927567342ysk_JPEG/17777192352498900374695502575407.jpg","a":"1680","d":"2026-05-02"},{"u":"https://phinf.pstatic.net/checkout.phinf/20260410_178/1775775771410yfjpA_JPEG/EBA6ACEB94A9EB85B8ED8AB8.jpg","a":"1658","d":"2026-04-10"},{"u":"https://phinf.pstatic.net/checkout.phinf/20260407_85/1775568399672tOA6U_JPEG/1000045025.jpg","a":"1656","d":"2026-04-07"},{"u":"https://phinf.pstatic.net/checkout.phinf/20260407_73/1775531982372scJtY_JPEG/1775531959487.jpg","a":"1655","d":"2026-04-07"},{"u":"https://phinf.pstatic.net/checkout.phinf/20260404_259/1775283295920tGvai_JPEG/IMG_2925.jpg","a":"1653","d":"2026-04-04"},{"u":"https://phinf.pstatic.net/checkout.phinf/20260403_102/1775168756276TyYDe_JPEG/IMG_3965.jpeg","a":"1646","d":"2026-04-03"},{"u":"https://phinf.pstatic.net/checkout.phinf/20260315_110/1773562030765K14sj_JPEG/1773562004274.jpg","a":"1634","d":"2026-03-15"},{"u":"https://phinf.pstatic.net/checkout.phinf/20260313_71/1773358299626yPQRV_JPEG/1000071447.jpg","a":"1633","d":"2026-03-13"},{"u":"https://phinf.pstatic.net/checkout.phinf/20260228_184/1772277835261hQCLU_JPEG/1000012230.jpg","a":"1625","d":"2026-02-28"},{"u":"https://phinf.pstatic.net/checkout.phinf/20260227_248/1772182099033JQEFY_JPEG/1000069715.jpg","a":"1623","d":"2026-02-27"},{"u":"https://phinf.pstatic.net/checkout.phinf/20260207_26/17704344610048qP3Y_JPEG/1000060260.jpg","a":"1593","d":"2026-02-07"},{"u":"https://phinf.pstatic.net/checkout.phinf/20260117_168/1768660916729xTI9r_JPEG/IMG_6178.jpeg","a":"1566","d":"2026-01-17"},{"u":"https://phinf.pstatic.net/checkout.phinf/20260116_269/1768559161321HGwHh_JPEG/1768559141464.jpg","a":"1564","d":"2026-01-16"},{"u":"https://phinf.pstatic.net/checkout.phinf/20260109_4/1767918447343CPQIG_JPEG/1767918437153.jpg","a":"1535","d":"2026-01-09"},{"u":"https://phinf.pstatic.net/checkout.phinf/20260104_16/1767523218837EIV9K_JPEG/1767523214276.jpg","a":"1528","d":"2026-01-04"},{"u":"https://phinf.pstatic.net/checkout.phinf/20260103_171/1767450506369OPpAi_JPEG/image.jpg","a":"1523","d":"2026-01-03"},{"u":"https://phinf.pstatic.net/image.nmv/shopnbuyer_2025_12_28_1821/pLej8aT4AC_03.jpg","a":"1506","d":"2025-12-28"},{"u":"https://phinf.pstatic.net/checkout.phinf/20251226_5/1766732820552XIVbX_JPEG/1766732813572.jpg","a":"1502","d":"2025-12-26"},{"u":"https://phinf.pstatic.net/checkout.phinf/20251225_60/1766621001787PR9uy_JPEG/1000019361.jpg","a":"1494","d":"2025-12-25"},{"u":"https://phinf.pstatic.net/checkout.phinf/20251216_114/1765851432027bG5lR_JPEG/image.jpg","a":"1459","d":"2025-12-16"},{"u":"https://phinf.pstatic.net/checkout.phinf/20251212_35/1765543910357h6oxu_JPEG/1765543901124.jpg","a":"1440","d":"2025-12-12"},{"u":"https://phinf.pstatic.net/checkout.phinf/20251124_274/1763964169769TjKLb_JPEG/IMG_6270.jpeg","a":"1378","d":"2025-11-24"},{"u":"https://phinf.pstatic.net/checkout.phinf/20251118_2/1763453861938VixlX_JPEG/image.jpg","a":"1376","d":"2025-11-18"}],"47":[{"u":"https://phinf.pstatic.net/checkout.phinf/20260812_43/178650286059338H2q_JPEG/20260807_084150.jpg","a":"1758","d":"2026-08-12"},{"u":"https://phinf.pstatic.net/checkout.phinf/20260807_24/1786078703426O384E_JPEG/KakaoTalk_20260807_135746999_05.jpg","a":"1752","d":"2026-08-07"},{"u":"https://phinf.pstatic.net/checkout.phinf/20260802_17/1785632125789shOuC_JPEG/IMG_2228.jpeg","a":"1746","d":"2026-08-02"},{"u":"https://phinf.pstatic.net/checkout.phinf/20260730_193/1785404395454ABAn0_JPEG/KakaoTalk_20260730_183713543.jpg","a":"1745","d":"2026-07-30"},{"u":"https://phinf.pstatic.net/checkout.phinf/20260722_80/17847070330959E0q9_JPEG/IMG_9237.jpeg","a":"1739","d":"2026-07-22"},{"u":"https://phinf.pstatic.net/checkout.phinf/20260625_61/1782348321734bN72T_JPEG/IMG_7177.jpeg","a":"1717","d":"2026-06-25"},{"u":"https://phinf.pstatic.net/checkout.phinf/20260519_57/1779179255609t85La_JPEG/1779179229146.jpg","a":"1695","d":"2026-05-19"},{"u":"https://phinf.pstatic.net/checkout.phinf/20260513_6/17786409506065gNK8_JPEG/1778640937562.jpg","a":"1690","d":"2026-05-13"}]};
  var BOARD = '상품-사용후기';

  /* 스킨 미리보기(/skin-skin30/...)에서 몰 안 링크를 그냥 '/xxx' 로 걸면
     미리보기를 벗어나 라이브 스킨으로 튄다(헤더가 옛 디자인으로 바뀜).
     미리보기일 때만 그 접두사를 유지한다. 대표디자인 전환 후엔 자동으로 빈 문자열이 된다. */
  var SKINBASE = (function () {
    var m = /^\/(skin-skin\d+)(\/|$)/.exec(location.pathname);
    return m ? '/' + m[1] : '';
  })();
  function url(p) { return SKINBASE + p; }

  function articleUrl(no) {
    return url('/article/' + encodeURIComponent(BOARD) + '/4/' + no + '/?no=' + no + '&board_no=4&spread_flag=T');
  }

  /* 리뷰 위치로 이동.
     ※ 탭 링크를 click() 하면 스킨 자체 핸들러가 가로채서 엉뚱한 데로 간다(실측).
        #prdReview 는 이미 페이지에 펼쳐져 있으므로 좌표로 직접 스크롤하는 게 확실하다. */
  function gotoReview(e) {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
      if (e.stopImmediatePropagation) e.stopImmediatePropagation();
    }
    var t = document.getElementById('prdReview') ||
            document.querySelector('.xans-product-review') ||
            document.getElementById('review');
    if (!t) return;
    function jump() {
      var y = t.getBoundingClientRect().top + (window.pageYOffset || document.documentElement.scrollTop) - 80;
      window.scrollTo(0, y);
    }
    /* 스킨의 앵커 핸들러가 뒤늦게 스크롤을 되돌리는 일이 있어 한 번 더 확정한다 */
    jump();
    setTimeout(jump, 120);
    setTimeout(jump, 400);
  }

  /* ---------- CSS ---------- */
  var CSS = [
    '.z21-rv{display:inline-flex;align-items:center;gap:5px;vertical-align:middle}',
    '.z21-stars{position:relative;display:inline-block;font-size:13px;line-height:1;letter-spacing:1px;color:#e2ded7;white-space:nowrap}',
    '.z21-stars::before{content:"\\2605\\2605\\2605\\2605\\2605"}',
    '.z21-stars i{position:absolute;left:0;top:0;overflow:hidden;white-space:nowrap;color:#f0a500}',
    '.z21-stars i::before{content:"\\2605\\2605\\2605\\2605\\2605"}',
    '.z21-score{font-size:12px;font-weight:700;color:#222;letter-spacing:-.2px}',
    '.z21-cnt{font-size:12px;color:#8a8a8a;font-style:normal;letter-spacing:-.3px}',
    '.z21-photo{font-size:11px;color:#b08d57;font-style:normal;letter-spacing:-.3px}',

    /* 상세 상단 요약바 */
    '.z21-sum{margin:14px 0 18px;padding:14px 16px;border:1px solid #ece7e0;border-radius:10px;background:#fbf9f6}',
    '.z21-sum__head{display:flex;align-items:center;flex-wrap:wrap;gap:8px}',
    '.z21-sum .z21-stars{font-size:17px;letter-spacing:2px}',
    '.z21-sum__score{font-size:18px;font-weight:700;color:#1d1d1d;line-height:1}',
    '.z21-sum__cnt{font-size:13px;color:#6d6d6d}',
    '.z21-sum__link{margin-left:auto;font-size:13px;color:#8a6d3b;text-decoration:underline;white-space:nowrap;cursor:pointer}',
    '.z21-sum__pics{display:grid;grid-template-columns:repeat(6,1fr);gap:6px;margin-top:12px}',
    '.z21-sum__pics > *{display:block;position:relative;padding-top:100%;overflow:hidden;border-radius:6px;background:#efeae3;cursor:pointer}',
    '.z21-sum__pics img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block}',

    /* 리뷰 영역 포토 갤러리 */
    '.z21-gal{margin:0 0 26px}',
    '.z21-gal__head{display:flex;align-items:baseline;gap:8px;margin:0 0 12px;padding-bottom:10px;border-bottom:1px solid #e8e3db}',
    '.z21-gal__head b{font-size:16px;font-weight:700;color:#1d1d1d;letter-spacing:-.3px}',
    '.z21-gal__head span{font-size:12px;color:#8a8a8a}',
    '.z21-gal__grid{display:grid;grid-template-columns:repeat(6,1fr);gap:8px}',
    '.z21-gal__grid a{display:block;position:relative;padding-top:100%;overflow:hidden;border-radius:8px;background:#efeae3}',
    '.z21-gal__grid img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block;transition:transform .25s}',
    '.z21-gal__grid a:hover img{transform:scale(1.06)}',

    /* 오우이 교체 히어로 */
    '.z21-oh{position:relative;width:100%;height:600px;overflow:hidden;background:#1b1b1b}',
    /* object-position 을 위쪽으로 당겨야 인물 머리가 안 잘린다 (기본 50% 50%면 잘림) */
    '.z21-oh__pic,.z21-oh__pic img{display:block;width:100%;height:100%;object-fit:cover;object-position:50% 18%}',
    '.z21-oh__scrim{position:absolute;left:0;top:0;right:0;bottom:0;',
    'background:linear-gradient(90deg,rgba(0,0,0,.72) 0%,rgba(0,0,0,.45) 42%,rgba(0,0,0,.12) 70%,rgba(0,0,0,.35) 100%)}',
    '.z21-oh__in{position:absolute;left:8%;top:50%;transform:translateY(-50%);max-width:520px;color:#fff}',
    '.z21-oh__eb{display:block;font-size:12px;letter-spacing:.22em;opacity:.8;margin-bottom:14px}',
    '.z21-oh__t{display:block;font-size:44px;line-height:1.28;font-weight:700;letter-spacing:-.5px}',
    '.z21-oh__s{display:block;margin-top:16px;font-size:15px;line-height:1.6;opacity:.88}',
    '.z21-oh__btn{display:inline-block;margin-top:28px;padding:13px 30px;background:#fff;color:#141414;',
    'font-size:14px;font-weight:600;text-decoration:none;border-radius:2px}',
    '.z21-oh__btn:hover{background:#f0a500;color:#fff}',

    /* 리뷰 신뢰 띠배너 */
    '.z21-tr{background:#fbf9f6;padding:44px 0;margin:0}',
    '.z21-tr__in{max-width:1230px;margin:0 auto;padding:0 20px}',
    '.z21-tr__head{display:flex;align-items:center;gap:10px;flex-wrap:wrap;justify-content:center}',
    '.z21-tr__head b{font-size:26px;font-weight:700;color:#1d1d1d;line-height:1}',
    '.z21-tr__head span{font-size:14px;color:#6d6d6d}',
    '.z21-tr .z21-stars.big{font-size:24px;letter-spacing:3px}',
    '.z21-tr__pics{display:grid;grid-template-columns:repeat(10,1fr);gap:8px;margin-top:22px}',
    '.z21-tr__pics a{display:block;position:relative;padding-top:100%;overflow:hidden;border-radius:8px;background:#efeae3}',
    '.z21-tr__pics img{position:absolute;left:0;top:0;width:100%;height:100%;object-fit:cover;display:block}',

    /* BEST PICK 별점 줄 */
    '.z21-pickrv{display:flex;align-items:center;gap:6px;margin:6px 0 2px}',
    '.z21-pickrv .z21-stars{font-size:14px;letter-spacing:1px}',
    '.z21-pickrv b{font-size:13px;font-weight:700;color:#222}',
    '.z21-pickrv span{font-size:12px;color:#8a8a8a}',
    '.z21-pickrv em{font-size:11px;color:#b08d57;font-style:normal}',

    /* 빈 카테고리 안내 */
    '.z21-empty{max-width:640px;margin:60px auto;padding:44px 28px;text-align:center;',
    'border:1px solid #ece7e0;border-radius:14px;background:#fbf9f6}',
    '.z21-empty strong{display:block;font-size:20px;font-weight:700;color:#1d1d1d;margin-bottom:12px}',
    '.z21-empty p{font-size:14px;line-height:1.7;color:#6d6d6d;margin:0 0 24px}',
    '.z21-empty a{display:inline-block;padding:12px 26px;background:#14120f;color:#fff;',
    'border-radius:999px;font-size:13px;font-weight:600;text-decoration:none}',

    /* 브랜드 스토리 섹션 */
    '.z21-st{background:#14120f;color:#fff;padding:78px 0}',
    '.z21-st__in{max-width:1230px;margin:0 auto;padding:0 20px;text-align:center}',
    '.z21-st__eb{display:block;font-size:12px;letter-spacing:.24em;color:#c8a86b;margin-bottom:16px}',
    '.z21-st__t{display:block;font-size:34px;font-weight:700;letter-spacing:-.6px;margin-bottom:26px}',
    '.z21-st__body{max-width:660px;margin:0 auto}',
    '.z21-st__body p{font-size:15px;line-height:1.85;color:rgba(255,255,255,.76);margin:0 0 12px}',
    '.z21-st__stats{display:flex;justify-content:center;gap:52px;flex-wrap:wrap;margin:38px 0 32px}',
    '.z21-st__stats div{text-align:center}',
    '.z21-st__stats b{display:block;font-size:28px;font-weight:700;color:#fff;line-height:1.2}',
    '.z21-st__stats span{display:block;font-size:12px;color:rgba(255,255,255,.55);margin-top:6px}',
    '.z21-st__btn{display:inline-block;padding:13px 30px;border:1px solid rgba(255,255,255,.4);',
    'border-radius:999px;color:#fff;font-size:13px;font-weight:600;text-decoration:none}',
    '.z21-st__btn:hover{background:#fff;color:#14120f}',

    /* 플로팅 문의 버튼 */
    '.z21-fab{position:fixed;right:22px;bottom:22px;z-index:900;display:flex;flex-direction:column;gap:10px}',
    '.z21-fab__b{display:flex;align-items:center;gap:8px;padding:11px 16px;border-radius:999px;',
    'font-size:13px;font-weight:600;text-decoration:none;letter-spacing:-.3px;',
    'box-shadow:0 4px 14px rgba(0,0,0,.16);transition:transform .18s,box-shadow .18s}',
    '.z21-fab__b:hover{transform:translateY(-2px);box-shadow:0 8px 20px rgba(0,0,0,.22)}',
    '.z21-fab__b svg{width:18px;height:18px;flex:none}',
    '.z21-fab__k{background:#FEE500;color:#191600}',
    '.z21-fab__n{background:#1d1d1d;color:#fff}',

    /* 히어로 비네팅 */
    '.z21-hero{position:relative}',
    '.z21-hero::after{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;z-index:2;',
    'background:radial-gradient(125% 95% at 50% 42%,rgba(0,0,0,0) 42%,rgba(0,0,0,.16) 76%,rgba(0,0,0,.40) 100%)}',

    '@media (max-width:767px){',
    '.z21-stars{font-size:12px}.z21-score,.z21-cnt{font-size:11px}.z21-photo{display:none}',
    '.z21-sum{margin:12px 0 16px;padding:12px 13px;border-radius:8px}',
    '.z21-sum .z21-stars{font-size:15px}.z21-sum__score{font-size:16px}',
    '.z21-sum__link{margin-left:0;width:100%;text-align:right}',
    '.z21-sum__pics{grid-template-columns:repeat(4,1fr)}',
    '.z21-gal__grid{grid-template-columns:repeat(3,1fr);gap:6px}',
    '.z21-gal__head b{font-size:15px}',
    '.z21-oh{height:auto;aspect-ratio:720/767}',
    '.z21-oh__pic img{object-position:50% 12%}',
    '.z21-oh__in{left:6%;right:6%;max-width:none}',
    '.z21-oh__t{font-size:30px}',
    '.z21-oh__s{font-size:14px;margin-top:12px}',
    '.z21-oh__btn{margin-top:20px;padding:12px 24px;font-size:13px}',
    '.z21-oh__scrim{background:linear-gradient(180deg,rgba(0,0,0,.30) 0%,rgba(0,0,0,.15) 35%,rgba(0,0,0,.70) 100%)}',
    '.z21-tr{padding:30px 0}',
    '.z21-tr__head b{font-size:22px}.z21-tr__head span{font-size:12px;width:100%;text-align:center}',
    '.z21-tr .z21-stars.big{font-size:20px}',
    '.z21-tr__pics{grid-template-columns:repeat(5,1fr);gap:6px}',
    '.z21-empty{margin:36px 16px;padding:32px 20px}',
    '.z21-st{padding:52px 0}',
    '.z21-st__t{font-size:25px;margin-bottom:20px}',
    '.z21-st__body p{font-size:14px;line-height:1.8}',
    '.z21-st__stats{gap:26px;margin:28px 0 24px}',
    '.z21-st__stats b{font-size:22px}',
    '.z21-fab{right:12px;bottom:14px;gap:8px}',
    '.z21-fab__b{padding:10px 13px;font-size:12px}',
    '.z21-fab__b svg{width:16px;height:16px}',
    '.z21-hero::after{background:radial-gradient(140% 100% at 50% 45%,rgba(0,0,0,0) 46%,rgba(0,0,0,.14) 78%,rgba(0,0,0,.34) 100%)}',
    '}'
  ].join('');

  function injectCss() {
    if (document.getElementById('z21-css')) return;
    var s = document.createElement('style');
    s.id = 'z21-css';
    s.appendChild(document.createTextNode(CSS));
    (document.head || document.documentElement).appendChild(s);
  }

  function stars(avg, cls) {
    var pct = Math.max(0, Math.min(100, avg / 5 * 100));
    return '<span class="z21-stars' + (cls ? ' ' + cls : '') + '"><i style="width:' + pct.toFixed(1) + '%"></i></span>';
  }

  function num(n) { return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ','); }

  /* ---------- 1) 상품 카드 ---------- */
  function paintCards() {
    var cards = document.querySelectorAll('li[id^="anchorBoxId_"]');
    for (var i = 0; i < cards.length; i++) {
      var card = cards[i];
      if (card.getAttribute('data-z21') === '1') continue;
      var m = /anchorBoxId_(\d+)/.exec(card.id || '');
      if (!m) continue;
      var rows = card.querySelectorAll('ul.spec > li'), slot = null;
      for (var j = 0; j < rows.length; j++) {
        if (rows[j].textContent.indexOf('사용후기') > -1) { slot = rows[j]; break; }
      }
      if (!slot) continue;
      card.setAttribute('data-z21', '1');
      var d = RV[m[1]];
      if (!d || !d.cnt) { slot.style.display = 'none'; continue; }
      var h = '<span class="z21-rv" aria-label="평점 ' + d.avg + '점, 리뷰 ' + d.cnt + '개">';
      h += stars(d.avg);
      h += '<span class="z21-score">' + d.avg.toFixed(1) + '</span>';
      h += '<em class="z21-cnt">리뷰 ' + num(d.cnt) + '</em>';
      if (d.photo) h += '<em class="z21-photo">포토 ' + num(d.photo) + '</em>';
      h += '</span>';
      slot.innerHTML = h;
    }
  }

  /* 위젯이 못 붙은 자리에 마이너스가 남으면 숨김.
     ※ 같은 값을 반복해서 쓰면 MutationObserver 가 자기 자신을 다시 부르는 무한루프가 된다.
        반드시 처리 표시(data-z21hid)를 남기고 한 번만 건드릴 것. */
  function killNegative() {
    var els = document.querySelectorAll('ul.spec > li:not([data-z21hid])');
    for (var i = 0; i < els.length; i++) {
      var t = els[i].textContent || '';
      if (t.indexOf('사용후기') > -1 && /-\s*\d/.test(t) && !els[i].querySelector('.z21-rv')) {
        els[i].setAttribute('data-z21hid', '1');
        els[i].style.display = 'none';
      }
    }
  }

  /* ---------- 2) 상품 상세 상단 요약바 ---------- */
  function currentProductNo() {
    var m = /[?&]product_no=(\d+)/.exec(location.search);
    if (m) return m[1];
    m = /\/product\/[^/]+\/(\d+)\//.exec(location.pathname);
    return m ? m[1] : null;
  }

  function paintDetail() {
    if (document.querySelector('.z21-sum')) return;
    var pno = currentProductNo();
    if (!pno) return;
    var d = RV[pno];
    if (!d || !d.cnt) return;
    var info = document.querySelector('.infoArea');
    var head = info && info.querySelector('.headingArea');
    if (!info || !head) return;

    var box = document.createElement('div');
    box.className = 'z21-sum';
    var h = '<div class="z21-sum__head">' + stars(d.avg);
    h += '<span class="z21-sum__score">' + d.avg.toFixed(1) + '</span>';
    h += '<span class="z21-sum__cnt">구매자 리뷰 ' + num(d.cnt) + '개';
    if (d.photo) h += ' · 포토 ' + num(d.photo) + '장';
    h += '</span>';
    /* ※ <a href="#..."> 로 두면 스킨의 앵커 핸들러가 가로채 엉뚱한 데로 간다.
          앵커를 쓰지 않고 span 에 클릭만 붙인다. */
    h += '<span class="z21-sum__link z21-jump" role="button" tabindex="0">리뷰 전체보기 &rsaquo;</span></div>';
    if (d.pics && d.pics.length) {
      h += '<div class="z21-sum__pics">';
      for (var i = 0; i < Math.min(6, d.pics.length); i++) {
        h += '<span class="z21-jump" role="button" tabindex="0"><img src="' + d.pics[i] + '" alt="구매자 포토리뷰" loading="lazy"></span>';
      }
      h += '</div>';
    }
    box.innerHTML = h;
    head.parentNode.insertBefore(box, head.nextSibling);

    var links = box.querySelectorAll('.z21-jump');
    for (var k = 0; k < links.length; k++) {
      links[k].addEventListener('click', gotoReview);
      links[k].addEventListener('keydown', function (ev) {
        if (ev.key === 'Enter' || ev.key === ' ') gotoReview(ev);
      });
    }
  }

  /* ---------- 2-2) 리뷰 영역에 포토 갤러리 ---------- */
  function paintGallery() {
    if (document.querySelector('.z21-gal')) return;
    var pno = currentProductNo();
    if (!pno) return;
    var pics = GAL[pno];
    if (!pics || !pics.length) return;
    var host = document.getElementById('prdReview');
    if (!host) return;
    var anchor = host.querySelector('.ec-base-table') || host.querySelector('table');
    if (!anchor) return;

    var d = RV[pno] || {};
    var box = document.createElement('div');
    box.className = 'z21-gal';
    var h = '<div class="z21-gal__head"><b>포토리뷰</b><span>구매자가 직접 올린 사진' +
            (d.photo ? ' ' + num(d.photo) + '장' : '') + ' · 사진을 누르면 후기 전체를 볼 수 있어요</span></div>';
    h += '<div class="z21-gal__grid">';
    for (var i = 0; i < pics.length; i++) {
      h += '<a href="' + articleUrl(pics[i].a) + '" title="' + (pics[i].d || '') + ' 구매자 후기">' +
           '<img src="' + pics[i].u + '" loading="lazy" alt="구매자 포토리뷰"></a>';
    }
    h += '</div>';
    box.innerHTML = h;
    anchor.parentNode.insertBefore(box, anchor);
  }

  /* ---------- 2-3) 오우이(skin30) 화장품 샘플 갈아입히기 ----------
     오우이 기본 스킨은 화장품몰 샘플(앰플·세럼·오프라인 매장)이 그대로 들어있다.
     스킨 파일은 API로 못 고치므로(403 Invalid API) 프론트에서 바꿔 끼운다.
     ※ 오우이가 아닌 스킨에서는 marker 가 없어 아무 일도 하지 않는다. */
  var OUI = {
    hero: {
      pc: 'https://file.cafe24cos.com/banner-admin-live/upload/richhabit/87b75b0c-bbef-4283-92fc-ad34e30de16d.png',
      mo: 'https://file.cafe24cos.com/banner-admin-live/upload/richhabit/4f2f109d-ff23-495f-afee-a25ea047d2aa.png',
      eyebrow: 'RICHHABIT',
      title: '부는 습관으로부터<br>나옵니다',
      sub: '독서 습관과 콘텐츠 마케팅으로 부의 추월차선에 올라타세요',
      cta: '제품 보러가기',
      href: url('/product/list.html?cate_no=23')
    },
    picks: [
      { no: 9,  name: '2026 성공플래너 다이어리', desc: '습관과 루틴을 기록하는 한 해',
        img: 'https://richhabit.co.kr/web/product/medium/202512/1fc6ebae734ec37e5a0846f8045b9d0e.png' },
      { no: 11, name: '아웃풋 독서노트', desc: '50권의 책을 기록하는 독서 습관',
        img: 'https://richhabit.co.kr/web/product/medium/202604/18e789bf0eb5c973d62fcab9eb2f2286.jpg' },
      { no: 46, name: '360도 회전 아크릴 독서대', desc: '높이까지 맞추는 몰입 독서 환경',
        img: 'https://richhabit.co.kr/web/product/medium/202509/6f3c5c096434c09833231733fdf65a47.jpeg' }
    ]
  };

  /* 🚨 오우이 판별은 반드시 두 조건을 모두 봐야 한다.
     현재 라이브 스킨(skin15)에도 .main_image_text_gallery / .main_text 가 있어서
     이것만 보고 판단하면 라이브 메인의 섹션을 숨겨버린다 (2026-09-08 실제 사고).
     .main_product_category(BEST SELLER 4탭)는 오우이에만 있다 — 라이브 0건, 오우이 1건. */
  function isOui() {
    return !!document.querySelector('.main_product_category') &&
           !!document.querySelector('.main_image_text_gallery');
  }

  function hide(sel) {
    var els = document.querySelectorAll(sel);
    for (var i = 0; i < els.length; i++) {
      if (els[i].getAttribute('data-z21off') === '1') continue;
      els[i].setAttribute('data-z21off', '1');
      els[i].style.display = 'none';
    }
  }

  function dressHero() {
    var host = document.querySelector('[app4you-smart-banner="smart-banner-admin-RES00001"]');
    if (!host || host.getAttribute('data-z21hero') === '1') return;
    host.setAttribute('data-z21hero', '1');
    host.style.display = 'none';

    var h = OUI.hero;
    var box = document.createElement('div');
    box.className = 'z21-oh';
    box.innerHTML =
      '<picture class="z21-oh__pic">' +
      '<source media="(max-width:767px)" srcset="' + h.mo + '">' +
      '<img src="' + h.pc + '" alt="리치해빗">' +
      '</picture>' +
      '<div class="z21-oh__scrim"></div>' +
      '<div class="z21-oh__in">' +
      '<span class="z21-oh__eb">' + h.eyebrow + '</span>' +
      '<strong class="z21-oh__t">' + h.title + '</strong>' +
      '<span class="z21-oh__s">' + h.sub + '</span>' +
      '<a class="z21-oh__btn" href="' + h.href + '">' + h.cta + '</a>' +
      '</div>';
    host.parentNode.insertBefore(box, host.nextSibling);
  }

  /* ON STORE! 3칸 — 화장품 문구/이미지를 리치해빗 상품 3종으로 */
  function dressPicks() {
    var sec = document.querySelector('.main_image_text_gallery');
    if (!sec || sec.getAttribute('data-z21pick') === '1') return;
    sec.setAttribute('data-z21pick', '1');

    var t1 = sec.querySelector('.main_title_txt01');
    var t2 = sec.querySelector('.main_title_txt02');
    if (t1) t1.textContent = 'BEST PICK';
    if (t2) t2.textContent = '리치해빗이 가장 많이 팔린 3가지';

    /* 셀은 .main_3dan_banner 바로 밑이 아니라 ul > li 다 (실측) */
    var cells = sec.querySelectorAll('.main_3dan_banner ul > li');
    for (var i = 0; i < cells.length && i < OUI.picks.length; i++) {
      var p = OUI.picks[i], cell = cells[i];
      var im = cell.querySelector('img');
      if (im) {
        /* <picture><source>가 남아 있으면 내 src를 덮어쓴다 → 전부 제거 */
        var srcs = cell.querySelectorAll('source');
        for (var s = 0; s < srcs.length; s++) srcs[s].parentNode.removeChild(srcs[s]);
        im.removeAttribute('srcset');
        im.removeAttribute('width');
        im.removeAttribute('height');
        im.setAttribute('loading', 'eager');   /* 크기가 0이면 lazy가 영원히 안 불러온다 */
        im.setAttribute('src', p.img);
        /* 크기를 명시하지 않으면 0x0으로 접혀서 로딩 자체가 안 걸린다 (실측) */
        im.style.cssText = 'display:block;width:100%;height:auto;aspect-ratio:396/240;object-fit:cover;';
      }
      var nm = cell.querySelector('.main_banner_txt01');
      if (nm) nm.textContent = p.name;
      var dc = cell.querySelector('.main_banner_txt02');
      if (dc) dc.textContent = p.desc;
      var mo = cell.querySelector('.main_banner_more, .main_banner_more a');
      if (mo) mo.textContent = '자세히 보기';

      /* BEST PICK 은 상품카드가 아니라 배너라서 별점이 자동으로 안 붙는다.
         BEST SELLER/NEW ARRIVALS 를 지우면서 메인에서 리뷰가 통째로 사라졌으므로 여기 직접 넣는다. */
      var rv = RV[String(p.no)];
      if (rv && rv.cnt && nm && !cell.querySelector('.z21-pickrv')) {
        var line = document.createElement('div');
        line.className = 'z21-pickrv';
        line.innerHTML = stars(rv.avg) +
          '<b>' + rv.avg.toFixed(1) + '</b>' +
          '<span>리뷰 ' + num(rv.cnt) + '</span>' +
          (rv.photo ? '<em>포토 ' + num(rv.photo) + '</em>' : '');
        nm.parentNode.insertBefore(line, nm.nextSibling);
      }
      var links = cell.querySelectorAll('a');
      for (var k = 0; k < links.length; k++) links[k].setAttribute('href', url('/product/detail.html?product_no=' + p.no));
    }
  }

  /* 중간 띠배너 — 리뷰 신뢰 배너로 */
  function dressTrust() {
    var host = document.querySelector('[app4you-smart-banner="smart-banner-admin-RES00002"]');
    if (!host || host.getAttribute('data-z21trust') === '1') return;
    host.setAttribute('data-z21trust', '1');
    host.style.display = 'none';

    var total = 0, photo = 0, pics = [];
    for (var k in RV) { if (RV[k].cnt) { total += RV[k].cnt; photo += (RV[k].photo || 0); } }
    for (var g in GAL) { for (var i = 0; i < GAL[g].length && pics.length < 10; i++) pics.push(GAL[g][i]); }

    var box = document.createElement('div');
    box.className = 'z21-tr';
    var h = '<div class="z21-tr__in"><div class="z21-tr__head">' + stars(4.9, 'big') +
            '<b>4.9</b><span>구매자 리뷰 ' + num(total) + '개 · 포토리뷰 ' + num(photo) + '장</span></div>';
    if (pics.length) {
      h += '<div class="z21-tr__pics">';
      for (var j = 0; j < Math.min(10, pics.length); j++) {
        h += '<a href="' + articleUrl(pics[j].a) + '"><img src="' + pics[j].u + '" loading="lazy" alt="구매자 포토리뷰"></a>';
      }
      h += '</div>';
    }
    h += '</div>';
    box.innerHTML = h;
    host.parentNode.insertBefore(box, host.nextSibling);

    /* 포토 스트립은 외부 CDN(네이버)이라 막히는 환경이 있다.
       4초 안에 한 장도 못 뜨면 빈 칸을 보여주느니 그 줄만 숨긴다. */
    var strip = box.querySelector('.z21-tr__pics');
    if (strip) {
      setTimeout(function () {
        var im = strip.querySelectorAll('img'), ok = 0;
        for (var i = 0; i < im.length; i++) if (im[i].complete && im[i].naturalWidth > 0) ok++;
        if (ok === 0) strip.style.display = 'none';
      }, 4000);
    }
  }

  /* 리치파카 소개(스토리) 섹션 — ONLY!ON 을 뺀 자리에 들어간다.
     ※ 문장·숫자는 전부 출처가 확인된 것만 쓴다. 근거는 06_리치파카_브랜드조사.md
        수익 주장(월 1,000만원 등)은 일부러 뺐다 — 문구 브랜드라 "기록해서 바뀐 사람" 축이 제품과 붙는다. */
  var STORY = {
    eyebrow: 'BRAND STORY',
    /* 제목·마지막 두 문장은 몰 회사소개(shopinfo/company.html) 원문 그대로.
       가운데 두 문장은 리치파카 본인 블로그 원문(224385474910). 지어낸 문장 없음. */
    title: '작은 습관이 쌓여 인생의 궤도를 바꿉니다',
    body: [
      '월급 275만 원을 받던 직업군인이었습니다. 착실히 모으면 인생이 달라질 줄 알았지만 그렇지 않았습니다.',
      '전역을 준비하던 마지막 9개월, 새벽에 책을 읽고 읽은 것을 매일 기록했습니다.',
      '좋은 콘텐츠를 보고도 실행이 이어지지 않는 순간. 리치해빗은 그 간극을 줄이기 위해 태어났습니다.',
      '그래서 오늘도 우리는 “작게, 그러나 매일”을 설계합니다.'
    ],
    /* ※ 팔로워는 채널 합산(28만)이 중복 집계라 쓰지 않는다.
       몰 회사소개의 자체 표기 "20만명이 따르는 크리에이터"를 그대로 따른다. */
    stats: [
      { n: '8년', l: '새벽 기상 지속' },
      { n: '138권', l: '9개월간 완독' },
      { n: '2권', l: '출간한 책' },
      { n: '20만+', l: '함께하는 사람들' }
    ],
    /* 몰 밖(블로그)으로 내보내면 이탈한다. 몰 안 회사소개 페이지로 보낸다.
       그 페이지에 About/우리의 시작/Vision/대표 인사말이 이미 다 있다. */
    /* 회사소개 페이지로 보냈다가 되돌림 — 대표 판단(2026-09-08).
       회사소개는 헤더가 라이브 스킨이라 톤이 끊기고, 내용도 브랜드 스토리로는 약하다.
       블로그는 몰 밖이지만 리치파카 본인 콘텐츠라 스토리 CTA로는 이쪽이 낫다. */
    cta: '리치파카 이야기 더 보기',
    href: 'https://blog.naver.com/duswn3174'
  };

  function dressStory() {
    if (document.querySelector('.z21-st')) return;
    var anchor = document.querySelector('.main_product_slide') ||
                 document.querySelector('.main_product_list');
    if (!anchor) return;

    var box = document.createElement('div');
    box.className = 'z21-st';
    var h = '<div class="z21-st__in">' +
            '<span class="z21-st__eb">' + STORY.eyebrow + '</span>' +
            '<strong class="z21-st__t">' + STORY.title + '</strong>' +
            '<div class="z21-st__body">';
    for (var i = 0; i < STORY.body.length; i++) h += '<p>' + STORY.body[i] + '</p>';
    h += '</div><div class="z21-st__stats">';
    for (var j = 0; j < STORY.stats.length; j++) {
      h += '<div><b>' + STORY.stats[j].n + '</b><span>' + STORY.stats[j].l + '</span></div>';
    }
    h += '</div><a class="z21-st__btn" href="' + STORY.href + '" target="_blank" rel="noopener">' +
         STORY.cta + '</a></div>';
    box.innerHTML = h;
    anchor.parentNode.insertBefore(box, anchor);
  }

  /* 플로팅 문의 버튼 — 기존 스킨(skin15)에 있던 카톡·뉴스레터 버튼을 오우이에도.
     원본은 이미지 버튼이었지만 여기선 CSS로 다시 그린다(레티나에서 안 뭉개지고 가볍다). */
  var FLOAT = {
    kakao: 'https://pf.kakao.com/_xmkvPxj',
    letter: url('/board/' + encodeURIComponent('뉴스레터') + '/8/')
  };

  function dressFloat() {
    if (document.querySelector('.z21-fab')) return;
    var box = document.createElement('div');
    box.className = 'z21-fab';
    box.innerHTML =
      '<a class="z21-fab__b z21-fab__k" href="' + FLOAT.kakao + '" target="_blank" rel="noopener">' +
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 3C6.99 3 3 6.2 3 10.15c0 2.5 1.65 4.7 4.14 5.97-.18.63-.65 2.28-.75 2.64-.12.45.16.44.35.32.14-.09 2.26-1.53 3.18-2.16.67.1 1.36.15 2.08.15 5.01 0 9-3.2 9-7.15S17.01 3 12 3z"/></svg>' +
      '<span>카톡 문의</span></a>' +
      '<a class="z21-fab__b z21-fab__n" href="' + FLOAT.letter + '">' +
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="1.8" d="M3 6.5h18v11H3zM3 7l9 6 9-6"/></svg>' +
      '<span>뉴스레터</span></a>';
    document.body.appendChild(box);
  }

  /* 섹션 제목 문구 갈아끼우기 */
  function retitle(sel, t1, t2) {
    var s = document.querySelector(sel);
    if (!s || s.getAttribute('data-z21t') === '1') return;
    s.setAttribute('data-z21t', '1');
    var a = s.querySelector('.main_title_txt01'), b = s.querySelector('.main_title_txt02');
    if (a) a.textContent = t1;
    if (b) b.textContent = t2;
  }

  /* BEST SELLER 탭이 "새로운 카테고리" ×4 로 남아 있다.
     실제 카테고리는 「제품」 하나뿐이고 전자책(24)·챌린지(25)는 상품 0개라 탭이 의미가 없다. */
  function fixTabs() {
    var tab = document.querySelector('.main_product_tab');
    if (!tab || tab.getAttribute('data-z21tab') === '1') return;
    tab.setAttribute('data-z21tab', '1');
    tab.style.display = 'none';
  }

  function dressOui() {
    if (!isOui()) return;
    dressHero();
    dressPicks();
    dressTrust();
    dressStory();
    dressFloat();
    fixTabs();
    hide('.main_video');          /* FASHION CAMPAIGN 샘플 영상 */
    hide('.main_text');           /* OOUI HOT EVENT */
    hide('.main_map');            /* 오프라인 스토어 + 지도 — 리치해빗은 매장 없음 */
    hide('.main_product_slide');     /* ONLY! ON */
    hide('.main_product_category');  /* BEST! SELLER */
    hide('.main_product_list');      /* NEW! ARRIVALS(ALL PRODUCTS) */
    /* ※ 상품 섹션 3개 모두 제거(대표 지시 2026-09-08).
       상품이 5개뿐이라 세 섹션이 전부 같은 걸 보여줬다. 메인엔 BEST PICK 3종만 남는다.
       ※ .main_product_category 는 isOui() 판별자다. display:none 이라 DOM엔 남아 있어 판별은 계속 된다.
          절대 removeChild 하지 말 것 — 지우면 오우이 판별이 깨져 위젯 전체가 죽는다. */
  }

  /* ---------- 2-4) 빈 카테고리 안내 ----------
     메뉴의 「전자책」(24)·「챌린지」(25)에 상품이 0개라 누르면 빈 화면이 뜬다.
     실제 판매는 아임웹 richpaca.com 에서 하고 있어 그쪽으로 안내한다.
     ※ 아임웹을 접고 카페24로 통합하기로 했으므로, 상품이 등록되면 카드가 생겨
        이 안내는 자동으로 사라진다. 통합 완료 후엔 이 블록을 지울 것.
     ※ 스킨과 무관하게 필요한 안내라 dressOui 밖에서 돈다. */
  var EMPTY_CATE = {
    '24': { name: '전자책', desc: '전자책은 지금 리치파카 클래스에서 만나실 수 있습니다.' },
    '25': { name: '챌린지', desc: '미라클모닝·독서모임 챌린지는 리치파카 클래스에서 신청하실 수 있습니다.' }
  };

  function currentCateNo() {
    var m = /[?&]cate_no=(\d+)/.exec(location.search);
    if (m) return m[1];
    m = /\/category\/[^/]+\/(\d+)\//.exec(location.pathname);
    return m ? m[1] : null;
  }

  function emptyCategoryNotice() {
    if (document.querySelector('.z21-empty')) return;
    var no = currentCateNo();
    var d = EMPTY_CATE[no];
    if (!d) return;
    /* 상품이 하나라도 있으면 아무것도 하지 않는다 */
    if (document.querySelectorAll('li[id^="anchorBoxId_"]').length > 0) return;
    var host = document.getElementById('contents');
    if (!host) return;

    var box = document.createElement('div');
    box.className = 'z21-empty';
    box.innerHTML =
      '<strong>' + d.name + '</strong>' +
      '<p>' + d.desc + '</p>' +
      '<a href="https://richpaca.com/" target="_blank" rel="noopener">리치파카 클래스 보러가기 &rsaquo;</a>';
    host.insertBefore(box, host.firstChild);
  }

  /* ---------- 3) 히어로 비네팅 ---------- */
  function paintHero() {
    if (!/^\/($|index)/.test(location.pathname)) return;
    var c = document.getElementById('contents');
    if (!c) return;
    var hero = c.querySelector('.xans-smart-banner-admin');
    if (hero && hero.className.indexOf('z21-hero') === -1) hero.className += ' z21-hero';
  }

  var observer = null, scheduled = false, runs = 0;

  function paint() {
    try { injectCss(); paintCards(); killNegative(); paintDetail(); paintGallery(); paintHero(); emptyCategoryNotice(); dressOui(); } catch (e) { }
  }

  /* 감시 중 자기 변경에 다시 반응하지 않도록 관찰을 끊고 그린 뒤 다시 붙인다.
     추가로 프레임당 1회로 묶고, 총 실행 횟수에 상한을 둬서 어떤 경우에도 폭주하지 않게 한다. */
  function run() {
    if (observer) observer.disconnect();
    paint();
    if (observer && runs < 300) observer.observe(document.documentElement, { childList: true, subtree: true });
  }

  function schedule() {
    if (scheduled || runs >= 300) return;
    scheduled = true;
    (window.requestAnimationFrame || window.setTimeout)(function () {
      scheduled = false;
      runs++;
      run();
    }, 60);
  }

  if (window.MutationObserver) observer = new MutationObserver(schedule);

  /* 카페24 스크립트태그는 body 맨 끝(99% 지점)에 실린다. 히어로는 이미 파싱돼 있으므로
     DOMContentLoaded 를 기다릴 이유가 없다 — 기다리면 화장품 샘플이 그만큼 더 오래 보인다.
     그래서 즉시 한 번 돌리고, 이후 DOMContentLoaded/load 에서 한 번 더 확인한다. */
  run();
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', schedule);
  window.addEventListener('load', schedule);
})();
