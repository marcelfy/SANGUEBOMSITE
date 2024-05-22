import React, { useEffect } from 'react'
import Style from './Graficos.module.css'
import ApexCharts from 'apexcharts'
import DoacaoService from '../../../service/DoacaoService.ts'
import UsuarioService from '../../../service/UsuarioService.ts'

export default function Graficos({ ehAdmin }) {

    useEffect(() => {
        console.log(ehAdmin);
        DoacaoService.get().then((resp) => {
            carregarGraficoDoacoesMl(resp)
            carregarGraficoDoacao(resp)

        })

        UsuarioService.get().then((resp) => {
            carregarGraficoIdades(resp)
            carregarGraficosUsuarios(resp)
            carregarGraficoCadastros(resp)
        })
    }, [])

    var tipoSanguineo = [
        { tipo: 'A+', key: 1 },
        { tipo: 'A-', key: 2 },
        { tipo: 'B+', key: 3 },
        { tipo: 'B-', key: 4 },
        { tipo: 'AB+', key: 5 },
        { tipo: 'AB-', key: 6 },
        { tipo: 'O+', key: 7 },
        { tipo: 'O-', key: 8 }

    ]

    const carregarGraficosUsuarios = (data) => {

        let aux = []

        aux = tipoSanguineo.map((t) => {
            return data?.filter((u) => u.tipoSanguineo == t.tipo && u.Perfil.nome != "Admin").length
        })

        var options = {
            series: aux,
            chart: {
                width: 380,
                type: 'pie',
            },
            colors: ['#FEB019', '#00E396', '#775DD0', '#FF4560', '#008FFB', '#1C4C2A', '#E210FF', '#B5C766'],

            fill: {
                colors: ['#FEB019', '#00E396', '#775DD0', '#FF4560', '#008FFB', '#1C4C2A', '#E210FF', '#B5C766'],
            },
            labels: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }],
            // legend:{
            //   labels: {
            //     colors:  ['#FEB019', '#00E396', '#775DD0', '#FF4560', '#008FFB', '#1C4C2A', '#E210FF', '#B5C766']
            //   }
            // },
            markers: {
                colors: ['#FEB019', '#00E396', '#775DD0', '#FF4560', '#008FFB', '#1C4C2A', '#E210FF', '#B5C766']

            },
            title: {
                text: "Quantidade de usuários por tipo sanguíneo",
                align: 'left',
                margin: 10,
                offsetX: 0,
                offsetY: 0,
                floating: false,
                style: {
                    fontSize: '14px',
                    fontWeight: 'bold',
                    fontFamily: undefined,
                    color: '#263238'
                },
            }
        };

        var chart = new ApexCharts(document.querySelector("#chart"), options);
        chart.render();

    }

    const carregarGraficoDoacao = (data) => {
        let aux = []

        aux = tipoSanguineo.map((t) => {
            return data?.filter((u) => u.tipoSangue == t.tipo).length
        })

        var options = {
            series: [{
                name: 'Quantidade de doações',
                data: aux
            }],
            chart: {
                type: 'bar',
                height: 350
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '55%',
                    endingShape: 'rounded'
                },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
            },
            xaxis: {
                categories: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
            },
            yaxis: {
                title: {
                    text: 'Doações'
                },
            },
            fill: {
                opacity: 1
            },
            tooltip: {
                y: {
                    formatter: function (val) {
                        return + val + " doações"
                    }
                }
            },
            title: {
                text: "Quantidade de doações por tipo sanguíneo",
                align: 'left',
                margin: 10,
                offsetX: 0,
                offsetY: 0,
                floating: false,
                style: {
                    fontSize: '14px',
                    fontWeight: 'bold',
                    fontFamily: undefined,
                    color: '#263238'
                },
            }
        };

        var chart = new ApexCharts(document.querySelector("#doacao"), options);
        chart.render();
    }

    const carregarGraficoCadastros = (data) => {
        let anoAtual = new Date().getFullYear();

        let dadosAnoAtual = data.filter((u) => new Date(u.createdAt).getFullYear() === anoAtual);

        let meses = dadosAnoAtual.map((u) => new Date(u.createdAt).getMonth() + 1);

        let countByMonth = Array.from({ length: 12 }, () => 0);
        meses.forEach((mes) => {
            countByMonth[mes - 1]++;
        });

        var options = {
            series: [{
                name: 'Quantidade de cadastros',
                data: countByMonth
            },
            ],
            chart: {
                type: 'line',
                height: 350,
                zoom: {
                    enabled: false
                }
            },
            plotOptions: {
                bar: {
                    horizontal: true,
                    columnWidth: '55%',
                    endingShape: 'rounded'
                },
            },
            stroke: {
                curve: 'straight'
            },
            xaxis: {
                categories: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
            },
            yaxis: {
                title: {
                    text: 'Cadastros'
                },
            },
            grid: {
                row: {
                    colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                    opacity: 0.5
                },
            },
            tooltip: {
                y: {
                    formatter: function (val) {
                        return val + " cadastros"
                    }
                }
            },
            title: {
                text: `Quantidade de cadastros por mês (ano de ${anoAtual})`, // Título com o ano atual
                align: 'left',
                margin: 10,
                offsetX: 0,
                offsetY: 0,
                floating: false,
                style: {
                    fontSize: '14px',
                    fontWeight: 'bold',
                    fontFamily: undefined,
                    color: '#263238'
                },
            }
        };

        var chart = new ApexCharts(document.querySelector("#cadastros"), options);
        chart.render();
    }

    const carregarGraficoIdades = (data) => {

        let idades = data.map((u) => {
            let dataNascimento = new Date(u.dataNascimento);
            let idade = new Date().getFullYear() - dataNascimento.getFullYear();
            return idade;
        });

        // Definir as faixas de idade
        let faixasIdade = [
            { faixa: 'de 18 a 30 anos', min: 18, max: 30 },
            { faixa: 'de 31 a 50 anos', min: 31, max: 50 },
            { faixa: 'de 51 a 65 anos', min: 51, max: 65 },
            { faixa: 'Maior que 66 anos', min: 66, max: Infinity }
        ];

        // Contar a quantidade de usuários em cada faixa de idade
        let countByAgeGroup = {};
        faixasIdade.forEach((faixa) => {
            countByAgeGroup[faixa.faixa] = 0;
        });

        idades.forEach((idade) => {
            faixasIdade.forEach((faixa) => {
                if (idade >= faixa.min && idade <= faixa.max) {
                    countByAgeGroup[faixa.faixa]++;
                }
            });
        });

        // Preparar dados para o gráfico de pizza
        let series = Object.values(countByAgeGroup);
        let labels = Object.keys(countByAgeGroup);

        var options = {
            series: series,
            chart: {
                width: 380,
                type: 'pie',
            },
            labels: labels,
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }], title: {
                text: "Quantidade de usuários por faixa etária",
                align: 'left',
                margin: 10,
                offsetX: 0,
                offsetY: 0,
                floating: false,
                style: {
                    fontSize: '14px',
                    fontWeight: 'bold',
                    fontFamily: undefined,
                    color: '#263238'
                },
            }
        };

        var chart = new ApexCharts(document.querySelector("#idade"), options);
        chart.render();
    }

    const carregarGraficoDoacoesMl = (data) => {
        let anoAtual = new Date().getFullYear(); // Obter o ano atual

        // Filtrar os dados para incluir apenas as doações do ano atual
        let dadosAnoAtual = data.filter((u) => new Date(u.createdAt).getFullYear() === anoAtual);

        let meses = Array.from({ length: 12 }, () => 0);

        // Calcular a quantidade total de ml de doações para cada mês
        dadosAnoAtual.forEach((doacao) => {
            let mes = new Date(doacao.createdAt).getMonth();
            meses[mes] += doacao.quantidade / 1000;
        });

        var options = {
            series: [{
                name: 'Quantidade de ml de doações',
                data: meses
            }],
            chart: {
                type: 'line',
                height: 350,
                zoom: {
                    enabled: false
                }
            },
            plotOptions: {
                line: {
                    curve: 'smooth'
                }
            },
            xaxis: {
                categories: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
            },
            yaxis: {
                title: {
                    text: 'Mililitros de doações'
                },
                // labels: {
                //   // formatter: function (value) {
                //       // return value.toString().replace('0.', '');
                //   }
                // }
            },
            grid: {
                row: {
                    colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                    opacity: 0.5
                },
            },
            tooltip: {
                y: {
                    formatter: function (val) {
                        return val + " ml de doações"
                    }
                }
            },
            title: {
                text: `Quantidade de ml de doações por mês (ano de ${anoAtual})`, // Título com o ano atual
                align: 'left',
                margin: 10,
                offsetX: 0,
                offsetY: 0,
                floating: false,
                style: {
                    fontSize: '14px',
                    fontWeight: 'bold',
                    fontFamily: undefined,
                    color: '#263238'
                },
            }
        };

        var chart = new ApexCharts(document.querySelector("#qntDoacoesml"), options);
        chart.render();
    }

    return (
        <div className={Style.graficos}>
            <div id='doacao' className={Style.grafico}></div>
            <div id='idade' className={Style.grafico}></div>
            <div id='qntDoacoesml' className={Style.grafico}></div>
            <div id='chart' className={Style.grafico}></div>
            {ehAdmin ?
                <div id='cadastros' className={Style.grafico}></div> : null
            }

        </div>
    )
}
