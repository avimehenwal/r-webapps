let w:name = 'tsconfig.json'

" execute 'set makeprg=tsc --project ' . w:name

" set makeprg=tsc\ --project tsconfig.json

" Project specific conf file
let w:p_name = 'r-webapps'
let w:p_CWD = '$HOME/GITHUB/' . w:p_name . '/component-lib'
let w:p_TCRA = w:p_CWD . '/my-app'

" TMUX + Project Commands
let w:t_name = w:p_name . ':' . 'tsc'
let w:t_base = '!tmux new-window -c ' . w:p_CWD . ' -n ' . w:t_name . ' '
let w:t_TCRA_base = '!tmux new-window -c ' . w:p_TCRA . ' -n ' . w:t_name . '-tcra '

" Project Commands
let w:p_dev_cmd = w:t_base . 'npm run build:watch'
let w:p_test_cra = w:t_TCRA_base . 'npm run start'

" Debugging Purposes Only
echomsg w:p_dev_cmd

" Start development server Hotkey <M-0> 
execute 'nnoremap <M-0> :' . w:p_dev_cmd . '<CR>'
execute 'nnoremap <M-5> :' . w:p_test_cra . '<CR>'

" Optimize SVG images using SVGO


