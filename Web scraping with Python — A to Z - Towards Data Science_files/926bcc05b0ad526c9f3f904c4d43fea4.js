document.write('<link rel="stylesheet" href="https://github.githubassets.com/assets/gist-embed-a9a1cf2ca01efd362bfa52312712ae94.css">')
document.write('<div id=\"gist93712972\" class=\"gist\">\n    <div class=\"gist-file\">\n      <div class=\"gist-data\">\n        <div class=\"js-gist-file-update-container js-task-list-container file-box\">\n  <div id=\"file-articles_insert-py\" class=\"file\">\n    \n\n  <div itemprop=\"text\" class=\"Box-body p-0 blob-wrapper data type-python \">\n      \n<table class=\"highlight tab-size js-file-line-container\" data-tab-size=\"8\">\n      <tr>\n        <td id=\"file-articles_insert-py-L1\" class=\"blob-num js-line-number\" data-line-number=\"1\"><\/td>\n        <td id=\"file-articles_insert-py-LC1\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">try<\/span>:<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-articles_insert-py-L2\" class=\"blob-num js-line-number\" data-line-number=\"2\"><\/td>\n        <td id=\"file-articles_insert-py-LC2\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-c\"><span class=\"pl-c\">#<\/span> Instert all articles into the articles table.<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-articles_insert-py-L3\" class=\"blob-num js-line-number\" data-line-number=\"3\"><\/td>\n        <td id=\"file-articles_insert-py-LC3\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-c\"><span class=\"pl-c\">#<\/span> Note that we use INSERT IGNORE which means that duplicates will not be inserted to DB (checked against doi_link).<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-articles_insert-py-L4\" class=\"blob-num js-line-number\" data-line-number=\"4\"><\/td>\n        <td id=\"file-articles_insert-py-LC4\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-k\">for<\/span> key, item <span class=\"pl-k\">in<\/span> all_articles.items():<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-articles_insert-py-L5\" class=\"blob-num js-line-number\" data-line-number=\"5\"><\/td>\n        <td id=\"file-articles_insert-py-LC5\" class=\"blob-code blob-code-inner js-file-line\">        cursor.execute(<span class=\"pl-s\"><span class=\"pl-pds\">&quot;&quot;&quot;<\/span>INSERT IGNORE INTO articles (doi_link, title, abstract, publication_date, citations) <\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-articles_insert-py-L6\" class=\"blob-num js-line-number\" data-line-number=\"6\"><\/td>\n        <td id=\"file-articles_insert-py-LC6\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-s\">                        VALUES (&#39;<span class=\"pl-c1\">{}<\/span>&#39;, &#39;<span class=\"pl-c1\">{}<\/span>&#39;, &#39;<span class=\"pl-c1\">{}<\/span>&#39;, &#39;<span class=\"pl-c1\">{}<\/span>&#39;, <span class=\"pl-c1\">{}<\/span>);<span class=\"pl-pds\">&quot;&quot;&quot;<\/span><\/span>.format(key, item[<span class=\"pl-c1\">0<\/span>], item[<span class=\"pl-c1\">1<\/span>], item[<span class=\"pl-c1\">2<\/span>], <span class=\"pl-c1\">int<\/span>(item[<span class=\"pl-c1\">3<\/span>])))<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-articles_insert-py-L7\" class=\"blob-num js-line-number\" data-line-number=\"7\"><\/td>\n        <td id=\"file-articles_insert-py-LC7\" class=\"blob-code blob-code-inner js-file-line\">        <\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-articles_insert-py-L8\" class=\"blob-num js-line-number\" data-line-number=\"8\"><\/td>\n        <td id=\"file-articles_insert-py-LC8\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-c\"><span class=\"pl-c\">#<\/span> The for loop above can be replaced with:<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-articles_insert-py-L9\" class=\"blob-num js-line-number\" data-line-number=\"9\"><\/td>\n        <td id=\"file-articles_insert-py-LC9\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-c\"><span class=\"pl-c\">#<\/span> cur.executemany(&quot;&quot;&quot;INSERT IGNORE INTO articles (doi_link, title, abstract, publication_date, citations) <\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-articles_insert-py-L10\" class=\"blob-num js-line-number\" data-line-number=\"10\"><\/td>\n        <td id=\"file-articles_insert-py-LC10\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-c\"><span class=\"pl-c\">#<\/span>                   VALUES (&#39;{}&#39;, &#39;{}&#39;, &#39;{}&#39;, &#39;{}&#39;, {});&quot;&quot;&quot;.format(key, item[0], item[1], item[2], int(item[3])),<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-articles_insert-py-L11\" class=\"blob-num js-line-number\" data-line-number=\"11\"><\/td>\n        <td id=\"file-articles_insert-py-LC11\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-c\"><span class=\"pl-c\">#<\/span>                   [--tuples of the data to be updated--])<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-articles_insert-py-L12\" class=\"blob-num js-line-number\" data-line-number=\"12\"><\/td>\n        <td id=\"file-articles_insert-py-LC12\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-articles_insert-py-L13\" class=\"blob-num js-line-number\" data-line-number=\"13\"><\/td>\n        <td id=\"file-articles_insert-py-LC13\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"><span class=\"pl-c\">#<\/span> Catch any error that might occur and logging it into the logs file.<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-articles_insert-py-L14\" class=\"blob-num js-line-number\" data-line-number=\"14\"><\/td>\n        <td id=\"file-articles_insert-py-LC14\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">except<\/span> (<span class=\"pl-c1\">KeyError<\/span>, <span class=\"pl-c1\">IndexError<\/span>, <span class=\"pl-c1\">TypeError<\/span>) <span class=\"pl-k\">as<\/span> err:<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-articles_insert-py-L15\" class=\"blob-num js-line-number\" data-line-number=\"15\"><\/td>\n        <td id=\"file-articles_insert-py-LC15\" class=\"blob-code blob-code-inner js-file-line\">    logger.error(<span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span>There was an error during articles insertion. The error: <span class=\"pl-c1\">{}<\/span><span class=\"pl-pds\">&quot;<\/span><\/span>.format(err))<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-articles_insert-py-L16\" class=\"blob-num js-line-number\" data-line-number=\"16\"><\/td>\n        <td id=\"file-articles_insert-py-LC16\" class=\"blob-code blob-code-inner js-file-line\">    <\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-articles_insert-py-L17\" class=\"blob-num js-line-number\" data-line-number=\"17\"><\/td>\n        <td id=\"file-articles_insert-py-LC17\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-c\"><span class=\"pl-c\">#<\/span> Save the problematic articles to csv file for future inspection<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-articles_insert-py-L18\" class=\"blob-num js-line-number\" data-line-number=\"18\"><\/td>\n        <td id=\"file-articles_insert-py-LC18\" class=\"blob-code blob-code-inner js-file-line\">    df <span class=\"pl-k\">=<\/span> pd.DataFrame(<span class=\"pl-c1\">list<\/span>(all_articles.values()), <span class=\"pl-v\">index<\/span><span class=\"pl-k\">=<\/span><span class=\"pl-c1\">list<\/span>(all_articles.keys()))<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-articles_insert-py-L19\" class=\"blob-num js-line-number\" data-line-number=\"19\"><\/td>\n        <td id=\"file-articles_insert-py-LC19\" class=\"blob-code blob-code-inner js-file-line\">    df.to_csv(<span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span>Articles.csv<span class=\"pl-pds\">&quot;<\/span><\/span>, <span class=\"pl-v\">sep<\/span><span class=\"pl-k\">=<\/span><span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>,<span class=\"pl-pds\">&#39;<\/span><\/span>)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-articles_insert-py-L20\" class=\"blob-num js-line-number\" data-line-number=\"20\"><\/td>\n        <td id=\"file-articles_insert-py-LC20\" class=\"blob-code blob-code-inner js-file-line\">    <\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-articles_insert-py-L21\" class=\"blob-num js-line-number\" data-line-number=\"21\"><\/td>\n        <td id=\"file-articles_insert-py-LC21\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-c\"><span class=\"pl-c\">#<\/span> This is for debugging. <\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-articles_insert-py-L22\" class=\"blob-num js-line-number\" data-line-number=\"22\"><\/td>\n        <td id=\"file-articles_insert-py-LC22\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-c\"><span class=\"pl-c\">#<\/span> steps is a dict whose keys are the steps in the scraping processand its values are 1 or 0 (succeeded or failed)<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-articles_insert-py-L23\" class=\"blob-num js-line-number\" data-line-number=\"23\"><\/td>\n        <td id=\"file-articles_insert-py-LC23\" class=\"blob-code blob-code-inner js-file-line\">    steps[<span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>Articles<span class=\"pl-pds\">&#39;<\/span><\/span>] <span class=\"pl-k\">=<\/span> <span class=\"pl-c1\">0<\/span><\/td>\n      <\/tr>\n<\/table>\n\n\n  <\/div>\n\n  <\/div>\n<\/div>\n\n      <\/div>\n      <div class=\"gist-meta\">\n        <a href=\"https://gist.github.com/ShaikeA/926bcc05b0ad526c9f3f904c4d43fea4/raw/bbab5deddaefa266fc101ed920b856712c0b46a3/articles_insert.py\" style=\"float:right\">view raw<\/a>\n        <a href=\"https://gist.github.com/ShaikeA/926bcc05b0ad526c9f3f904c4d43fea4#file-articles_insert-py\">articles_insert.py<\/a>\n        hosted with &#10084; by <a href=\"https://github.com\">GitHub<\/a>\n      <\/div>\n    <\/div>\n<\/div>\n')
