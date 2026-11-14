import { readFileSync, writeFileSync } from 'fs';

// Fix provider-profile.tsx
let p = readFileSync('artifacts/binna/src/pages/provider-profile.tsx', 'utf-8');
p = p.replace(
  '<p className="text-sm text-muted-foreground mb-3">\u0644\u0644\u062a\u0639\u0627\u0642\u062f \u0639\u0628\u0631 \u0645\u0646\u0635\u0629 \u0628\u0650\u0646\u0651\u0627</p>',
  '<p className="text-sm text-muted-foreground mb-3">{t("contract_via_platform")}</p>'
);
p = p.replace(
  'toLocaleDateString("ar-SA")',
  'toLocaleDateString(t("language") === "ar" ? "ar-SA" : "en-US")'
);
writeFileSync('artifacts/binna/src/pages/provider-profile.tsx', p, 'utf-8');
console.log('Fixed provider-profile.tsx');

// Fix listing-new.tsx
let l = readFileSync('artifacts/binna/src/pages/listing-new.tsx', 'utf-8');
l = l.replace('<FormLabel>\u0627\u0644\u0645\u0633\u0627\u062d\u0629 (\u0645\u062a\u0631 \u0645\u0631\u0628\u0639)</FormLabel>', '<FormLabel>{t("listing_area_m2")}</FormLabel>');
l = l.replace('<FormLabel>\u0639\u062f\u062f \u0627\u0644\u063a\u0631\u0641</FormLabel>', '<FormLabel>{t("bedrooms_label")}</FormLabel>');
l = l.replace('<FormLabel>\u0639\u062f\u062f \u062f\u0648\u0631\u0627\u062a \u0627\u0644\u0645\u064a\u0627\u0647</FormLabel>', '<FormLabel>{t("bathrooms_label")}</FormLabel>');
l = l.replace('<FormLabel>\u0627\u0644\u0645\u062f\u064a\u0646\u0629</FormLabel>', '<FormLabel>{t("city_label")}</FormLabel>');
l = l.replace('"\u062c\u0627\u0631\u064a \u0627\u0644\u0625\u0636\u0627\u0641\u0629..."', '`${t("adding")}...`');
l = l.replace('"\u0646\u0634\u0631 \u0627\u0644\u0639\u0642\u0627\u0631"', 't("publish_property")');
writeFileSync('artifacts/binna/src/pages/listing-new.tsx', l, 'utf-8');
console.log('Fixed listing-new.tsx');

// Fix phase-detail.tsx
let d = readFileSync('artifacts/binna/src/pages/phase-detail.tsx', 'utf-8');
d = d.replace('placeholder={`${phase.name} - \u0645\u0633\u062a\u0646\u062f`}', 'placeholder={t("file_name_placeholder")}');
d = d.replace('placeholder="\u0645\u062b\u0627\u0644: \u0635\u0648\u0631\u0629 \u0628\u0639\u062f \u0625\u062a\u0645\u0627\u0645 \u0627\u0644\u0635\u0628"', 'placeholder={t("example_notes")}');
d = d.replace('<span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />\n                              \u062c\u0627\u0631\u064a \u0627\u0644\u0631\u0641\u0639...', '<span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />\n                              {t("uploading")}...');
d = d.replace('<Upload className="w-4 h-4" />\n                              \u0631\u0641\u0639 \u0627\u0644\u0645\u0644\u0641', '<Upload className="w-4 h-4" />\n                              {t("upload_file")}');
d = d.replace('>\u0625\u0644\u063a\u0627\u0621<', '>{t("cancel")}<');
d = d.replace('>\u0627\u0644\u0635\u0648\u0631 ({images.length})<', '>{t("images")} ({images.length})<');
d = d.replace('>\u0644\u0627 \u064a\u0648\u062c\u062f \u0635\u0648\u0631 \u0645\u0631\u0641\u0642\u0629<', '>{t("no_images_attached")}<');
d = d.replace('alt={img.fileName || "\u0635\u0648\u0631\u0629"}', 'alt={img.fileName || t("image")}');
d = d.replace('"https://placehold.co/400x400?text=\u062e\u0637\u0623"', '`https://placehold.co/400x400?text=${encodeURIComponent(t("error"))}`');
d = d.replace('>\u0627\u0644\u0645\u0633\u062a\u0646\u062f\u0627\u062a ({documents.length})<', '>{t("documents")} ({documents.length})<');
d = d.replace('>\u0644\u0627 \u064a\u0648\u062c\u062f \u0645\u0633\u062a\u0646\u062f\u0627\u062a \u0645\u0631\u0641\u0642\u0629<', '>{t("no_documents_attached")}<');
d = d.replace('"\u0645\u0633\u062a\u0646\u062f \u0628\u062f\u0648\u0646 \u0627\u0633\u0645"', 't("document_no_name")');
writeFileSync('artifacts/binna/src/pages/phase-detail.tsx', d, 'utf-8');
console.log('Fixed phase-detail.tsx');
console.log('All done');
