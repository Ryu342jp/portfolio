// 青春のイベントを設定します。実際にはもっと詳細なデータにすることができます。
const events = [
{ id: 1, name: '学校への通学', rarity: 'N' },
{ id: 2, name: '宿題の提出', rarity: 'N' },
{ id: 3, name: '運動会の参加', rarity: 'N' },
{ id: 4, name: '文化祭の参加', rarity: 'N' },
{ id: 5, name: '授業参観', rarity: 'N' },
{ id: 6, name: 'テスト勉強', rarity: 'N' },
{ id: 7, name: '新しい友達との出会い', rarity: 'N' },
{ id: 8, name: 'クラス替え', rarity: 'N' },
{ id: 9, name: '課外活動への参加', rarity: 'N' },
{ id: 10, name: '体育の授業', rarity: 'N' },
{ id: 11, name: '図書館での読書', rarity: 'N' },
{ id: 12, name: '学校の掃除', rarity: 'N' },
{ id: 13, name: '生徒会活動', rarity: 'N' },
{ id: 14, name: 'クラスでのプレゼンテーション', rarity: 'N' },
{ id: 15, name: '修学旅行', rarity: 'N' },
{ id: 16, name: 'バレンタインデー', rarity: 'N' },
{ id: 17, name: 'ホワイトデー', rarity: 'N' },
{ id: 18, name: '卒業式', rarity: 'N' },
{ id: 19, name: '入学式', rarity: 'N' },
{ id: 20, name: '新学期の始まり', rarity: 'N' },
{ id: 21, name: '期末試験', rarity: 'N' },
{ id: 22, name: '夏休みの自由研究', rarity: 'N' },
{ id: 23, name: 'クリスマスパーティー', rarity: 'N' },
{ id: 24, name: 'スポーツ大会', rarity: 'N' },
{ id: 25, name: '校内放送の出演', rarity: 'N' },
{ id: 26, name: '留学プログラムへの参加', rarity: 'N' },
{ id: 27, name: '学校のイベントのボランティア', rarity: 'N' },
{ id: 28, name: 'ランチタイム', rarity: 'N' },
{ id: 29, name: '誕生日パーティー', rarity: 'N' },
{ id: 30, name: '勉強会', rarity: 'N' },
{ id: 31, name: 'プール開き', rarity: 'N' },
{ id: 32, name: 'プール授業', rarity: 'N' },
{ id: 33, name: '夏休みの宿題', rarity: 'N' },
{ id: 34, name: 'クラブ活動', rarity: 'N' },
{ id: 35, name: '学校行事の準備', rarity: 'N' },
{ id: 36, name: '家庭訪問', rarity: 'N' },
{ id: 37, name: '友達との映画鑑賞', rarity: 'N' },
{ id: 38, name: '校内コンテストへの参加', rarity: 'N' },
{ id: 39, name: '成績表の受け取り', rarity: 'N' },
{ id: 40, name: 'ハロウィンパーティー', rarity: 'N' },
{ id: 41, name: '新年会', rarity: 'N' },
{ id: 42, name: '新学期の買い物', rarity: 'N' },
{ id: 43, name: '制服の試着', rarity: 'N' },
{ id: 44, name: '交流会', rarity: 'N' },
{ id: 45, name: 'クラスメイトとの旅行', rarity: 'N' },
{ id: 46, name: 'テスト勉強会', rarity: 'N' },
{ id: 47, name: 'サマーキャンプ', rarity: 'N' },
{ id: 48, name: '自習時間', rarity: 'N' },
{ id: 49, name: 'スクールバスの乗車', rarity: 'N' },
{ id: 50, name: '教科書の読み通し', rarity: 'N' },
{ id: 51, name: '友達とのランチ', rarity: 'N' },
{ id: 52, name: '家庭科の授業', rarity: 'N' },
{ id: 53, name: '科学実験', rarity: 'N' },
{ id: 54, name: '図工の授業', rarity: 'N' },
{ id: 55, name: '音楽の授業', rarity: 'N' },
{ id: 56, name: '学校の講演会', rarity: 'N' },
{ id: 57, name: 'オープンキャンパスの参加', rarity: 'N' },
{ id: 58, name: '学校の合唱コンテスト', rarity: 'N' },
{ id: 59, name: '教師との面談', rarity: 'N' },
{ id: 60, name: 'クラスの集合写真撮影', rarity: 'N' },
{ id: 61, name: '学校の庭での昼休み', rarity: 'N' },
{ id: 62, name: '授業後のチュータリング', rarity: 'N' },
{ id: 63, name: '学期末のパーティー', rarity: 'N' },
{ id: 64, name: '同級生とのゲーム大会', rarity: 'N' },
{ id: 65, name: '学校のワークショップへの参加', rarity: 'N' },
{ id: 66, name: '自転車での通学', rarity: 'N' },
{ id: 67, name: 'ハイキング旅行', rarity: 'N' },
{ id: 68, name: '夏のバーベキューパーティー', rarity: 'N' },
{ id: 69, name: 'クラスの誕生日会', rarity: 'N' },
{ id: 70, name: '学校の花見イベント', rarity: 'N' },
{ id: 71, name: '学年トップの成績を取る', rarity: 'R' },
{ id: 72, name: '学校のマスコットに選ばれる', rarity: 'R' },
{ id: 73, name: '学校の新聞の編集者になる', rarity: 'R' },
{ id: 74, name: '生徒会長に選ばれる', rarity: 'R' },
{ id: 75, name: '学校の代表として地域イベントに参加', rarity: 'R' },
{ id: 76, name: '音楽コンテストで賞を獲得', rarity: 'R' },
{ id: 77, name: 'スポーツ大会で優勝', rarity: 'R' },
{ id: 78, name: '学校の劇で主役を演じる', rarity: 'R' },
{ id: 79, name: '美術コンテストで賞を受賞', rarity: 'R' },
{ id: 80, name: 'ダンス大会で優勝', rarity: 'R' },
{ id: 81, name: '国際的な大会に参加', rarity: 'R' },
{ id: 82, name: '大学進学のための受験勉強', rarity: 'R' },
{ id: 83, name: '資格試験の合格', rarity: 'R' },
{ id: 84, name: '大規模な寄付活動の主催', rarity: 'R' },
{ id: 85, name: '校内の環境改善プロジェクトのリーダーになる', rarity: 'R' },
{ id: 86, name: 'チャリティーイベントのボランティアリーダー', rarity: 'R' },
{ id: 87, name: '全国模試でトップランク', rarity: 'R' },
{ id: 88, name: '学校のイベントでのスピーチ', rarity: 'R' },
{ id: 89, name: 'ディベート大会で優勝', rarity: 'R' },
{ id: 90, name: '学校の全体運営に関わる', rarity: 'SR' },
{ id: 91, name: '学校の歴史に名を刻むような業績を上げる', rarity: 'SR' },
{ id: 92, name: '学校全体のイベントを自分で企画・運営', rarity: 'SR' },
{ id: 93, name: '学校の新しい伝統を創り出す', rarity: 'SR' },
{ id: 94, name: '大規模な国際的な学会や競技会に出場', rarity: 'SR' },
{ id: 95, name: '国内外のメディアに自分の業績が取り上げられる', rarity: 'SR' },
{ id: 96, name: '学校の問題を解決するために行政と交渉する', rarity: 'SR' },
{ id: 97, name: '学校を代表して国際的な会議に出席', rarity: 'SSR' },
{ id: 98, name: '学校のための新しい施設やプログラムを提案・開発', rarity: 'SSR' },
{ id: 99, name: '学校の歴史を変えるような一大イベントを起こす', rarity: 'SSR' },
{ id: 100, name: '学生生活を通じての自身の成長', rarity: 'UR' }
    ]


