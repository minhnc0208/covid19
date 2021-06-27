
async function getData(){
    const responseChart = await fetch("https://api.apify.com/v2/key-value-stores/Tksmptn5O41eHrT4d/records/LATEST");
    const responseData = await fetch("https://api.apify.com/v2/key-value-stores/ZsOpZgeg7dFS1rgfM/records/LATEST");
    const responseHcKey = await fetch("https://api.apify.com/v2/key-value-stores/p3nS2Q9TUn6kUOriJ/records/LATEST");  
    const dataChart = await responseChart.json();
    const data = await responseData.json();
    const hcKey = await responseHcKey.json();
    return {dataChart, data, hcKey};
}

async function main() {
    const { canhiem, cakhoi, catuvong } = await (await getData()).dataChart;
    const { infected, treated, recovered, deceased, detail } = await (await getData()).data;
    createData(infected, treated, recovered, deceased);
    const { key } = await (await getData()).hcKey;
    createTable(detail, key);
    createChart(canhiem, "Số ca nhiễm bệnh", "rgb(201, 48, 44)", "nhiemChart");
    createChart(cakhoi, "Số ca khỏi bệnh", "rgb(40, 167, 69)", "khoiChart");
    createChart(catuvong, "Số ca tử vong", "#666", "tuvongChart");
}

function createData(infected, treated, recovered, deceased){
  document.getElementById("infected").textContent = infected;
  document.getElementById("treated").textContent = treated;
  document.getElementById("recovered").textContent = recovered;
  document.getElementById("deceased").textContent = deceased;
}


function createChart(data, name, color, idChart){
    var labels = [];
    var dataset = [];
    for(let i = 0; i < data.length; i++){
        labels.push(data[i].day);
        dataset.push(data[i].quantity);
    }

    var data = {
        labels: labels,
        datasets: [{
            label: name,
            backgroundColor: color,
            borderColor: color,
            data: dataset,
        }]
    };

    const config = {
        type: 'line',
        data,
        options: {
            tension: 0.3
        }
    };

    var myChart = new Chart(
        document.getElementById(idChart),
        config
    );
}

var state_specific = {
    VNM429: {
      name: "Quảng Ninh"
    },
    VNM444: {
      name: "Tây Ninh"
    },
    VNM450: {
      name: "Điện Biên"
    },
    VNM451: {
      name: "Đông Bắc"
    },
    VNM452: {
      name: "Thái Nguyên"
    },
    VNM453: {
      name: "Lai Châu"
    },
    VNM454: {
      name: "Lạng Sơn"
    },
    VNM455: {
      name: "Sơn La"
    },
    VNM456: {
      name: "Thanh Hóa"
    },
    VNM457: {
      name: "Tuyên Quang"
    },
    VNM458: {
      name: "Yên Bái"
    },
    VNM459: {
      name: "Hòa Bình"
    },
    VNM460: {
      name: "Hải Dương"
    },
    VNM4600: {
      name: "Hải Phòng"
    },
    VNM461: {
      name: "Hưng Yên"
    },
    VNM462: {
      name: "Hà Nội"
    },
    VNM463: {
      name: "Bắc Ninh"
    },
    VNM464: {
      name: "Vĩnh Phúc"
    },
    VNM466: {
      name: "Ninh Bình"
    },
    VNM467: {
      name: "Hà Nam"
    },
    VNM468: {
      name: "Nam Định"
    },
    VNM469: {
      name: "Phú Thọ"
    },
    VNM470: {
      name: "Bắc Giang"
    },
    VNM471: {
      name: "Thái Bình"
    },
    VNM474: {
      name: "Hà Tĩnh"
    },
    VNM475: {
      name: "Nghệ An"
    },
    VNM476: {
      name: "Quảng Bình"
    },
    VNM477: {
      name: "Dak Lak"
    },
    VNM478: {
      name: "Gia Lai"
    },
    VNM479: {
      name: "Khánh Hòa"
    },
    VNM480: {
      name: "Lâm Đồng"
    },
    VNM481: {
      name: "Ninh Thuận"
    },
    VNM482: {
      name: "Phú Yên"
    },
    VNM483: {
      name: "Bình Dương"
    },
    VNM4834: {
      name: "Tiền Giang"
    },
    VNM4835: {
      name: "Đắk Nông"
    },
    VNM484: {
      name: "Bình Phước"
    },
    VNM485: {
      name: "Bình Định"
    },
    VNM486: {
      name: "Kon Tum"
    },
    VNM487: {
      name: "Quàng Nam"
    },
    VNM488: {
      name: "Quảng Ngãi"
    },
    VNM489: {
      name: "Quảng Trị"
    },
    VNM490: {
      name: "Thừa Thiên Huế"
    },
    VNM491: {
      name: "Đà Nẵng"
    },
    VNM495: {
      name: "Bà Rịa Vũng Tàu"
    },
    VNM496: {
      name: "Bình Thuận"
    },
    VNM497: {
      name: "Đông Nam Bộ"
    },
    VNM498: {
      name: "An Giang"
    },
    VNM499: {
      name: "Can Tho"
    },
    VNM500: {
      name: "Đồng Tháp"
    },
    VNM501: {
      name: "Hồ Chí Minh",
      inactive: "no"
    },
    VNM502: {
      name: "Kiên Giang"
    },
    VNM503: {
      name: "Long An"
    },
    VNM504: {
      name: "Bến Tre"
    },
    VNM505: {
      name: "Hậu Giang"
    },
    VNM506: {
      name: "Bạc Liêu"
    },
    VNM507: {
      name: "Cà Mau"
    },
    VNM508: {
      name: "Sóc Trăng"
    },
    VNM509: {
      name: "Trà Vinh"
    },
    VNM510: {
      name: "Vĩnh Long"
    },
    VNM511: {
      name: "Cao Bằng"
    },
    VNM512: {
      name: "Hà Giang"
    },
    VNM5483: {
      name: "Lào Cai"
    }
}

