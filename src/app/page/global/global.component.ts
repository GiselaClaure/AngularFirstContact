import { Component, OnInit } from '@angular/core';
import { Films, NetflixModel } from './models/netflix-model';


@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.scss']
 })
 export class GlobalComponent implements OnInit {
  
  public netflixModel: NetflixModel;
  public otherFilms: Films;

  constructor() {
    this.netflixModel = {
      nav:{
        pageName: "Warner Live",
        logo:{
          src: 'https://graffica.info/wp-content/uploads/2019/11/SHIELDONLYCOLOR_LOCL_POWERPT_500px_0_0-1200x1152.png',
          alt: 'Logo-Warner' ,
        }
      },
      hero: {
        title: "LOS 5 MÁS POPULARES HOY",
        gallery: [
          {
              src:'https://occ-0-563-90.1.nflxso.net/dnm/api/v6/Da_vleYcahiCE7JMYt8LJRyoenc/AAAABSz_snPCYW8UIe4V2xjF1zevH9nF49f7r47vMDJ9TLIysiWr5m157GpQFDdGMfQl27pn3sB82DXALOTHrLjSzCOYV1JOnAMPjuLOwb8y00HGduWXB2rgAXy0vEJZMA.jpg',
              alt:'Squid-Game',
          },
          {
              src:'https://siete24.mx/wp-content/uploads/2020/04/F8EB17AD-61DF-4607-8E3D-88565B6A385D.jpeg',
              alt:'El-Último-Baile',
          },
          {
              src:'https://i0.wp.com/noescinetodoloquereluce.com/wp-content/uploads/2021/10/caso.jpg?fit=426%2C597&ssl=1',
              alt:'El-Caso-Hartung',
          },
          {
              src:'https://sm.ign.com/ign_es/tv/s/sex-educat/sex-education-temporada-2_5h3e.jpg',
              alt:'Sex-Education',
          },
          {
              src:'https://es.web.img3.acsta.net/pictures/15/07/23/12/02/293866.jpg',
              alt:'The-Last-Kingdom',
          },
        ]
      },

      films:{
        title: "DRAMAS",
        gallery:[
          {
            src:'https://occ-0-3015-360.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZNcr58o-CeZ_HVMFp88BSlmyRZNWRH_PBLosL7gr1nVsIwzJTFXJsRsBKFaPIgJb5bOHFLrPEnSH1jLBu6nXjD3TyY.webp?r=35f',
            alt:'peli',
          },
          {
            src:'https://occ-0-3015-360.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQ__6yG1zMzWPsoiKHHNhkpSv-ZbJptIzKhXLLfwLqvKXSd-0ePTJenjVR4fuuLOtMzZMIZFHaLoJPtNUwqNtu1RL2k.webp?r=6a9',
            alt:'peli',
          },
          {
            src:'https://occ-0-3015-360.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU6PvH-ZJMZczsgX65l7u_rZ6i_DZaR3ixt1AGEpopObwJ7Wc54lbv1Nww4_hS82HlRb_9K1nmHzAIGi0i2bbxBuSws.webp?r=097',
            alt:'peli',
          },
          {
            src:'https://occ-0-3015-360.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeYEyDtFa5NRburMAJFgq1LV4Q9mmZsbZmk2pU-n6QYBevEOs4UzFppkGdMtlBINeqXYeimqxp5IQQleXDWi_KxiW0M.webp?r=275',
            alt:'peli',
          },
          {
            src:'https://occ-0-3015-360.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdk8FSPIdG-RqZdo2RM1ihXOJAwUWtzIz5EAnxxjIVX8wa844LeGZCKYbsbmpCmSRETbgG9JOqQa_6td6GYLhNlfhM8.webp?r=e28',
            alt:'peli',
          },
          {
            src:'https://occ-0-3015-360.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQwmIkMvlo1nmR5mvPoy65_lyadV4nU4DWVaFZQRE75sSKRRsw-vXhVTRsnWcSN1gANWxkZlaZ16OquIKiyTGon_ETg.webp?r=ba3',
            alt:'peli',
          }
        ]
      }    
  }
  this.otherFilms={
    title: "ACCIÓN",
    gallery:[
      {
        src:'https://occ-0-3015-360.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfUnQhJpeilOMKIzHgPYES5qyciOx3TCGh_vR4MdegD2_-9x_b5L0BfbYanZpo8p-YhQcAqZ49pyKLR5nl1Flu8U1xk.webp?r=7e2',
        alt:'',
      },
      {
        src:'https://occ-0-3015-360.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWQvGSKLi2YWeJ4ZNL77K2Mt0NEIFsI0vHQRsnMZpkTjYo-30Xpjqdb_c_9K5GFTHKOrMgtK8V5BIAeXYn4pnv3LW6Q.webp?r=8f4',
        alt:'',
      },
      {
        src:'https://occ-0-3015-360.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVRJiFfCH9JaYZB4-sR4Knv_ORXaFiyANQmwVXQhOKFpdLVgmEcqH5l2D15Byop25RtTGEnX28LfnmoiKW4OcqLy2s0.webp?r=962',
        alt:'',
      },
      {
        src:'https://occ-0-3015-360.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXSeFVKZ8okwqJdAq_3T4UV8-8fHeTVtXDKt_uLqJhJRZF7V_9JnkNAhsNxu4R3x_WA3_ng9E-P_GrxMltrlX2ugaL0.webp?r=e03',
        alt:'',
      },
      {
        src:'https://occ-0-3015-360.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRAvtoaeYwRj8gtCK5yU4NrIHEVZms7G3ujMmSB33Yjw1mUFuaCFn8b8vW1ZcIPIx9avtKa4Wwbfrj_gowPODDJvzdQ.webp?r=780',
        alt:'',
      },
      {
        src:'https://occ-0-3015-360.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUV-HzeQvW_xfNPDEeIC7Vswlmww88hen2CzZ9_wzG6WyjFrkVJ7Ui5nxeEPuB8rHUd95lIuJREkYI4Ybc9oNxxkbTI.webp?r=64f',
        alt:'',
      }
    ]
  }
} 
  ngOnInit(): void {
  }
} 
