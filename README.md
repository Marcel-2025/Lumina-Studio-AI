# Lumina AI – Premium Landingpage 2026

Fertige **statische**, responsive Website als ZIP. Basierend auf den echten Lumina-AI-Screenshots, Nutzerbildern und Promo-MP4s. Kein Build-Prozess und keine externen Fonts, CDN-Skripte oder Analytics.

## Dateien

- `index.html` – Premium-Landingpage, interaktive App-Screenshots, fünf Website-Farbwelten, **vier echte Haupt-Icon-Varianten** und **sechs saisonale Lumina-Icons**, Creative-Recipe-Demo, Promo-Videos, FAQ
- `styles.css` – vollständige responsive UI, Dark/Light und Motion-Reduktion
- `app.js` – Theme-Wechsel, Icons, interaktive saisonale Kollektionen, Recipe-Demo, App-Vorschau
- `datenschutz.html` – Website-Datenschutz (Entwurf, Hosting fehlt noch)
- `app-datenschutz.html` – **separater APP-Datenschutz-Entwurf** für die Play-Store-Vorbereitung; enthält absichtlich offene, wichtige Datenverarbeitungen
- `impressum.html` – Impressum mit noch zu ergänzender vollständiger Straßenanschrift
- `assets/` – lokale optimierte Icons, App-Screenshots, Vorschau-Videos und Social-Cover

## Lokal testen

`index.html` öffnen oder im Ordner ausführen:

```sh
python -m http.server 8000
```

Danach `http://localhost:8000` öffnen.

## GitHub Pages

1. **Dateien aus diesem Ordner**, nicht nur den äußeren ZIP-Ordner, ins Repository-Hauptverzeichnis hochladen.
2. GitHub → Settings → Pages → Deploy from branch → main / root auswählen.
3. Die Startseite ist dann unter `https://BENUTZER.github.io/REPOSITORY/` verfügbar.
4. Relative Pfade funktionieren auch in einem GitHub-Pages-Unterordner.
5. Impressum, Datenschutz und App-Datenschutz **vor Freigabe fertigstellen**, anschließend Links erneut testen.
6. Bei eigener Domain Social-Meta-URL (`og:image`) auf absolute HTTPS-URL setzen.

## WICHTIG – Vor Veröffentlichung

- **Straße und Hausnummer** in Impressum, Website- und App-Datenschutz ergänzen. Mitteilungspflichten nach § 5 DDG beachten.
- Tatsächlichen **Hoster**, Speicherfristen der Server-Logs, ggf. weitere Kontaktangaben und rechtliche Unternehmensform verifizieren.
- `app-datenschutz.html` ist **keine finale Datenschutzerklärung**. Angaben über Login, Google/Firebase, KI-Provider, Bild- und Videoverarbeitung, Uploads, Credits/Käufe, Galerie/öffentliche Profile, Crash-/Analytics-Tools, Datenübermittlung, Speicher- und Löschfristen anhand des **App-Codes** prüfen und ergänzen. Die Angaben im Play-Console-Datensicherheitsformular müssen dazu passen.
- Der zur Prüfung genutzte Cloud-Run-Demolink war nicht verlässlich erreichbar. Es wurde deshalb **kein unbestätigter App-Store- oder Demo-Link** eingebaut; der CTA führt zum E-Mail-Kontakt.
- Jahreszeiten-Vorlagen und Creative Recipe sind als **Konzept-Preview** markiert, da echte Backend-Implementierung nicht gesichert ist. Bestehende App-Screenshots und Videos sind Originale; Demo-Grafiken nie als echte KI-Outputs ausgeben.
- Neue Tracking-, Analytics-, Werbe- oder Zahlungsdienste würden rechtliche Anpassungen und ggf. Zustimmungslösungen erfordern.

## Technik und Daten

Die Website selbst speichert `lumina_landing_theme` und `lumina_landing_icon` lokal für die Darstellung. Die saisonale Auswahl wird nicht gespeichert. Der Creative Recipe Builder erzeugt lokal Text zur optionalen Zwischenablage; keine Daten werden versendet.

Referenzen: [§ 5 DDG](https://www.gesetze-im-internet.de/ddg/__5.html), [DSGVO Art. 13](https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32016R0679), [GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages).

Stand: 27.10.2026
