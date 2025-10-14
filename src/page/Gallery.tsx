import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom"; // 👈 importante
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import ScrollToTop from "../ScrollTop";

const slides = [
  {
    title: "ECOTRUEQUE 20-09-2025",
    mainImage: "ECOTRUEQUE 20-09-2025/1.jpeg",
    middleImages: [
      "ECOTRUEQUE 20-09-2025/2.jpeg",
      "ECOTRUEQUE 20-09-2025/3.jpeg",
      "ECOTRUEQUE 20-09-2025/4.jpeg",
      "ECOTRUEQUE 20-09-2025/5.jpeg",
      "ECOTRUEQUE 20-09-2025/6.jpeg",
      "ECOTRUEQUE 20-09-2025/7.jpeg",
      "ECOTRUEQUE 20-09-2025/8.jpeg",
      "ECOTRUEQUE 20-09-2025/9.jpeg",
      "ECOTRUEQUE 20-09-2025/10.jpeg",
      "ECOTRUEQUE 20-09-2025/11.jpeg",
      "ECOTRUEQUE 20-09-2025/12.jpeg",
      "ECOTRUEQUE 20-09-2025/13.jpeg",
    ],
  },
  {
    title:
      "II CORTE DE EVALUACIÓN DEL CONCURSO DENOMINADO ADECUADAS PRACTICAS AMBIENTALES EN NUESTRA I.E",
    mainImage:
      "II CORTE DE EVALUACIÓN DEL CONCURSO DENOMINADO ADECUADAS PRACTICAS AMBIENTALES EN NUESTRA I.E/1.jpg",
    middleImages: [
      "II CORTE DE EVALUACIÓN DEL CONCURSO DENOMINADO ADECUADAS PRACTICAS AMBIENTALES EN NUESTRA I.E/2.jpg",
      "II CORTE DE EVALUACIÓN DEL CONCURSO DENOMINADO ADECUADAS PRACTICAS AMBIENTALES EN NUESTRA I.E/3.jpg",
      "II CORTE DE EVALUACIÓN DEL CONCURSO DENOMINADO ADECUADAS PRACTICAS AMBIENTALES EN NUESTRA I.E/4.jpg",
      "II CORTE DE EVALUACIÓN DEL CONCURSO DENOMINADO ADECUADAS PRACTICAS AMBIENTALES EN NUESTRA I.E/5.jpg",
      "II CORTE DE EVALUACIÓN DEL CONCURSO DENOMINADO ADECUADAS PRACTICAS AMBIENTALES EN NUESTRA I.E/6.jpg",
      "II CORTE DE EVALUACIÓN DEL CONCURSO DENOMINADO ADECUADAS PRACTICAS AMBIENTALES EN NUESTRA I.E/7.jpg",
      "II CORTE DE EVALUACIÓN DEL CONCURSO DENOMINADO ADECUADAS PRACTICAS AMBIENTALES EN NUESTRA I.E/8.jpg",
      "II CORTE DE EVALUACIÓN DEL CONCURSO DENOMINADO ADECUADAS PRACTICAS AMBIENTALES EN NUESTRA I.E/9.jpg",
      "II CORTE DE EVALUACIÓN DEL CONCURSO DENOMINADO ADECUADAS PRACTICAS AMBIENTALES EN NUESTRA I.E/10.jpg",
      "II CORTE DE EVALUACIÓN DEL CONCURSO DENOMINADO ADECUADAS PRACTICAS AMBIENTALES EN NUESTRA I.E/11.jpg",
      "II CORTE DE EVALUACIÓN DEL CONCURSO DENOMINADO ADECUADAS PRACTICAS AMBIENTALES EN NUESTRA I.E/12.jpg",
      "II CORTE DE EVALUACIÓN DEL CONCURSO DENOMINADO ADECUADAS PRACTICAS AMBIENTALES EN NUESTRA I.E/13.jpg",
      "II CORTE DE EVALUACIÓN DEL CONCURSO DENOMINADO ADECUADAS PRACTICAS AMBIENTALES EN NUESTRA I.E/14.jpg",
      "II CORTE DE EVALUACIÓN DEL CONCURSO DENOMINADO ADECUADAS PRACTICAS AMBIENTALES EN NUESTRA I.E/15.jpg",
      "II CORTE DE EVALUACIÓN DEL CONCURSO DENOMINADO ADECUADAS PRACTICAS AMBIENTALES EN NUESTRA I.E/16.jpg",
      "II CORTE DE EVALUACIÓN DEL CONCURSO DENOMINADO ADECUADAS PRACTICAS AMBIENTALES EN NUESTRA I.E/17.jpg",
      "II CORTE DE EVALUACIÓN DEL CONCURSO DENOMINADO ADECUADAS PRACTICAS AMBIENTALES EN NUESTRA I.E/18.jpg",
    ],
  },
  {
    title:
      "PARTICIPACIÓN EN PREMIACIÓN DEL CONCURSO INTERESCOLAR SOBRE EL RECICLAJE Y ELIMINACIÓN DE CRIADEROS POTENCIALES DE ZANCUDOS",
    mainImage:
      "PARTICIPACIÓN EN PREMIACIÓN DEL CONCURSO INTERESCOLAR SOBRE EL RECICLAJE Y ELIMINACIÓN DE CRIADEROS POTENCIALES DE ZANCUDOS/1.jpg",
    middleImages: [
      "PARTICIPACIÓN EN PREMIACIÓN DEL CONCURSO INTERESCOLAR SOBRE EL RECICLAJE Y ELIMINACIÓN DE CRIADEROS POTENCIALES DE ZANCUDOS/2.jpg",
      "PARTICIPACIÓN EN PREMIACIÓN DEL CONCURSO INTERESCOLAR SOBRE EL RECICLAJE Y ELIMINACIÓN DE CRIADEROS POTENCIALES DE ZANCUDOS/3.jpg",
      "PARTICIPACIÓN EN PREMIACIÓN DEL CONCURSO INTERESCOLAR SOBRE EL RECICLAJE Y ELIMINACIÓN DE CRIADEROS POTENCIALES DE ZANCUDOS/4.jpg",
      "PARTICIPACIÓN EN PREMIACIÓN DEL CONCURSO INTERESCOLAR SOBRE EL RECICLAJE Y ELIMINACIÓN DE CRIADEROS POTENCIALES DE ZANCUDOS/5.jpg",
      "PARTICIPACIÓN EN PREMIACIÓN DEL CONCURSO INTERESCOLAR SOBRE EL RECICLAJE Y ELIMINACIÓN DE CRIADEROS POTENCIALES DE ZANCUDOS/6.jpg",
    ],
  },
  {
    title: "SENSIBILIACION I.E ABELARDO QUIÑONES 02-09-2025",
    mainImage: "SENSIBILIACION I.E ABELARDO QUIÑONES 02-09-2025/1.jpeg",
    middleImages: [
      "SENSIBILIACION I.E ABELARDO QUIÑONES 02-09-2025/2.jpeg",
      "SENSIBILIACION I.E ABELARDO QUIÑONES 02-09-2025/3.jpeg",
      "SENSIBILIACION I.E ABELARDO QUIÑONES 02-09-2025/4.jpeg",
      "SENSIBILIACION I.E ABELARDO QUIÑONES 02-09-2025/5.jpeg",
      "SENSIBILIACION I.E ABELARDO QUIÑONES 02-09-2025/6.jpeg",
      "SENSIBILIACION I.E ABELARDO QUIÑONES 02-09-2025/7.jpeg",
    ],
  },
  {
    title: "SENSIBILIZACION I.E APLICACION 11-09-2025",
    mainImage: "SENSIBILIZACION I.E APLICACION 11-09-2025/1.jpeg",
    middleImages: [
      "SENSIBILIZACION I.E APLICACION 11-09-2025/2.jpeg",
      "SENSIBILIZACION I.E APLICACION 11-09-2025/3.jpeg",
      "SENSIBILIZACION I.E APLICACION 11-09-2025/4.jpeg",
      "SENSIBILIZACION I.E APLICACION 11-09-2025/5.jpeg",
      "SENSIBILIZACION I.E APLICACION 11-09-2025/6.jpeg",
      "SENSIBILIZACION I.E APLICACION 11-09-2025/7.jpeg",
    ],
  },
  {
    title: "SENSIBILIZACION I.E AUGUSTO BOURONCLE ACUÑA 18-09-2025",
    mainImage: "SENSIBILIZACION I.E AUGUSTO BOURONCLE ACUÑA 18-09-2025/1.jpg",
    middleImages: [
      "SENSIBILIZACION I.E AUGUSTO BOURONCLE ACUÑA 18-09-2025/2.jpeg",
      "SENSIBILIZACION I.E AUGUSTO BOURONCLE ACUÑA 18-09-2025/3.jpeg",
      "SENSIBILIZACION I.E AUGUSTO BOURONCLE ACUÑA 18-09-2025/4.jpeg",
      "SENSIBILIZACION I.E AUGUSTO BOURONCLE ACUÑA 18-09-2025/5.jpeg",
      "SENSIBILIZACION I.E AUGUSTO BOURONCLE ACUÑA 18-09-2025/6.jpeg",
      "SENSIBILIZACION I.E AUGUSTO BOURONCLE ACUÑA 18-09-2025/7.jpeg",
      "SENSIBILIZACION I.E AUGUSTO BOURONCLE ACUÑA 18-09-2025/8.jpeg",
      "SENSIBILIZACION I.E AUGUSTO BOURONCLE ACUÑA 18-09-2025/9.jpeg",
    ],
  },
  {
    title: "SENSIBILIZACION I.E CRISTO SALVADOR 16-09-2025",
    mainImage: "SENSIBILIZACION I.E CRISTO SALVADOR 16-09-2025/1.jpeg",
    middleImages: [
      "SENSIBILIZACION I.E CRISTO SALVADOR 16-09-2025/2.jpeg",
      "SENSIBILIZACION I.E CRISTO SALVADOR 16-09-2025/3.jpeg",
      "SENSIBILIZACION I.E CRISTO SALVADOR 16-09-2025/4.jpeg",
      "SENSIBILIZACION I.E CRISTO SALVADOR 16-09-2025/5.jpeg",
      "SENSIBILIZACION I.E CRISTO SALVADOR 16-09-2025/6.jpeg",
      "SENSIBILIZACION I.E CRISTO SALVADOR 16-09-2025/7.jpeg",
      "SENSIBILIZACION I.E CRISTO SALVADOR 16-09-2025/8.jpeg",
      "SENSIBILIZACION I.E CRISTO SALVADOR 16-09-2025/9.jpeg",
      "SENSIBILIZACION I.E CRISTO SALVADOR 16-09-2025/10.jpeg",
    ],
  },
  {
    title: "SENSIBILIZACION I.E GUILLERMO BILLINGHURST 24-09-2025",
    mainImage: "SENSIBILIZACION I.E GUILLERMO BILLINGHURST 24-09-2025/1.jpeg",
    middleImages: [
      "SENSIBILIZACION I.E GUILLERMO BILLINGHURST 24-09-2025/2.jpeg",
      "SENSIBILIZACION I.E GUILLERMO BILLINGHURST 24-09-2025/3.jpeg",
      "SENSIBILIZACION I.E GUILLERMO BILLINGHURST 24-09-2025/4.jpeg",
      "SENSIBILIZACION I.E GUILLERMO BILLINGHURST 24-09-2025/5.jpeg",
      "SENSIBILIZACION I.E GUILLERMO BILLINGHURST 24-09-2025/6.jpeg",
      "SENSIBILIZACION I.E GUILLERMO BILLINGHURST 24-09-2025/7.jpeg",
      "SENSIBILIZACION I.E GUILLERMO BILLINGHURST 24-09-2025/8.jpeg",
      "SENSIBILIZACION I.E GUILLERMO BILLINGHURST 24-09-2025/9.jpeg",
      "SENSIBILIZACION I.E GUILLERMO BILLINGHURST 24-09-2025/10.jpeg",
      "SENSIBILIZACION I.E GUILLERMO BILLINGHURST 24-09-2025/11.jpeg",
      "SENSIBILIZACION I.E GUILLERMO BILLINGHURST 24-09-2025/12.jpeg",
    ],
  },
  {
    title: "SENSIBILIZACION I.E KLARETIANO 06-10-2025",
    mainImage: "SENSIBILIZACION I.E KLARETIANO 06-10-2025/1.jpg",
    middleImages: [
      "SENSIBILIZACION I.E KLARETIANO 06-10-2025/2.jpg",
      "SENSIBILIZACION I.E KLARETIANO 06-10-2025/3.jpg",
      "SENSIBILIZACION I.E KLARETIANO 06-10-2025/4.jpg",
      "SENSIBILIZACION I.E KLARETIANO 06-10-2025/5.jpg",
      "SENSIBILIZACION I.E KLARETIANO 06-10-2025/6.jpg",
      "SENSIBILIZACION I.E KLARETIANO 06-10-2025/7.jpg",
      "SENSIBILIZACION I.E KLARETIANO 06-10-2025/8.jpg",
    ],
  },
  {
    title: "SENSIBILIZACION I.E MARCELINO 04-09-2025",
    mainImage: "SENSIBILIZACION I.E MARCELINO 04-09-2025/1.jpeg",
    middleImages: [
      "SENSIBILIZACION I.E MARCELINO 04-09-2025/2.jpeg",
      "SENSIBILIZACION I.E MARCELINO 04-09-2025/3.jpeg",
      "SENSIBILIZACION I.E MARCELINO 04-09-2025/4.jpeg",
      "SENSIBILIZACION I.E MARCELINO 04-09-2025/5.jpeg",
      "SENSIBILIZACION I.E MARCELINO 04-09-2025/6.jpeg",
      "SENSIBILIZACION I.E MARCELINO 04-09-2025/7.jpeg",
      "SENSIBILIZACION I.E MARCELINO 04-09-2025/8.jpeg",
      "SENSIBILIZACION I.E MARCELINO 04-09-2025/9.jpeg",
      "SENSIBILIZACION I.E MARCELINO 04-09-2025/10.jpeg",
      "SENSIBILIZACION I.E MARCELINO 04-09-2025/11.jpeg",
      "SENSIBILIZACION I.E MARCELINO 04-09-2025/12.jpeg",
    ],
  },
  {
    title: "SENSIBILIZACION I.E MARIA MOLINARI 30-09-2025",
    mainImage: "SENSIBILIZACION I.E MARIA MOLINARI 30-09-2025/1.jpeg",
    middleImages: [
      "SENSIBILIZACION I.E MARIA MOLINARI 30-09-2025/2.jpeg",
      "SENSIBILIZACION I.E MARIA MOLINARI 30-09-2025/3.jpeg",
      "SENSIBILIZACION I.E MARIA MOLINARI 30-09-2025/4.jpeg",
      "SENSIBILIZACION I.E MARIA MOLINARI 30-09-2025/5.jpeg",
    ],
  },
  {
    title: "SENSIBILIZACION I.E NUESTRA SEÑORA DE FATIMA 24-09-2025",
    mainImage: "SENSIBILIZACION I.E NUESTRA SEÑORA DE FATIMA 24-09-2025/1.jpeg",
    middleImages: [
      "SENSIBILIZACION I.E NUESTRA SEÑORA DE FATIMA 24-09-2025/2.jpeg",
      "SENSIBILIZACION I.E NUESTRA SEÑORA DE FATIMA 24-09-2025/3.jpeg",
      "SENSIBILIZACION I.E NUESTRA SEÑORA DE FATIMA 24-09-2025/4.jpeg",
      "SENSIBILIZACION I.E NUESTRA SEÑORA DE FATIMA 24-09-2025/5.jpeg",
      "SENSIBILIZACION I.E NUESTRA SEÑORA DE FATIMA 24-09-2025/6.jpeg",
      "SENSIBILIZACION I.E NUESTRA SEÑORA DE FATIMA 24-09-2025/7.jpeg",
      "SENSIBILIZACION I.E NUESTRA SEÑORA DE FATIMA 24-09-2025/8.jpeg",
      "SENSIBILIZACION I.E NUESTRA SEÑORA DE FATIMA 24-09-2025/9.jpeg",
      "SENSIBILIZACION I.E NUESTRA SEÑORA DE FATIMA 24-09-2025/10.jpeg",
      "SENSIBILIZACION I.E NUESTRA SEÑORA DE FATIMA 24-09-2025/11.jpeg",
      "SENSIBILIZACION I.E NUESTRA SEÑORA DE FATIMA 24-09-2025/12.jpeg",
      "SENSIBILIZACION I.E NUESTRA SEÑORA DE FATIMA 24-09-2025/13.jpeg",
      "SENSIBILIZACION I.E NUESTRA SEÑORA DE FATIMA 24-09-2025/14.jpeg",
      "SENSIBILIZACION I.E NUESTRA SEÑORA DE FATIMA 24-09-2025/15.jpeg",
      "SENSIBILIZACION I.E NUESTRA SEÑORA DE FATIMA 24-09-2025/16.jpeg",
      "SENSIBILIZACION I.E NUESTRA SEÑORA DE FATIMA 24-09-2025/17.jpeg",
      "SENSIBILIZACION I.E NUESTRA SEÑORA DE FATIMA 24-09-2025/18.jpeg",
    ],
  },
  {
    title: "SENSIBILIZACION I.E SANTA MARIA 09-09-2025",
    mainImage: "SENSIBILIZACION I.E SANTA MARIA 09-09-2025/1.jpeg",
    middleImages: [
      "SENSIBILIZACION I.E SANTA MARIA 09-09-2025/2.jpeg",
      "SENSIBILIZACION I.E SANTA MARIA 09-09-2025/3.jpeg",
      "SENSIBILIZACION I.E SANTA MARIA 09-09-2025/4.jpeg",
      "SENSIBILIZACION I.E SANTA MARIA 09-09-2025/5.jpeg",
      "SENSIBILIZACION I.E SANTA MARIA 09-09-2025/6.jpeg",
      "SENSIBILIZACION I.E SANTA MARIA 09-09-2025/7.jpeg",
      "SENSIBILIZACION I.E SANTA MARIA 09-09-2025/8.jpeg",
      "SENSIBILIZACION I.E SANTA MARIA 09-09-2025/9.jpeg",
    ],
  },
  {
    title: "SENSIBILIZACION I.E SANTA ROSA 10-09-2025",
    mainImage: "SENSIBILIZACION I.E SANTA ROSA 10-09-2025/1.jpeg",
    middleImages: [
      "SENSIBILIZACION I.E SANTA ROSA 10-09-2025/2.jpeg",
      "SENSIBILIZACION I.E SANTA ROSA 10-09-2025/3.jpeg",
      "SENSIBILIZACION I.E SANTA ROSA 10-09-2025/4.jpeg",
      "SENSIBILIZACION I.E SANTA ROSA 10-09-2025/5.jpeg",
      "SENSIBILIZACION I.E SANTA ROSA 10-09-2025/6.jpeg",
      "SENSIBILIZACION I.E SANTA ROSA 10-09-2025/7.jpeg",
      "SENSIBILIZACION I.E SANTA ROSA 10-09-2025/8.jpeg",
      "SENSIBILIZACION I.E SANTA ROSA 10-09-2025/9.jpeg",
      "SENSIBILIZACION I.E SANTA ROSA 10-09-2025/10.jpeg",
      "SENSIBILIZACION I.E SANTA ROSA 10-09-2025/11.jpeg",
      "SENSIBILIZACION I.E SANTA ROSA 10-09-2025/12.jpeg",
      "SENSIBILIZACION I.E SANTA ROSA 10-09-2025/13.jpeg",
    ],
  },
  {
    title: "SENSIBILIZACION I.E VIRGEN DE COPACABANA 25-09-2025",
    mainImage: "SENSIBILIZACION I.E VIRGEN DE COPACABANA 25-09-2025/1.jpeg",
    middleImages: [
      "SENSIBILIZACION I.E VIRGEN DE COPACABANA 25-09-2025/2.jpeg",
      "SENSIBILIZACION I.E VIRGEN DE COPACABANA 25-09-2025/3.jpeg",
      "SENSIBILIZACION I.E VIRGEN DE COPACABANA 25-09-2025/4.jpeg",
      "SENSIBILIZACION I.E VIRGEN DE COPACABANA 25-09-2025/5.jpeg",
      "SENSIBILIZACION I.E VIRGEN DE COPACABANA 25-09-2025/6.jpeg",
      "SENSIBILIZACION I.E VIRGEN DE COPACABANA 25-09-2025/7.jpeg",
      "SENSIBILIZACION I.E VIRGEN DE COPACABANA 25-09-2025/8.jpeg",
      "SENSIBILIZACION I.E VIRGEN DE COPACABANA 25-09-2025/9.jpeg",
      "SENSIBILIZACION I.E VIRGEN DE COPACABANA 25-09-2025/10.jpeg",
      "SENSIBILIZACION I.E VIRGEN DE COPACABANA 25-09-2025/11.jpeg",
    ],
  },
  {
    title: "SENSIBILIZACION I.E. ALIPIO PONCE 15-09-2025",
    mainImage: "SENSIBILIZACION I.E. ALIPIO PONCE 15-09-2025/1.jpeg",
    middleImages: [
      "SENSIBILIZACION I.E. ALIPIO PONCE 15-09-2025/2.jpeg",
      "SENSIBILIZACION I.E. ALIPIO PONCE 15-09-2025/3.jpeg",
      "SENSIBILIZACION I.E. ALIPIO PONCE 15-09-2025/4.jpeg",
      "SENSIBILIZACION I.E. ALIPIO PONCE 15-09-2025/5.jpeg",
      "SENSIBILIZACION I.E. ALIPIO PONCE 15-09-2025/6.jpeg",
      "SENSIBILIZACION I.E. ALIPIO PONCE 15-09-2025/7.jpeg",
      "SENSIBILIZACION I.E. ALIPIO PONCE 15-09-2025/8.jpeg",
      "SENSIBILIZACION I.E. ALIPIO PONCE 15-09-2025/9.jpeg",
      "SENSIBILIZACION I.E. ALIPIO PONCE 15-09-2025/10.jpeg",
      "SENSIBILIZACION I.E. ALIPIO PONCE 15-09-2025/11.jpeg",
      "SENSIBILIZACION I.E. ALIPIO PONCE 15-09-2025/12.jpeg",
      "SENSIBILIZACION I.E. ALIPIO PONCE 15-09-2025/13.jpeg",
    ],
  },
  {
    title: "SENSIBILIZACION I.E. ANDRES AVELINO 09-09-2025",
    mainImage: "SENSIBILIZACION I.E. ANDRES AVELINO 09-09-2025/1.jpeg",
    middleImages: [
      "SENSIBILIZACION I.E. ANDRES AVELINO 09-09-2025/2.jpeg",
      "SENSIBILIZACION I.E. ANDRES AVELINO 09-09-2025/3.jpeg",
      "SENSIBILIZACION I.E. ANDRES AVELINO 09-09-2025/4.jpeg",
      "SENSIBILIZACION I.E. ANDRES AVELINO 09-09-2025/5.jpeg",
      "SENSIBILIZACION I.E. ANDRES AVELINO 09-09-2025/6.jpeg",
      "SENSIBILIZACION I.E. ANDRES AVELINO 09-09-2025/7.jpeg",
      "SENSIBILIZACION I.E. ANDRES AVELINO 09-09-2025/8.jpeg",
    ],
  },
  {
    title: "SENSIBILIZACION I.E. DOS DE MAYO 10-09-2025",
    mainImage: "SENSIBILIZACION I.E. DOS DE MAYO 10-09-2025/1.jpeg",
    middleImages: [
      "SENSIBILIZACION I.E. DOS DE MAYO 10-09-2025/2.jpeg",
      "SENSIBILIZACION I.E. DOS DE MAYO 10-09-2025/3.jpeg",
      "SENSIBILIZACION I.E. DOS DE MAYO 10-09-2025/4.jpeg",
      "SENSIBILIZACION I.E. DOS DE MAYO 10-09-2025/5.jpeg",
      "SENSIBILIZACION I.E. DOS DE MAYO 10-09-2025/6.jpeg",
      "SENSIBILIZACION I.E. DOS DE MAYO 10-09-2025/7.jpeg",
      "SENSIBILIZACION I.E. DOS DE MAYO 10-09-2025/8.jpeg",
      "SENSIBILIZACION I.E. DOS DE MAYO 10-09-2025/9.jpeg",
      "SENSIBILIZACION I.E. DOS DE MAYO 10-09-2025/10.jpeg",
      "SENSIBILIZACION I.E. DOS DE MAYO 10-09-2025/11.jpeg",
      "SENSIBILIZACION I.E. DOS DE MAYO 10-09-2025/12.jpeg",
      "SENSIBILIZACION I.E. DOS DE MAYO 10-09-2025/13.jpeg",
      "SENSIBILIZACION I.E. DOS DE MAYO 10-09-2025/14.jpeg",
      "SENSIBILIZACION I.E. DOS DE MAYO 10-09-2025/15.jpeg",
    ],
  },
  {
    title: "SENSIBILIZACION I.E. IPAR KALLPA 19-09-2025",
    mainImage: "SENSIBILIZACION I.E. IPAR KALLPA 19-09-2025/1.jpeg",
    middleImages: [
      "SENSIBILIZACION I.E. IPAR KALLPA 19-09-2025/2.jpeg",
      "SENSIBILIZACION I.E. IPAR KALLPA 19-09-2025/3.jpeg",
      "SENSIBILIZACION I.E. IPAR KALLPA 19-09-2025/4.jpeg",
      "SENSIBILIZACION I.E. IPAR KALLPA 19-09-2025/5.jpeg",
      "SENSIBILIZACION I.E. IPAR KALLPA 19-09-2025/6.jpeg",
    ],
  },
  {
    title: "SENSIBILIZACION I.E. TRILCE 15-09-2025",
    mainImage: "SENSIBILIZACION I.E. TRILCE 15-09-2025/1.jpeg",
    middleImages: [
      "SENSIBILIZACION I.E. TRILCE 15-09-2025/2.jpeg",
      "SENSIBILIZACION I.E. TRILCE 15-09-2025/3.jpeg",
      "SENSIBILIZACION I.E. TRILCE 15-09-2025/4.jpeg",
      "SENSIBILIZACION I.E. TRILCE 15-09-2025/5.jpeg",
      "SENSIBILIZACION I.E. TRILCE 15-09-2025/6.jpeg",
      "SENSIBILIZACION I.E. TRILCE 15-09-2025/7.jpeg",
      "SENSIBILIZACION I.E. TRILCE 15-09-2025/8.jpeg",
      "SENSIBILIZACION I.E. TRILCE 15-09-2025/9.jpeg",
      "SENSIBILIZACION I.E. TRILCE 15-09-2025/10.jpeg",
      "SENSIBILIZACION I.E. TRILCE 15-09-2025/11.jpeg",
      "SENSIBILIZACION I.E. TRILCE 15-09-2025/12.jpeg",
      "SENSIBILIZACION I.E. TRILCE 15-09-2025/13.jpeg",
      "SENSIBILIZACION I.E. TRILCE 15-09-2025/14.jpeg",
      "SENSIBILIZACION I.E. TRILCE 15-09-2025/15.jpeg",
      "SENSIBILIZACION I.E. TRILCE 15-09-2025/16.jpeg",
      "SENSIBILIZACION I.E. TRILCE 15-09-2025/17.jpeg",
      "SENSIBILIZACION I.E. TRILCE 15-09-2025/18.jpeg",
    ],
  },
  {
    title: "SENSIBILIZACION I.E.P CRISTIANO BELEN 19-09-2025",
    mainImage: "SENSIBILIZACION I.E.P CRISTIANO BELEN 19-09-2025/1.jpeg",
    middleImages: [
      "SENSIBILIZACION I.E.P CRISTIANO BELEN 19-09-2025/2.jpeg",
      "SENSIBILIZACION I.E.P CRISTIANO BELEN 19-09-2025/3.jpeg",
      "SENSIBILIZACION I.E.P CRISTIANO BELEN 19-09-2025/4.jpeg",
      "SENSIBILIZACION I.E.P CRISTIANO BELEN 19-09-2025/5.jpeg",
      "SENSIBILIZACION I.E.P CRISTIANO BELEN 19-09-2025/6.jpeg",
      "SENSIBILIZACION I.E.P CRISTIANO BELEN 19-09-2025/7.jpeg",
      "SENSIBILIZACION I.E.P CRISTIANO BELEN 19-09-2025/8.jpeg",
      "SENSIBILIZACION I.E.P CRISTIANO BELEN 19-09-2025/9.jpeg",
      "SENSIBILIZACION I.E.P CRISTIANO BELEN 19-09-2025/10.jpeg",
      "SENSIBILIZACION I.E.P CRISTIANO BELEN 19-09-2025/11.jpeg",
      "SENSIBILIZACION I.E.P CRISTIANO BELEN 19-09-2025/12.jpeg",
      "SENSIBILIZACION I.E.P CRISTIANO BELEN 19-09-2025/13.jpeg",
    ],
  },
  {
    title: "SENSIBILIZACIÓN SANTA MARIA MADRE DE DIOS - copia",
    mainImage: "SENSIBILIZACIÓN SANTA MARIA MADRE DE DIOS - copia/1.jpg",
    middleImages: ["SENSIBILIZACIÓN SANTA MARIA MADRE DE DIOS - copia/2.jpg"],
  },
  {
    title:
      "TALLER DE SENSIBILIZACIÓN A PADRES DE FAMILIA SOBRE MANEJO DE RESIDUOS SÓLIDOS EN LA I.E.I N°297 CUNA JARDIN PILOTO",
    mainImage:
      "TALLER DE SENSIBILIZACIÓN A PADRES DE FAMILIA SOBRE MANEJO DE RESIDUOS SÓLIDOS EN LA I.E.I N°297 CUNA JARDIN PILOTO/1.jpg",
    middleImages: [
      "TALLER DE SENSIBILIZACIÓN A PADRES DE FAMILIA SOBRE MANEJO DE RESIDUOS SÓLIDOS EN LA I.E.I N°297 CUNA JARDIN PILOTO/2.jpg",
    ],
  },
  //   kkk
  {
    title: "SEPTIMO ECOTRUEQUE",
    mainImage: "ecotrueque1.jpeg",
    middleImages: ["ecotrueque2.jpeg", "ecotrueque3.jpeg", "ecotrueque4.jpeg"],
  },
  {
    title: "SENSIBILIZACIÓN I.E. MARCELINO CHAMPAGNAT",
    mainImage: "marcelino1.jpg",
    middleImages: ["marcelino2.JPG", "marcelino3.JPG", "marcelino4.JPG"],
  },
  {
    title: "SENSIBILIZACION I.E. TRILCE",
    mainImage: "trilce1.jpeg",
    middleImages: ["trilce2.jpeg", "trilce3.jpeg", "trilce4.jpeg"],
  },
  {
    title: "SENSIBILIZACION I.E. IPAR KALLPA",
    mainImage: "ipar1.jpeg",
    middleImages: ["ipar2.jpeg", "ipar3.jpeg", "ipar4.jpeg"],
  },
  {
    title: "SENSIBILIZACION I.E. I. HUERTO INFANTIL (PADRES)",
    mainImage: "huerto1.jpeg",
    middleImages: ["huerto2.jpeg", "huerto3.jpeg", "huerto4.jpeg"],
  },
  {
    title: "SENSIBILIZACION I.E. ABA",
    mainImage: "aba1.jpeg",
    middleImages: ["aba2.jpeg", "aba3.jpeg", "aba4.jpeg"],
  },
  {
    title: "SENSIBILIZACION I. E. LA SALLE",
    mainImage: "salle1.jpeg",
    middleImages: ["salle2.jpeg", "salle3.jpeg", "salle4.jpeg"],
  },
  {
    title: "LAVADO DE LLANTAS Y PINTADO (PUNTOS CRÍTICOS)",
    mainImage: "lavado1.jpeg",
    middleImages: ["lavado2.jpeg", "lavado3.jpeg", "lavado4.jpeg"],
  },
  {
    title: "AV. FITZCARRALD CON PSJ CARLOS BRIOLO",
    mainImage: "c3-3.png",
    middleImages: ["c3-2.png", "c3-1.png", "c3-4.png"],
  },
  {
    title: "JR. TACNA CON PSJ LAS ORQUÍDEAS",
    mainImage: "c2-4.png",
    middleImages: ["c2-2.png", "c2-3.png", "c2-1.png"],
  },
  {
    title: "JR. TACNA CON PSJ. LOS GERANIOS",
    mainImage: "c1-4.png",
    middleImages: ["c1-2.png", "c1-3.png", "c1-1.png"],
  },
  {
    title: "2° CAPACITACIÓN A PAJ Y PAC 16-06-2025",
    mainImage: "c1-1.jpg",
    middleImages: ["c1-2.jpg", "c1-3.jpg", "c1-4.jpg"],
  },
  {
    title: "TERCER ECOTRUEQUE MARZO 22",
    mainImage: "c2-1.jpg",
    middleImages: ["c2-2.jpg", "c2-3.jpg", "c2-4.jpg"],
  },
  {
    title: "ACTIVACIÓN MERCADO MODELO 08-05-2025",
    mainImage: "c3-1.jpg",
    middleImages: ["c3-2.jpg", "c3-3.jpg", "c3-4.jpg"],
  },
  {
    title: "REAPERTURA Y SENSIBILIZACION - PARQUE JAVIER HERAUD 17-05-2025",
    mainImage: "c4-1.jpg",
    middleImages: ["c4-2.jpg", "c4-3.jpg", "c4-4.jpg"],
  },
];

