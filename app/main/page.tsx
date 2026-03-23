"use client";
import { useState } from "react";
import "./page.css";

export default function Page() {
    const [total, setTotal] = useState(0);
    const [selected, setSelected] = useState([]);

    const addPrice = (item) => {
        setTotal((prev) => prev + item.price);
        setSelected((prev) => [...prev, item.name]);
    };

    const reset = () => {
        setTotal(0);
        setSelected([]);
    };

    const items = [
        { name: "こんにゃく", price: 100 },
        { name: "ちくわ", price: 150 },
        { name: "厚揚げ", price: 150 },
        { name: "おもち", price: 150 },
        { name: "大根", price: 200 },
        { name: "じゃがいも", price: 200 },
        { name: "玉子", price: 200 },
        { name: "ウインナー", price: 200 },

        { name: "牛すじ", price: 250 },
        { name: "たけのこ", price: 250 },
        { name: "チーズ天", price: 250 },
        { name: "ロール(チーズ)", price: 250 },
        { name: "ロール(牛すじ)", price: 250 },
        { name: "油揚げ", price: 250 },
        { name: "つみれ", price: 250 },
        { name: "平天", price: 250 },
        { name: "ごぼう天", price: 250 },
        { name: "イカ天", price: 250 },
        { name: "しゅうまい天", price: 250 },
        { name: "えび天", price: 250 },
        { name: "じゃこ天", price: 250 },
        { name: "きくらげ天", price: 250 },
        { name: "しょうが天", price: 250 },
        { name: "しいたけ", price: 250 },
        { name: "はんぺん", price: 250 },
        { name: "とうふ", price: 250 },
        { name: "しゅんぎく", price: 250 },
        { name: "生わかめ", price: 250 },
        { name: "春雨もやし", price: 250 },
        { name: "水餃子", price: 250 },
        { name: "淡路の玉ねぎ", price: 250 },
        { name: "エノキ", price: 250 },

        { name: "ねぎ袋", price: 350 },
        { name: "ねぎま", price: 350 },
        { name: "ゲソ", price: 350 },
        { name: "レタス", price: 350 },
        { name: "トマト", price: 350 },
        { name: "きのこ", price: 350 },

        { name: "ハリハリ", price: 400 },

        { name: "たこ", price: 450 },
        { name: "がんも", price: 450 },
        { name: "豚バラ軟骨", price: 450 },
        { name: "アキレス腱", price: 450 },

        { name: "どて焼き", price: 500 },
        { name: "豚足", price: 500 },

        { name: "豚しゃぶ", price: 600 },
        { name: "つまき", price: 600 },
    ];

    const getColor = (price) => {
        if (price === 100) return "#f3e58a";
        if (price === 150) return "#f5a3a3";
        if (price === 200) return "#a8d5ba";
        if (price === 250) return "#d3b0e0";
        if (price === 350) return "#a8d8d8";
        if (price === 400) return "#a8b8d8";
        if (price === 450) return "#d88fd8";
        if (price === 500) return "#f4a261";
        if (price === 600) return "#4ade80";
        return "#ddd";
    };

    return (
        <div className="container">
            <h1 className="title">花車計算機！</h1>

            {/* 選択中 */}
            <p className="selected">
                {selected.length > 0 ? selected.join(" + ") : ""}
            </p>

            {/* 上エリア */}
            <div className="topArea">
                {/* 色一覧 */}
                <div className="legend">
                    {[100, 150, 200, 250, 350, 400, 450, 500, 600].map((price) => (
                        <div key={price} className="legendItem">
                            <span
                                className="colorDot"
                                style={{ background: getColor(price) }}
                            ></span>
                            <span>{price}円</span>
                        </div>
                    ))}
                </div>

                {/* 合計 */}
                <div className="AreaWrap">
                    <div className="totalArea">
                        <span>合計</span>
                        <span className="total">{total}円</span>
                    </div>

                    <button className="resetSmall" onClick={reset}>
                        リセット
                    </button>
                </div>
            </div>


            <h2 className="menuTitle">メニュー</h2>

            {/* メニュー */}
            <div className="grid">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="card"
                        style={{ background: getColor(item.price) }}
                        onClick={() => addPrice(item)}
                    >
                        <p className="name">{item.name}</p>
                        <p className="price">{item.price}円</p>
                    </div>
                ))}
            </div>
        </div>
    );
}