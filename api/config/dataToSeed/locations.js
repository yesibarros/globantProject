const mongoose  = require('mongoose')

const locationsArray = [
    {
        locationName: "Ciudad de México",
        phone: "+52 55 4162 9880",
        address: "Insurgentes Sur 859, Floor 15, Nápoles, C.P.: 03840, Ciudad de México, CDMX",
        country: "Mexico"
    },
    {
        locationName: "Guadalajara",
        phone: "+52 55 4162 9880",
        address: "Paseo de Los Virreyes 45, Floor 8 - Puerta de Hierro - Guadalajara - Zapopan- Jalisco",
        country: "Mexico"
    },
    {
        locationName: "Monterrey",
        phone: "+52 55 4162 9880",
        address: "Avenida Lázaro Cárdenas 2225 Valle Oriente San Pedro Garza García, NL, México 66260",
        country: "Mexico"
    },
    {
        locationName: "Dallas",
        phone: "+1 877-215-5230",
        address: "Waterway Tower, 433 E. Las Colinas Blvd, Suite 650, Irving, TX 75039",
        country: "USA"
    },
    {
        locationName: "Miami",
        phone: "+1 877-215-5230",
        address: "1001 Brickell Bay Dr, Suite 2737, Miami, FL 33131",
        country: "USA"
    },
    {
        locationName: "New York",
        phone: "+1 877-215-5230",
        address: "251 Park Ave S, 11th floor, New York, NY 10010",
        country: "USA"
    },
    {
        locationName: "Raleigh",
        phone: "+1 877-215-5230",
        address: "6601 Six Forks Rd, Suite 200, Raleigh, NC 27615",
        country: "USA"
    },
    {
        locationName: "San Francisco",
        phone: "+1 877-215-5230",
        address: "875 Howard St, Suite 320, San Francisco, CA 94103",
        country: "USA"
    },
    {
        locationName: "Seattle",
        phone: "+1 877-215-5230",
        address: "413 Pine St, Suite 200, Seattle, WA 98101",
        country: "USA"
    },
    {
        locationName: "Winston-Salem",
        phone: "+1 877-215-5230",
        address: "Winston Tower, 301 N Main St, Suite 2206, Winston-Salem, NC 27101",
        country: "USA"
    },
    {
        locationName: "Bahía Blanca",
        phone: "+54 11 4109-1700",
        address: "Dr. Luis María Drago 45, 9° Piso, C.P.: B8000DCA, Bahía Blanca, Buenos Aires",
        country: "Argentina"
    },
    {
        locationName: "Buenos Aires 1",
        phone: "+54 11 4109-1700",
        address: "Globant North Park, Correa 2442, C.P.: C1429DRN, Ciudad Autónoma de Buenos Aires",
        country: "Argentina"
    },
    {
        locationName: "Buenos Aires 2",
        phone: "+54 11 4109-1700",
        address: "Torre Laminar Plaza, Ingeniero Butty 240, 9° Piso, C.P.: C1001AFB, Ciudad Autónoma de Buenos Aires",
        country: "Argentina"
    },
    {
        locationName: "Córdoba",
        phone: "+54 11 4109-1700",
        address: "Edificio Capitalinas, Humberto Primo 630, 3° Piso, C.P.: X5000FAN, Córdoba, Córdoba",
        country: "Argentina"
    },
    {
        locationName: "La Plata",
        phone: "+54 11 4109-1700",
        address: "Calle 6 N°572, 1° Piso, C.P.: B1902CLX, La Plata, Buenos Aires",
        country: "Argentina"
    },
    {
        locationName: "Mar del Plata",
        phone: "+54 11 4109-1700",
        address: "Avenida Colón 1114, C.P.: B7600FXR, Mar del Plata, Buenos Aires",
        country: "Argentina"
    },
    {
        locationName: "Mendoza 1 ",
        phone: "+54 11 4109-1700",
        address: "Montevideo 230, 5° piso C.P.: M5500GGF, Mendoza, Mendoza",
        country: "Argentina"
    },
    {
        locationName: "Mendoza 2",
        phone: "+54 (261) 524-4844",
        address: "Gutierrez 50, 1° Piso, Ciudad, Mendoza",
        country: "Argentina"
    },
    {
        locationName: "Mendoza 3",
        phone: "+54 (261) 542-3033",
        address: "Darragueira 7097, M5505 Luján de Cuyo, Mendoza",
        country: "Argentina"
    },
    {
        locationName: "Resistencia",
        phone: "+54 11 4109-1700",
        address: "Pte. Dr. Arturo Frondizi 174, 5° piso, C.P.: H3500CAD, Resistencia, Chaco",
        country: "Argentina"
    },
    {
        locationName: "Rosario 1",
        phone: "+54 11 4109-1700",
        address: "Nordlink: Madres de Plaza 25 de Mayo 3020 Rosario",
        country: "Argentina"
    },
    {
        locationName: "Rosario 2",
        phone: "+54 11 4109-1700",
        address: "Gral. Alvear 1670, C.P.: S2000QGR, Rosario, Santa Fe",
        country: "Argentina"
    },
    {
        locationName: "Tandil 1",
        phone: "+54 11 4109-1700",
        address: "9 de julio 421, C.P.: B7000AQI, Tandil, Buenos Aires",
        country: "Argentina"
    },
    {
        locationName: "Tandil 2",
        phone: "+54 11 4109-1700",
        address: "9 de julio 455, C.P.: B7000AQI, Tandil, Buenos Aires",
        country: "Argentina"
    },
    {
        locationName: "Tucumán",
        phone: "+54 11 4109-1700",
        address: "Av. Juan Domingo Perón 2300, C.P.: T4107, Yerba Buena, Tucumán",
        country: "Argentina"
    },
    {
        locationName: "Sao Paulo",
        phone: "+55 11 3042-7714",
        address: "Rua Diogo Moreira, 75 - 7 andar - Pinheiros, Cep: 05423-010, São Paulo, SP",
        country: "Brazil"
    },
    {
        locationName: "Sao Paulo",
        phone: "+55 11 3042-7714",
        address: "Av. Brigadeiro Luiz Antonio, 487 - 9° Andar, Bela Vista, São Paulo ",
        country: "Brazil"
    },
    {
        locationName: "Santiago de Chile",
        phone: "+56 2 2405 3260",
        address: "Cerro el Plomo 5630, Las Condes, Torre 8, Piso 8, Santiago de Chile",
        country: "Chile"
    },
    {
        locationName: "Bogotá 1",
        phone: "+57 1 489-1340",
        address: "Avenida Calle 26 No. 92 - 32, Edificio Gold 6, Centro Empresarial Connecta, Bogotá",
        country: "Colombia"
    },
    {
        locationName: "Bogotá 2",
        phone: "+57 1 489-1340",
        address: "Av El Dorado, No. 69B-45, 3° Piso, Salitre, Bogotá",
        country: "Colombia"
    },
    {
        locationName: "Bogotá 3",
        phone: "+57 328-9540",
        address: "Carrera 13 # 97 - 35, Edificio 14.97 Park, 3° Piso, Bogotá",
        country: "Colombia"
    },
    {
        locationName: "Medellín",
        phone: "+57 1 489-1340",
        address: "Av. El Poblado #5A 113, 16° Piso, One plaza, Medellín",
        country: "Colombia"
    },
    {
        locationName: "Lima",
        phone: "+51 (1) 717-3350",
        address: "Centro Empresarial Altavista, Av. República de Panamá 3591, Piso 20, San Isidro",
        country: "Peru"
    },
    {
        locationName: "Montevideo",
        phone: "+598 2927 2270",
        address: "Aguada Park, Paraguay 2141, 9° Piso, 11800 Montevideo",
        country: "Uruguay"
    },
    {
        locationName: "Minsk",
        phone: "+ 375 33 346 24 62",
        address: "4th Floor, Business Center Fahrenheit, Pritytskogo STR. 79, Minsk, 220140, Belarus",
        country: "Belarus"
    },
    {
        locationName: "Madrid",
        phone: "+34 917 874 700",
        address: "Torre Europa, Paseo de la Castellana, 95, Piso 13 B, 28046 Madrid",
        country: "Spain"
    },
    {
        locationName: "París",
        phone: "+1 877 215 5230",
        address: "5 Parvis Alan Turing, 75013 Paris, France",
        country: "France"
    },
    {
        locationName: "Luxembourg",
        phone: "+352 20 301596",
        address: "37A, Avenue JF Kennedy, L-1855, Luxembourg",
        country: "Luxembourg"
    },
    {
        locationName: "Cluj-Napoca",
        phone: "+40-264-418-686",
        address: "Strada Republicii 24, Cluj-Napoca 400000",
        country: "Romania"
    },
    {
        locationName: "United Kingdom",
        phone: "+44 20 7979-1885",
        address: "5th Floor 36-38 Hatton Garden, London EC1N 8EB",
        country: "United Kingdom"
    },
    {
        locationName: "Bengaluru",
        phone: "+1 800-266-0206",
        address: "Unit #4,5 and 6, Innovator Building, 7th floor, ITPL, Whitefield Main road, Bengaluru",
        country: "India"
    },
    {
        locationName: "Pune",
        phone: "+1 800-266-0206",
        address: "4th & 5th Floor, IT8 Building, Blue Ridge SEZ, Rajiv Gandhi Infotech Park - Phase-I, Hinjewadi, Pune",
        country: "India"
    },
]

module.exports = locationsArray