# Lumina AI – Premium Landingpage

Fertige statische, responsive Landingpage für die Lumina AI Foto- & Video-KI-App. Verwendet die vom Nutzer gelieferten Screenshots, App-Icons und zwei seiner Promo-MP4s sowie die in der Unterhaltung erstellten Gold-/Silber-Varianten.

## Inhalt

- `index.html` – Startseite mit Hero, Feature-Karten, interaktiver App-Vorschau, Icon-Selector, zwei Demo-/Promo-Videos, FAQ und CTA
- `styles.css` – Responsive Premium-Design mit fünf Website-Themes (Aurora, Neon, Clean, Gold, Silver)
- `app.js` – Design- und Icon-Wechsel, App-Vorschau-Tabs, Mobile-Menü und Animationen
- `datenschutz.html` – Entwurf Datenschutzerklärung mit nachvollziehbarer Trennung von Website und geplanter App
- `impressum.html` – Entwurf Impressum (muss ergänzt werden)
- `assets/` – lokal gehostete WebP-Screenshots, Icons, Promo-Videos und Favicon

## Direkt lokal testen

`index.html` doppelklicken oder aus diesem Ordner einen lokalen Webserver starten:

```sh
python -m http.server 8000
```

Dann `http://localhost:8000` öffnen. Für GitHub Pages alles ins Repository hochladen und Pages in den Repository-Einstellungen aktivieren.

## Vor Veröffentlichung verpflichtend prüfen

1. In `impressum.html` und `datenschutz.html` **vollen bürgerlichen Namen und ladungsfähige Anschrift (Straße + Hausnummer)** ergänzen. Aktuell steht absichtlich ein deutlich sichtbarer Platzhalter.
2. In `datenschutz.html` den tatsächlichen Hoster und dessen Log-Speicherung sowie ggf. internationalen Datentransfer konkret angeben.
3. Für die echte **Lumina AI App** verwendete Dienste prüfen und dokumentieren: Anmeldung (z. B. Google/Firebase, falls tatsächlich vorhanden), Bild- und Video-Uploads, KI-Provider, Datenspeicherung, öffentliche Profile, mögliche Zahlungen/Credits, Löschfristen, Übermittlungen in Drittländer, Nutzungsrechte/Training. Die hier gelieferten App-Angaben sind keine vollständige Live-App-Erklärung.
4. E-Mail-Kontakt und tatsächliche Domain bei Veröffentlichung testen. Aktuell gibt es **keine erfundenen App-Store-URLs**, stattdessen Kontakt/Launch-Anfrage per `mailto:`.
5. Prüfen, ob Features in der geplanten App wie gezeigt funktionieren. Teaser-Videos sind **Promo-Clips**, keine Behauptung, dass KI-Generierungen in ihnen gezeigt werden.
6. Falls künftig Tracking, Analytics, Werbenetzwerke, externe Fonts, Zahlungsdienste oder Formulare hinzukommen, Datenschutzerklärung und gegebenenfalls Einwilligungsmanagement aktualisieren.
7. Für eine optimale Social-Media-Vorschau die relative `og:image`-Angabe in `index.html` nach Domain-Festlegung auf eine absolute HTTPS-URL zu `assets/social-cover.webp` umstellen.
8. Vor Livegang rechtliche Prüfung durchführen lassen; dieser Entwurf stellt keine anwaltliche Beratung dar.

## Technische Besonderheiten

- Funktioniert ohne Framework und ohne Build-Prozess; keine Third-Party-Skripte, keine Google-Fonts, keine Analytics, keine externen Video-Embeds.
- CSS und JavaScript lokal; Auswahl der fünf Website-Themes und des Markenicons wird in `localStorage` gespeichert (`lumina_landing_theme`, `lumina_landing_icon`).
- Das **Landingpage-Theme-System ist unabhängig vom React ThemeContext der eigentlichen App** und greift nicht in die bestehende App ein.
- Responsives Layout bis 320px; reduced-motion Support, Tastatur-Navigation und einfache Screenreader-Labels.
- Videos werden nicht vorab vollständig heruntergeladen (`preload="none"`); sie werden im lokalen Assets-Ordner ausgeliefert.

## Allgemeine Quellen zur rechtlichen Prüfung

- § 5 DDG: https://www.gesetze-im-internet.de/ddg/__5.html
- Art. 13 DSGVO – Leitfaden IHK: https://www.ihk.de/rhein-neckar/recht/datenschutz-itrecht-internetrecht/datenschutz/datenschutzerklaerung-4502986
- LfDI Niedersachsen – Webseiten & Apps: https://www.lfd.niedersachsen.de/dsgvo/informationen_fur_betreiber_von_webseiten/informationen-fur-betreiber-von-webseiten-und-apps-digitale-dienste-164589.html

© 2026 Lumina AI / Flondy – User-provided project materials.