var colors = [
    "rgb(247, 247, 247)",
    "rgb(197, 197, 115)",
    "rgb(255, 156, 7)",
    "rgb(255, 121, 7)",
    "rgb(224, 28, 28)",
    "rgb(247, 2, 2)",
]

function createTable(detail, key){
    for(let i = 0; i < detail.length; i++){
        var tr = document.createElement("tr");

        var name = key.find(k => k["hec-key"] == detail[i]["hc-key"]);
        if(name){
            var tdName = document.createElement("td");
            tdName.textContent = exeString(name.name);

            for (const property in state_specific) {
                if(removeAccents(state_specific[property].name).toLowerCase() == removeAccents(exeString(name.name)).toLowerCase()){
                    state_specific[property].color = setColorMap(parseInt(detail[i].value), colors);
                    state_specific[property].description = `
                    <span>Số ca nhiễm: <badge>${detail[i].value}</badge></span><br>
                    <span>Số ca khỏi: <badge>${detail[i].socakhoi}</badge></span><br>
                    <span>Số ca tử vong: <badge>${detail[i].socatuvong}</badge></span>
                    `;
                }
            }

            // var index = simplemaps_countrymap_mapdata.state_specific.findIndex(st => st.name ==exeString(name.name));
            // if(index){
            //     simplemaps_countrymap_mapdata.state_specific.findIndex[i].description = "OK"
            // }

            var tdNhiem = document.createElement("td");
            tdNhiem.textContent = detail[i].value;

            var tdKhoi = document.createElement("td");
            tdKhoi.textContent = detail[i].socakhoi;

            var tdTuVong = document.createElement("td");
            tdTuVong.textContent = detail[i].socatuvong;

            tr.appendChild(tdName);
            tr.appendChild(tdNhiem);
            tr.appendChild(tdKhoi);
            tr.appendChild(tdTuVong);
            document.getElementById("table").appendChild(tr)
        }
    }
}

function exeString(text){
    var textChange = ""; 
    text.split("-").forEach(t => {
        textChange += capitalizeFirstLetter(t);
        textChange += " ";
    })
    return textChange.trim()
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function setColorMap(value){
    if(value >= 1 && value <= 5){
        return colors[1];
    } else if(value > 5 && value <= 10){
        return colors[2];
    } else if(value > 10 && value <= 20){
        return colors[3]
    } else if(value > 20 && value <= 50){
        return colors[4]
    } else if(value > 50){
        return colors[5]
    } else{
        return colors[0]
    }
}

function removeAccents(str) {
    var AccentsMap = [
        "aàảãáạăằẳẵắặâầẩẫấậ",
        "AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬ",
        "dđ", "DĐ",
        "eèẻẽéẹêềểễếệ",
        "EÈẺẼÉẸÊỀỂỄẾỆ",
        "iìỉĩíị",
        "IÌỈĨÍỊ",
        "oòỏõóọôồổỗốộơờởỡớợ",
        "OÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢ",
        "uùủũúụưừửữứự",
        "UÙỦŨÚỤƯỪỬỮỨỰ",
        "yỳỷỹýỵ",
        "YỲỶỸÝỴ"    
    ];
    for (var i=0; i<AccentsMap.length; i++) {
        var re = new RegExp('[' + AccentsMap[i].substr(1) + ']', 'g');
        var char = AccentsMap[i][0];
        str = str.replace(re, char);
    }
    return str;
}