BIN = ./node_modules/.bin
BUILD_DIR = ./public
STYLE_DIR = ./styles

all: build less

install: installdeps 

installdeps:
	-@npm install
	-@$(BIN)/bower install --allow-root

update:
	-@npm update
	-@$(BIN)/bower update --allow-root

build:
	-@$(BIN)/gulp webpack less jsx

less:
	-@$(BIN)/lessc $(STYLE_DIR)/index.less $(BUILD_DIR)/css/main.css --source-map $(CSS_DIR)/main.css

gulpserve:
	-@npm start

gulpprod:
	-@$(BIN)/gulp webpack prodserve

clean:
	-rm -rf public

reset:
	-rm -rf public bower_components node_modules

.PHONY: installdeps install update build less watch serve clean gulpserve