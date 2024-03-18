export default function Home() {
  return (
    <div>
      <div className=' m-3 p-3 text-white text-right underline'>
        新規会員登録 / ログイン
      </div>

      {/* メインの世界地図とキャ土フレーズ */}
      <div className=' bg-white h-2/5 w-full '>
        <div className=' flex justify-center '>
          <img src='/top/main.png' width={600} height={500} />
        </div>
      </div>

      <div className='text-1xl text-white m-10 p-10 '>
        <p>国際結婚は様々な問題や悩みを抱えることがあります。</p>
        <p>
          当サイトでは、同じく国際結婚をした人と繋がり、
          支え合うコミュニティを提供しています。
        </p>
        <p> 一緒に、国際結婚生活を豊かにする仲間を見つけましょう！</p>
      </div>

      {/* ３つの項目を画像で挿入 */}
      <div className='m-10 p-5  flex justify-center'>
        <h1 className=' flex justify-start '>
          <img src='/top/1.png' width={300} height={300} />
        </h1>

        <h2 className=' flex justify-center '>
          <img src='/top/2.png' width={300} height={300} />
        </h2>
        <h3 className=' flex justify-end'>
          <img src='/top/3.png' width={300} height={300} />
        </h3>
      </div>
    </div>
  );
}
