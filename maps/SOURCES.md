# Offline Duhok map — sources and attribution

Prepared 8 October 2026. The relief is an elevation visualization, not satellite imagery.

## Boundary

- [geoBoundaries gbOpen Iraq ADM1 API](https://www.geoboundaries.org/api/current/gbOpen/IRQ/ADM1/)
- Boundary ID: `IRQ-ADM1-90741666`; feature ISO `IQ-DA`, name `Dohuk`.
- Year represented **2022**; source update 19 January 2023; build 12 December 2023.
- Source: geoBoundaries / Wikimedia Commons. Source license: CC0 1.0. Attribute geoBoundaries when using the API.
- [Pinned release geometry](https://github.com/wmgeolab/geoBoundaries/raw/9469f09/releaseData/gbOpen/IRQ/ADM1/geoBoundaries-IRQ-ADM1.geojson).
- `duhok-boundary.geojson` contains the original feature. Projection to Web Mercator changes its coordinates for rendering, without inventing subdivisions.
- This historical dataset is **not a current official jurisdiction map**. City points are independent of the boundary. No ADM2/district boundaries are claimed.

## City points

[GeoNames Iraq gazetteer](https://download.geonames.org/export/dump/IQ.zip), retrieved 8 October 2026. [Format and CC BY 4.0 license](https://download.geonames.org/export/dump/readme.txt).

| Display name | GeoNames ID | Latitude | Longitude |
|---|---:|---:|---:|
| Zakho | 89570 | 37.14871 | 42.68591 |
| Simele | 10303650 | 36.85833 | 42.85010 |
| Duhok | 96994 | 36.86608 | 42.98790 |
| Shekhan | 98293 | 36.69595 | 43.35202 |
| Amedi | 99611 | 37.09214 | 43.48769 |
| Akre | 98822 | 36.76038 | 43.89428 |
| Bardarash | 445910 | 36.50311 | 43.59070 |

Coordinates remain as supplied; display names are localized. These are gazetteer city points, not fire stations. GeoNames provides the data as-is; no guarantee of current administrative affiliation is implied.

## Elevation relief

[Mapzen Terrain Tiles, AWS Open Data](https://registry.opendata.aws/terrain-tiles/), 112 Terrarium tiles at zoom 11, retrieved 8 October 2026. [Format](https://github.com/tilezen/joerd/blob/master/docs/formats.md), [sources](https://github.com/tilezen/joerd/blob/master/docs/data-sources.md), [attribution](https://github.com/tilezen/joerd/blob/master/docs/attribution.md).

SRTM and global GMTED2010 terrain data courtesy of the U.S. Geological Survey. Mapzen Terrain Tiles aggregate several open elevation datasets. This map does not assert that it is a single unchanged USGS product.

Modifications: decode height values, crop in EPSG:3857, resample scalar elevations, calculate northwest hill shading, apply hypsometric color tint and encode a **3840 × 2160 WebP**. Raster ground sampling is approximately 61 m at zoom 11 near Duhok. Output pixel dimensions do not imply survey-level detail. Colors indicate elevation, not vegetation or land use. No roads, stations or high-risk zones have been invented.

`scripts/prepare-map.py` reproduces the assets from the cached source files under `output/map-data`, downloading them if missing. It requires Python, Pillow and NumPy. Normal builds use the bundled assets and require no network or map API key. Regeneration uses the provider's current release if no original cache is available; retain the cache for exact source provenance.

## Department illustrations

Department descriptions, illustrative images, 13 introductions and four-language subtitles come from the existing structure guide. These are learning resources, not verified current deployment or staffing records. See `docs/STRUCTURE_GUIDE.md`.
