<template>
  <div id="app">

    <div class="Toggle">
    　　<span></span>
    　　<span></span>
    　　<span></span>
    </div>

    <section class="header">
        <p class="header--titleLogo">
            <a href="index.vue"><img src="../static/images/titlepcLogo.svg" alt="絶滅危惧種図鑑"></a>
        </p>

        <ul class="header--pageLink">
            <li><a href="map.vue">地図から探す</a></li>
            <li><a href="photo.vue">写真から探す</a></li>
            <li><a href="condition.vue">条件から探す</a></li>
            <li><a href="name.vue">名前から探す</a></li>
            <li><a href="ranking.vue">ランキング</a></li>
        </ul>

    </section>

    <section class="main">
        <h1>地図から探す</h1>

        <div class="main__map">
            <img src="../static/images/map/japanMap.png" alt="日本地図">
            <span class="area_btn area1" data-area="1">北海道</span>
            <span class="area_btn area2" data-area="2">東北</span>
            <span class="area_btn area3" data-area="3">関東</span>
            <span class="area_btn area4" data-area="4">中部</span>
            <span class="area_btn area5" data-area="5">近畿</span>
            <span class="area_btn area6" data-area="6">中国</span>
            <span class="area_btn area7" data-area="7">四国</span>
            <span class="area_btn area8" data-area="8">九州・沖縄</span>

            <div class="area_overlay"></div>
            <div class="pref_area">
                <div class="pref_list data1" data-list="1">
                    <div data-id="1">北海道</div>
                </div>

                <div class="pref_list" data-list="2">
                    <div data-id="2">青森県</div>
                    <div data-id="3">岩手県</div>
                    <div data-id="4">宮城県</div>
                    <div data-id="5">秋田県</div>
                    <div data-id="6">山形県</div>
                    <div data-id="7">福島県</div>
                </div>
                
                <div class="pref_list" data-list="3">
                    <div data-id="8">茨城県</div>
                    <div data-id="9">栃木県</div>
                    <div data-id="10">群馬県</div>
                    <div data-id="11">埼玉県</div>
                    <div data-id="12">千葉県</div>
                    <div data-id="13">東京都</div>
                    <div data-id="14">神奈川県</div>
                    <div></div>
                </div>
                
                <div class="pref_list" data-list="4">
                    <div data-id="15">新潟県‎</div>
                    <div data-id="16">富山県‎</div>
                    <div data-id="17">石川県‎</div>
                    <div data-id="18">福井県‎</div>
                    <div data-id="19">山梨県‎</div>
                    <div data-id="20">長野県‎</div>
                    <div data-id="21">岐阜県</div>
                    <div data-id="22">静岡県</div>
                    <div data-id="23">愛知県‎</div>
                    <div></div>
                </div>
                
                <div class="pref_list" data-list="5">
                    <div data-id="24">三重県</div>
                    <div data-id="25">滋賀県</div>
                    <div data-id="26">京都府</div>
                    <div data-id="27">大阪府</div>
                    <div data-id="28">兵庫県</div>
                    <div data-id="29">奈良県</div>
                    <div data-id="30">和歌山県</div>
                    <div></div>
                </div>
                
                <div class="pref_list" data-list="6">
                    <div data-id="31">鳥取県</div>
                    <div data-id="32">島根県</div>
                    <div data-id="33">岡山県</div>
                    <div data-id="34">広島県</div>
                    <div data-id="35">山口県</div>
                    <div></div>
                </div>
                
                <div class="pref_list" data-list="7">
                    <div data-id="36">徳島県</div>
                    <div data-id="37">香川県</div>
                    <div data-id="38">愛媛県</div>
                    <div data-id="39">高知県</div>
                </div>

                <div class="pref_list" data-list="8">
                    <div data-id="40">福岡県</div>
                    <div data-id="41">佐賀県</div>
                    <div data-id="42">長崎県</div>
                    <div data-id="43">熊本県</div>
                    <div data-id="44">大分県</div>
                    <div data-id="45">宮崎県</div>
                    <div data-id="46">鹿児島県</div>
                    <div data-id="47">沖縄県</div>
                </div>
            </div>
        </div>

        <!-- チェックボックス -->
        <form class="main__checkbox">

            <!-- 東日本 -->
            <div class="main__checkbox--east c../heckbo">
                <ul class="main__checkbox--east-category category">
                    <li>
                        <input value="checkbox" id="East" type="checkbox" name="map-1" onClick="eastAllCheck();">
                        <label for="East" class="Ew">
                            東日本 
                        </label>
                    </li>
                    <li>
                        <div class="region">
                            <input value="checkbox" type="checkbox" name="map-1-1" id="hokkaidouRegion" onClick="hokkaidouAllCheck();">
                            <label for="hokkaidouRegion">
                                北海道地方
                            </label>
                        </div>

                        <ul>
                            <li>
                                <input value="checkbox" type="checkbox" name="map-1-1-1" id="hokkaidou">
                                <label for="hokkaidou">
                                    北海道
                                </label>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <div class="region">
                            <input value="checkbox" type="checkbox" name="map-1-2" id="touhokuRegion" onClick="touhokuAllCheck();">
                            <label for="touhokuRegion">
                                東北地方
                            </label>
                        </div>

                        <ul>
                            <li>
                                <input value="checkbox" type="checkbox" name="map-1-2-1" id="aomori">
                                <label for="aomori">
                                    青森県
                                </label>
                            </li>
                            <li>
                                <input value="checkbox" type="checkbox" name="map-1-2-2" id="iwate">
                                <label for="iwate">
                                    岩手県
                                </label>
                            </li>
                            <li>
                                <input value="checkbox" type="checkbox" name="map-1-2-3" id="miyagi">
                                <label for="miyagi">
                                    宮城県
                                </label>
                            </li>
                            <li>
                                <input value="checkbox" type="checkbox" name="map-1-2-4" id="akita">
                                <label for="akita">
                                    秋田県
                                </label>
                            </li>
                            <li>
                                <input value="checkbox" type="checkbox" name="map-1-2-5" id="yamagata">
                                <label for="yamagata">
                                    山形県
                                </label>
                            </li>
                            <li>
                                <input value="checkbox" type="checkbox" name="map-1-2-6" id="hukushima">
                                <label for="hukushima">
                                    福島県
                                </label>
                            </li>
                        </ul>

                    </li>
                    <li>
                        <div class="region">
                            <input value="checkbox" type="checkbox" name="map-1-3" id="kantouRegion" onClick="kantouAllCheck();">
                            <label for="kantouRegion">
                                関東地方
                            </label>
                        </div>

                        <ul>
                            <li>
                                <input value="checkbox" type="checkbox" name="map-1-3-1" id="toukyou">
                                <label for="toukyou">
                                    東京都
                                </label>
                            </li>
                            <li>
                                <input value="checkbox" type="checkbox" name="map-1-3-2" id="ibaragi">
                                <label for="ibaragi">
                                    茨城県
                                </label>
                            </li>
                            <li>
                                <input value="checkbox" type="checkbox" name="map-1-3-3" id="totigi">
                                <label for="totigi">
                                    栃木県
                                </label>
                            </li>
                            <li>
                                <input value="checkbox" type="checkbox" name="map-1-3-4" id="gunma">
                                <label for="gunma">
                                    群馬県
                                </label>
                            </li>
                            <li>
                                <input value="checkbox" type="checkbox" name="map-1-3-5" id="saitama">
                                <label for="saitama">
                                    埼玉県
                                </label>
                            </li>
                            <li>
                                <input value="checkbox" type="checkbox" name="map-1-3-6" id="tiba">
                                <label for="tiba">
                                    千葉県
                                </label>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <div class="region">
                            <input value="checkbox" type="checkbox" name="map-1-4" id="tyubuRegion" onClick="tyubuAllCheck();">
                            <label for="tyubuRegion">
                                中部地方
                            </label>
                        </div>

                        <ul>
                            <li>
                                <input value="checkbox" type="checkbox" name="map-1-4-1" id="nigata">
                                <label for="nigata">
                                    新潟県
                                </label>
                            </li>
                            <li>
                                <input value="checkbox" type="checkbox" name="map-1-4-2" id="toyama">
                                <label for="toyama">
                                    富山県
                                </label>
                            </li>
                            <li>
                                <input value="checkbox" type="checkbox" name="map-1-4-3" id="ishikawa">
                                <label for="ishikawa">
                                    石川県
                                </label>
                            </li>
                            <li>
                                <input value="checkbox" type="checkbox" name="map-1-4-4" id="hukui">
                                <label for="hukui">
                                    福井県
                                </label>
                            </li>
                            <li>
                                <input value="checkbox" type="checkbox" name="map-1-4-5" id="yamanashi">
                                <label for="yamanashi">
                                    山梨県
                                </label>
                            </li>
                            <li>
                                <input value="checkbox" type="checkbox" name="map-1-4-6" id="nagano">
                                <label for="nagano">
                                    長野県
                                </label>
                            </li>
                            <li>
                                <input value="checkbox" type="checkbox" name="map-1-4-7" id="gihu">
                                <label for="gihu">
                                    岐阜県
                                </label>
                            </li>
                            <li>
                                <input value="checkbox" type="checkbox" name="map-1-4-8" id="shizuoka">
                                <label for="shizuoka">
                                    静岡県
                                </label>
                            </li>
                            <li>
                                <input value="checkbox" type="checkbox" name="map-1-4-9" id="aiti">
                                <label for="aiti">
                                    愛知県
                                </label>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>

            <!-- 西日本 -->
            <div class="main__checkbox--west c../heckbo">
                <ul class="main__checkbox--west-category category">
                    <li>
                        <input value="checkbox" id="Wast" name="map-2" type="checkbox" onClick="wastAllCheck();">
                        <label for="Wast" class="Ew">
                            西日本 
                        </label>
                    </li>
                    <li>
                        <div class="region">
                            <input value="checkbox" type="checkbox" name="map-2-1" id="kinkiRegion" onClick="kinkiAllCheck();">
                            <label for="kinkiRegion">
                                近畿地方
                            </label>
                        </div>
                        <ul>
                            <li>
                                <input value="checkbox" type="checkbox" name="map-2-1-1" id="kyoto">
                                <label for="kyoto">
                                    京都府
                                </label>
                            </li>
                            <li>
                                <input value="checkbox" type="checkbox" name="map-2-1-2" id="oosaka">
                                <label for="oosaka">
                                    大阪府
                                </label>
                            </li>
                            <li>
                                <input value="checkbox" type="checkbox" name="map-2-1-3" id="mie">
                                <label for="mie">
                                    三重県
                                </label>
                            </li>
                            <li>
                                <input value="checkbox" type="checkbox" name="map-2-1-4" id="shiga">
                                <label for="shiga">
                                    滋賀県
                                </label>
                            </li>
                            <li>
                                <input value="checkbox" type="checkbox" name="map-2-1-5" id="hyougo">
                                <label for="hyougo">
                                    兵庫県
                                </label>
                            </li>
                            <li>
                                <input value="checkbox" type="checkbox" name="map-2-1-6" id="nara">
                                <label for="nara">
                                    奈良県
                                </label>
                            </li>
                            <li>
                                <input value="checkbox" type="checkbox" name="map-2-1-7" id="wakayama">
                                <label for="wakayama">
                                    和歌山県
                                </label>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <div class="region">
                            <input value="checkbox" type="checkbox" name="map-2-2" id="tyugokuRegion" onClick="tyugokuAllCheck();">
                            <label for="tyugokuRegion">
                                中国地方
                            </label>
                        </div>
                        <ul>
                            <li>
                                <input value="checkbox" type="checkbox" name="map-2-2-1" id="tottori">
                                <label for="tottori">
                                    鳥取県
                                </label>
                            </li>
                            <li>
                                <input value="checkbox" type="checkbox" name="map-2-2-2" id="shimane">
                                <label for="shimane">
                                    島根県
                                </label>
                            </li>
                            <li>
                                <input value="checkbox" type="checkbox" name="map-2-2-3" id="okayama">
                                <label for="okayama">
                                    岡山県
                                </label>
                            </li>
                            <li>
                                <input value="checkbox" type="checkbox" name="map-2-2-4" id="hiroshima">
                                <label for="hiroshima">
                                    広島県
                                </label>
                            </li>
                            <li>
                                <input value="checkbox" type="checkbox" name="map-2-2-5" id="yamaguti">
                                <label for="yamaguti">
                                    山口県
                                </label>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <div class="region">
                            <input value="checkbox" type="checkbox" name="map-2-3" id="shikokuRegion" onClick="shikokuAllCheck();">
                            <label for="shikokuRegion">
                                四国地方
                            </label>
                        </div>
                        <ul>
                            <li>
                                <input value="checkbox" type="checkbox" name="map-2-3-1" id="kagawa">
                                <label for="kagawa">
                                    香川県
                                </label>
                            </li>
                            <li>
                                <input value="checkbox" type="checkbox" name="map-2-3-2" id="tokushima">
                                <label for="tokushima">
                                    徳島県
                                </label>
                            </li>
                            <li>
                                <input value="checkbox" type="checkbox" name="map-2-3-3" id="ehime">
                                <label for="ehime">
                                    愛媛県
                                </label>
                            </li>
                            <li>
                                <input value="checkbox" type="checkbox" name="map-2-3-4" id="kouti">
                                <label for="kouti">
                                    高知県
                                </label>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <div class="region">
                            <input value="checkbox" type="checkbox" name="map-2-4" id="kyusyuRegion" onClick="kyusyuAllCheck();">
                            <label for="kyusyuRegion">
                                九州地方
                            </label>
                        </div>
                        <ul>
                            <li>
                                <input value="checkbox" type="checkbox" name="map-2-4-1" id="hukuoka">
                                <label for="hukuoka">
                                    福岡県
                                </label>
                            </li>
                            <li>
                                <input value="checkbox" type="checkbox" name="map-2-4-2" id="saga">
                                <label for="saga">
                                    佐賀県
                                </label>
                            </li>
                            <li>
                                <input value="checkbox" type="checkbox" name="map-2-4-3" id="nagasaki">
                                <label for="nagasaki">
                                    長崎県
                                </label>
                            </li>
                            <li>
                                <input value="checkbox" type="checkbox" name="map-2-4-4" id="kumamoto">
                                <label for="kumamoto">
                                    熊本県
                                </label>
                            </li>
                            <li>
                                <input value="checkbox" type="checkbox" name="map-2-4-5" id="ooita">
                                <label for="ooita">
                                    大分県
                                </label>
                            </li>
                            <li>
                                <input value="checkbox" type="checkbox" name="map-2-4-6" id="kagoshima">
                                <label for="kagoshima">
                                    鹿児島県
                                </label>
                            </li>
                            <li>
                                <input value="checkbox" type="checkbox" name="map-2-4-7" id="okinawa">
                                <label for="okinawa">
                                    沖縄県
                                </label>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div class="main__checkbox--sent">
                <input value="検索" type="submit" onClick="mapDate();">
            </div>
            <div id="sample"></div>
        </form>

        <!-- vue -->
        <div>{{contents}}</div>

    </section>

  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      contents: null
    }
  },
  async created() {
    try {
      const res = await axios.get('https://workproduction.microcms.io/api/v1/map', {
        headers: {
          'X-API-KEY': 'c2aa018e-aeb0-43c6-b6c2-e2bc343ab15e'
        }
      })
      this.contents = res.data;
    } catch (err) {
      console.log(err);
    }
  }
}

</script>