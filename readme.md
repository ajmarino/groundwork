<p align="center">
<img alt="Groundwork" src="https://github.com/ajmarino/groundwork/blob/c89fca7c1bfb146d649df35870f7d75902b945cd/src/assets/groundwork-badge.png" />
</p>
<p align="center">
<img src="https://img.shields.io/badge/version-v1.1.2-606F7B.svg?style=for-the-badge" alt="Version"><br>
<em>Packages to get your next project up and running.</em>
</p>

<p align="center">
<img src="https://img.shields.io/badge/tailwind-v0.7.3-44a8b3.svg?style=flat-square" alt="TailwindCSS Version">
<img src="https://img.shields.io/badge/laravel_mix-v4.0.14-f55247.svg?style=flat-square" alt="Laravel Mix Version">
<img src="https://img.shields.io/badge/laravel_mix_purgecss-v4.0.0-22a4c9.svg?style=flat-square" alt="Laravel Mix PurgeCSS Version">
<br />
<img src="https://img.shields.io/badge/include_media-v1.4.9-e6AA68.svg?style=flat-square" alt="Include Media Version">
<img src="https://img.shields.io/badge/sassdocs-v2.5.0-dd5a6f.svg?style=flat-square" alt="Sassdoc Version">
<img src="https://img.shields.io/badge/css_mqpacker-v7.0.0-38c172.svg?style=flat-square" alt="Sassdoc Version">
</p>

