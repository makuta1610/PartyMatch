let radarChart_U;
let radarChart_A;
let radarChart_B;
let radarChart_C;
let radarChart_D;
let radarChart_E;


window.renderRadarChart_U = (canvas, userData) => {
    if (radarChart_U) radarChart_U.destroy();
    radarChart_U = createRadarChart(canvas, "あなた", userData, "rgba(255,99,132,1)", "rgba(255,99,132,0.2)");
  
};

window.renderRadarChart_A = (canvas, aData) => {
    if (radarChart_A) radarChart_A.destroy();
    radarChart_A = createRadarChart(canvas, "真中党", aData, "rgba(54,162,235,1)", "rgba(54,162,235,0.2)");
};

window.renderRadarChart_B = (canvas, bData) => {
    if (radarChart_B) radarChart_B.destroy();
    radarChart_B = createRadarChart(canvas, "保守党", bData, "rgba(75,192,192,1)", "rgba(75,192,192,0.2)");
};

window.renderRadarChart_C = (canvas, cData) => {
    if (radarChart_C) radarChart_C.destroy();
    radarChart_C = createRadarChart(canvas, "革新等", cData, "rgba(255,206,86,1)", "rgba(255,206,86,0.2)");
};

window.renderRadarChart_D = (canvas, dData) => {
    if (radarChart_D) radarChart_D.destroy();
    radarChart_D = createRadarChart(canvas, "堅実党", dData, "rgba(153,102,255,1)", "rgba(153,102,255,0.2)");
};

window.renderRadarChart_E = (canvas, eData) => {
    if (radarChart_E) radarChart_E.destroy();
    radarChart_E = createRadarChart(canvas, "革命党", eData, "rgba(255,159,64,1)", "rgba(255,159,64,0.2)");
};

//レーザーチャートを作成する関数
function createRadarChart(canvas, label, data, borderColor, backgroundColor) {
    const ctx = canvas.getContext("2d");
    return new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ["社会保障", "行政", "財政", "経済", "外交"],
            datasets: [{
                label: label,
                data: data,
                borderColor: borderColor,
                backgroundColor: backgroundColor
            }]
        },
        options: {
            responsive: false,
            scales: {
                r: {
                    min: 0,
                    max: 10,
                    ticks: { stepSize: 2 }
                }
            }
        }
    });
}
