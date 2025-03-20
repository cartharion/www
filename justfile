alias h:= help
alias t:= test
alias f:= format
alias l:= lint
alias b:= build


@help:
    just --list

@build:
    pnpm build 

@hooks:
    pnpm hooks 
    
@test:
    pnpm test

@lint:
    pnpm lint

@format:
    pnpm format

# changelog
@patch:
    git add .
    npx changelogen@latest --release --push --patch 

@minor:
    git add .
    npx changelogen@latest --release --push --minor 

@major:
    git add .
    npx changelogen@latest --release --push --major 