function drawGacha() {
  // ガチャを引く
  const rand = Math.random();
  let rarity;
  if (rand < 0.01) {
    rarity = 'UR';
  } else if (rand < 0.04) {
    rarity = 'SSR';
  } else if (rand < 0.11) {
    rarity = 'SR';
  } else if (rand < 0.30) {
    rarity = 'R';
  } else {
    rarity = 'N';
  }

  // レアリティに該当するイベントを抽出
  const candidates = events.filter(event => event.rarity === rarity);
  // レアリティに該当するイベントからランダムに1つ選ぶ
  const event = candidates[Math.floor(Math.random() * candidates.length)];

  // 結果を表示
  const resultDiv = document.getElementById('result');
  resultDiv.textContent = `No.${event.id} ${event.name} レアリティ: ${event.rarity}`;

  // クラスを全てリセット
  resultDiv.className = '';

  // レアリティに応じてクラスを設定
  switch (event.rarity) {
    case 'N':
      resultDiv.classList.add('rarity-N');
      break;
    case 'R':
      resultDiv.classList.add('rarity-R');
      break;
    case 'SR':
      resultDiv.classList.add('rarity-SR');
      break;
    case 'SSR':
      resultDiv.classList.add('rarity-SSR');
      break;
    case 'UR':
      resultDiv.classList.add('rarity-UR');
      break;
  }

  // レアリティに対応する音声を再生
  let audio = new Audio(`sounds/${rarity}.mp3`);
  audio.play();
}


window.onload = function() {
  document.getElementById('draw').addEventListener('click', drawGacha);
};
