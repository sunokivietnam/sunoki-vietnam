import Image from "next/image";
import Link from "next/link";

export default function HouseWorkPage() {
  return (
    <main className="bg-[#FAF7F3] min-h-screen">

      {/* Hero */}
      <section className="relative h-[450px]">

        <Image
          src="/images/work1.jpg"
          alt="住宅施工"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">

          <div className="text-center text-white">

            <p className="text-amber-300 mb-4 tracking-widest">
              WORKS
            </p>

            <h1 className="text-5xl font-bold">
              心地よく暮らせる住空間
            </h1>

          </div>

        </div>

      </section>

      {/* Content */}
      <section className="max-w-6xl mx-auto px-8 py-16">

        <div className="grid md:grid-cols-2 gap-16">

          <div>

            <h2 className="text-3xl font-bold mb-8">
              プロジェクト概要
            </h2>

            <table className="w-full">

              <tbody>

                <tr className="border-b">
                  <th className="text-left py-4 w-40">
                    施工場所
                  </th>
                  <td>ホーチミン市</td>
                </tr>

                <tr className="border-b">
                  <th className="text-left py-4">
                    工事内容
                  </th>
                  <td>新築住宅</td>
                </tr>

                <tr className="border-b">
                  <th className="text-left py-4">
                    工期
                  </th>
                  <td>4ヶ月</td>
                </tr>

                <tr className="border-b">
                  <th className="text-left py-4">
                    面積
                  </th>
                  <td>180㎡</td>
                </tr>

              </tbody>

            </table>

          </div>

          <div>

            <h2 className="text-3xl font-bold mb-8">
              コンセプト
            </h2>

            <p className="text-gray-600 leading-8">

              日本品質の施工基準をベトナムでも実現。

              自然素材を活かしながら、

              長く快適に暮らせる住宅を設計・施工しました。

            </p>

          </div>

        </div>

      </section>

      {/* Gallery */}

      <section className="max-w-6xl mx-auto px-8 pb-24">

        <h2 className="text-4xl font-bold text-center mb-12">
          Gallery
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <Image
            src="/images/work1.jpg"
            alt=""
            width={500}
            height={350}
            className="rounded-2xl object-cover h-64 w-full"
          />

          <Image
            src="/images/work2.png"
            alt=""
            width={500}
            height={350}
            className="rounded-2xl object-cover h-64 w-full"
          />

          <Image
            src="/images/work3.jpg"
            alt=""
            width={500}
            height={350}
            className="rounded-2xl object-cover h-64 w-full"
          />

        </div>

      </section>

      {/* Back */}

      <section className="text-center pb-24">

        <Link
          href="/"
          className="bg-amber-700 text-white px-10 py-4 rounded-xl hover:bg-amber-800 transition"
        >
          トップへ戻る
        </Link>

      </section>

    </main>
  );
}