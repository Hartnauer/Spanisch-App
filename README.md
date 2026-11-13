# Paco – Spanisch B2 🐂

Eine Spanisch-Lern-App für das Niveau B2 – mit Paco, dem kleinen Stier, der dich durch alle Lektionen begleitet.

## Was drin ist

- **Lernpfad** mit 10 Etappen und 52 Lektionen
- **640 Vokabeln** in 32 Themen-Lektionen, jede mit Beispielsatz und Aussprache
- **20 Grammatik-Lektionen** (Subjuntivo, Si-Sätze, indirekte Rede, por/para …) mit einfachen, alltagsnahen Erklärungen und 162 Übungen
- **Übungsarten:** Karteikarten, Auswahl, Paare finden, Schreiben, Lückentext, Satzbau
- **Wiederholsystem:** Wörter kommen in wachsenden Abständen wieder
- **Belohnungen:** XP, Level, Tages-Serie, Tagesziel, Sterne, 18 Erfolge, Konfetti
- **Fortschritt** wird automatisch auf dem Gerät gespeichert (mit Export/Import als Datei)
- **Offline nutzbar** und als App auf dem Startbildschirm installierbar

## Auf dem Smartphone installieren

1. Die App-Adresse im Browser öffnen.
2. **iPhone (Safari):** Teilen-Symbol → „Zum Home-Bildschirm".
   **Android (Chrome):** Menü ⋮ → „App installieren" bzw. „Zum Startbildschirm hinzufügen".

## Eigene Inhalte ergänzen

- Vokabeln: `data/vocab.js` – eine Zeile pro Wort: `Spanisch|Deutsch|Beispielsatz`, 20 Wörter pro Lektion
- Grammatik: `data/grammar.js` – Erklärung, Beispiele und Übungen (`Satz mit ___|richtig|falsch|falsch|Erklärung`)
- Neue Lektionen unten in `data/grammar.js` bei `UNITS` in den Lernpfad eintragen

Kein Build nötig – reine HTML/CSS/JS-Dateien.
