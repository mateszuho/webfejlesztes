document.getElementById("mybutton").addEventListener("click", kiszamolo);
    function kiszamolo(){
        let vegeredmeny_kaloria = 0;
        let vegeredmeny_ar = 0;
        let sport = String(document.getElementById("sport_valasztas").value);
        
        const a = Number(document.getElementById("hungarian_harmony").value) ;
        const b = Number(document.getElementById("paprikas_csodavilag").value) ;
        const c = Number(document.getElementById("gourmet_langos").value) ;
        const d = Number(document.getElementById("edes_kurto").value) ;
        const e = Number(document.getElementById("lasagna_al_forno").value) ;
        const f = Number(document.getElementById("spaghetti_frutti").value) ;
        const g = Number(document.getElementById("pizza_margherita").value) ;
        const h = Number(document.getElementById("tiramisu_classico").value) ;
        const i = Number(document.getElementById("hagymaleves").value) ;
        const j = Number(document.getElementById("provance_ratatouille").value) ;
        const k = Number(document.getElementById("steak_tartare").value) ;
        const l = Number(document.getElementById("parisian_macarons").value) ;

        const hung = 420
        const papr = 520
        const gour = 650
        const edes = 390
        const lasa = 600
        const spag = 480
        const pizz = 720
        const tira = 450
        const hagym = 320
        const prov = 220
        const stea = 350
        const pari = 220

        const hung_ar = 4900
        const papr_ar = 8900
        const gour_ar = 5900
        const edes_ar = 3200
        const lasa_ar = 7900
        const spag_ar = 9900
        const pizz_ar = 5900
        const tira_ar = 3500
        const hagym_ar = 4900
        const prov_ar = 6900
        const stea_ar = 6900
        const pari_ar = 3500

        vegeredmeny_kaloria = (a*hung) + (b*papr) + (c*gour) + (d*edes) + (e*lasa) + (f*spag) + (g*pizz) + (h*tira) + (i*hagym) + (j*prov) + (k*stea) + (l*pari);
        vegeredmeny_ar = (a*hung_ar) + (b*papr_ar) + (c*gour_ar) + (d*edes_ar) + (e*lasa_ar) + (f*spag_ar) + (g*pizz_ar) + (h*tira_ar) + (i*hagym_ar) + (j*prov_ar) + (k*stea_ar) + (l*pari_ar);

        const futas_kaloria = 700;
        const uszas_kaloria = 550;
        const biciklizes_kaloria = 450;
        const sulyzo_kaloria = 300;
        const box_kaloria = 650;

        document.getElementById("kaloria_eredmeny").value = `${vegeredmeny_kaloria}kcal`
        document.getElementById("ar_eredmeny").value = `${vegeredmeny_ar}Ft`
        if (sport=="futas"){document.getElementById("ido_eredmeny").value = `${(Math.round(vegeredmeny_kaloria/futas_kaloria))} óra`}
        if (sport=="uszas"){document.getElementById("ido_eredmeny").value = `${(Math.round(vegeredmeny_kaloria/uszas_kaloria))} óra`}
        if (sport=="biciklizes"){document.getElementById("ido_eredmeny").value = `${(Math.round(vegeredmeny_kaloria/biciklizes_kaloria))} óra`}
        if (sport=="sulyzo"){document.getElementById("ido_eredmeny").value = `${(Math.round(vegeredmeny_kaloria/sulyzo_kaloria))} óra`}
        if (sport=="box"){document.getElementById("ido_eredmeny").value = `${(Math.round(vegeredmeny_kaloria/box_kaloria))} óra`}
        
    }