Based on the commit styleguide by SlashBin, with some additions / refinements [SlashsBin Styleguide](https://slashsbin.com/styleguide-git-commit-message/)

## Planned Features
- [x] (P) Add other stubs - webpack,
- [x] (P) Extract family.scss mixins to indv files
- [x] (M) Upgrade to Laravel Mix 4.0
- [ ] (M) Add script for starting projects



## Styleguide

Follow the guidelines listed at [Sass Guidelines](https://sass-guidelin.es/) and [CSS Guidelines](https://cssguidelin.es/).



## Commit Message Format

All Git Commit Messages **MUST** meet with this Text Format:
```
:emoji1: :emoji2: Subject
(Only One NewLine)
Message Body
(Only One NewLine)
Ref <###>
```



### Rules

1. Capitalize the _Subject_.
2. Do not end the _Subject_ line with a period.
3. Message _Subject_ **SHOULD** Begin with _at-least_ One Emoji(see below for [list of Suggested Emojis](#suggested-emojis)).
4. Message Body **SHOULD** End with _at-least_ One Issue Tracking ID Reference([GitHub Issues](https://github.com/features#issues)/[JIRA Ticket Number](http://reflexions.atlassian.net/)), Ex. `Issue #27`, `JIRA-##` or `Ref T27, JIRA-##` or `Fixes T8`.
It's also recommanded to use _Full URL to Issues_, instead of just Issue ID Number; Doing so will ease browsing issues from terminal.
5. Total Characters of the _Subject Line_ **MUST** be _Less_ than or _Equal_ to **50** Chars Long.
6. Wrap the _Message body_ at **72** characters.
7. Use Valid [MarkDown](https://daringfireball.net/projects/markdown/basics) format in _Message Body_.
8. Use the **Present Tense** ("Add feature" not "Added feature").
9. Use the **Imperative Mood** ("Move cursor to..." not "Moves cursor to...").
10. Use the _Message body_ to explain **what** and **why** vs. how.
11. All WIP(Work In Progress) Commits **MUST** have the WIP Emoji(see below).



## Notes

+ Refrencing Issues by using special keywords like `Fixes` or `Resolves` will mark them as closed automatically! For more  information about automatic issue closing using ketwords see: [GitHub](https://help.github.com/articles/closing-issues-via-commit-messages/)
+ There is a **Space** Character between Multiple Emojis!.
+ There is **NO** New-Line After the _Task ID Reference_ Line.
+ Every Raw Emoji Text(`:emoji:`) is Counted as One Char!.



## Suggested Emojis

| Emoji | Raw Emoji Code | Description |
|:---:|:---:|---|
| :tada: | `:tada:` | **Initial** Commit |
| :gem: | `:gem:` | New **Release** |
| :bookmark: | `:bookmark:` | Version **Tags** |
| :package: | `:package:` | when adding **new packages** |
| :ribbon: | `:ribbon:` | when dealing with **Yarn** / **NPM** pkgs |
| :musical_score: | `:musical_score:` | when dealing with **Composer** pkgs |
| :arrow_up: | `:arrow_up:` | when upgrading **dependencies** / **packages** |
| :arrow_down: | `:arrow_down:` | when downgrading **dependencies** / **packages** |
| :page_facing_up: | `:page_facing_up:` | when creating a **new file** |
| :book: | `:book:` | when writing **docs** |
| :label: | `:label:` | when writing **comments** |
| :art: | `:art:` | when improving the **format**/structure of the code |
| :tractor: :truck: | `:tractor: :truck:` | when **change file structure**. Usually together with :art: |
| :bullettrain_side: | `:bullettrain_side:` | when adding / modifying **the api** |
| :hammer: | `:hammer:` | when **refactoring** code |
| :wastebasket: | `:wastebasket:` | when **removing code** or files, _maybe_ with `@CHANGED` Comment Tag |
| :computer: | `:computer:` | when improving **UI**/Cosmetic |
| :memo: | `:memo:` | when **performing minor changes/fixing** the code or language |
| :racehorse: | `:racehorse:` | when improving **performance** |
| :beetle: | `:beetle:` | when fixing a **bug** |
| :penguin: | `:penguin:` | when fixing something on **Linux** |
| :apple: | `:apple:` | when fixing something on **Mac OS** |
| :checkered_flag: | `:checkered_flag:` | when fixing something on **Windows** |
| :gear: | `:gear:` | changing **Configuration**, Usually together with :penguin: or :ribbon: or :rocket: |
| :wrench: | `:wrench:` | Customer requested application **Customization**, with `@HACK` Comment Tag |
| :whale: | `:whale:` | **Docker** Configuration |
| :rocket: | `:rocket:` | Anything related to Deployments/**DevOps** |
| :elephant: | `:elephant:` | **PostgreSQL** Database specific (Migrations, Scripts, Extensions, ...)  |
| :dolphin: | `:dolphin:` | **MySQL** Database specific (Migrations, Scripts, Extensions, ...) |
| :leaves: | `:leaves:` | **MongoDB** Database specific (Migrations, Scripts, Extensions, ...) |
| :bank: | `:bank:` | **Generic Database** specific (Migrations, Scripts, Extensions, ...) |
| :handshake: | `:handshake:` | when **Merging files** |
| :microscope: | `:microscope:` | when adding **tests** |
| :umbrella: | `:umbrella:` | when adding **code coverage** |
| :green_heart: | `:green_heart:` | when fixing the **CI** build |
| :lock: | `:lock:` | when dealing with **security** |
| :fast_forward: | `:fast_forward:` | when **forward-porting features** from an older version/branch |
| :rewind: | `:rewind:` | when **backporting features** from a newer version/branch |
| :shirt: | `:shirt:` | when removing **linter**/strict/deprecation warnings |
| :wheelchair: | `:wheelchair:` | when improving **accessibility** (a11y) |
| :globe_with_meridians: | `:globe_with_meridians:` | when dealing with **globalization**/internationalization (i18n/g11n) |
| :construction: | `:construction:` | **WIP**(Work In Progress) Commits, _maybe_ with `@REVIEW` Comment Tag |
| :speaker: | `:speaker:` | when Adding **Logging** |
| :mute: | `:mute:` | when Reducing **Logging** |
| :sparkles: | `:sparkles:` | when introducing **New** Features |
| :zap: | `:zap:` | when introducing **Backward-InCompatible** Features, _maybe_ with `@CHANGED` Comment Tag |
| :bulb: | `:bulb:` | New **Idea**, with `@IDEA` Comment Tag |




## License

The Code is licensed under the [MIT License](http://slashsbin.mit-license.org/).