const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState<string[]>([]);

  const handleOpen = (images: string[]) => {
    setCurrentImages(images);
    setOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 via-gray-50 to-gray-100 dark:from-neutral-900 dark:via-neutral-950 dark:to-neutral-900 text-center py-10 relative">
      {/* 🔙 Botón Volver al Home */}
      <Link
        to="/"
        className="absolute z-20 hover:bg-gray-500/40 top-6 left-6 bg-white/80 dark:bg-neutral-800/70 backdrop-blur-md text-gray-700 dark:text-gray-100 px-4 py-2 rounded-full text-sm font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 border border-gray-200/40"
      >
        ← Volver al inicio
      </Link>

      {/* Título */}
      <motion.h4
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-extrabold text-white tracking-tight drop-shadow-sm"
      >
        GALERÍA EDUCCA
      </motion.h4>

      {/* Contenedor de imágenes */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6 mt-10"
      >
        {slides.map(({ title, mainImage, middleImages }, idx) => {
          const allImages = [mainImage, ...middleImages];

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white/80 dark:bg-neutral-800/60 backdrop-blur-sm"
              onClick={() => handleOpen(allImages)}
            >
              <img
                src={mainImage}
                alt={title}
                className="w-full h-[250px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end items-center p-4">
                <p className="text-white font-semibold text-lg drop-shadow-md mb-2">
                  {title}
                </p>
                <span className="text-sm text-gray-200 bg-white/10 px-3 py-1 rounded-full border border-white/20 backdrop-blur-sm">
                  Ver galería
                </span>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={currentImages.map((src) => ({ src }))}
        styles={{
          container: { backgroundColor: "rgba(0,0,0,0.85)" },
        }}
        plugins={[Thumbnails]}
      />
      <ScrollToTop />
    </div>
  );
};

export default Gallery;
