# RPG Maker MZ 遊戲繁體化MOD

# 使用方式
此MOD適用於大部分使用RPG Maker MZ內建對話系統的遊戲

1. 下載 [此壓縮檔](/releases/latest/download/RPGMaker-MZ-CHS-2-CHT.zip) 並解壓縮到 <遊戲目錄>\data\www
2. 用文字編輯器打開index.html 並在<body> ... </body> 最後加上
```html
<script type="module" src="patchcn2tw.js"></script>
```
如下:

```html
<body style="background-color: black">
    ....
    ....
    ....
    ....

    <script type="module" src="patchcn2tw.js"></script>
</body>
```
3. 存檔


cn2t.js 來自open-cc
[https://github.com/nk2028/opencc-js](https://github.com/nk2028/opencc-js)
