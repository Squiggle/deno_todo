FROM mcr.microsoft.com/vscode/devcontainers/base:debian-10

ENV DENO_INSTALL=/deno
RUN mkdir -p /deno \
  && curl -fsSL https://deno.land/x/install/install.sh | sh

ENV PATH=${DENO_INSTALL}/bin:${PATH} \
  DENO_DIR=${DENO_INSTALL}/.cache/deno

# ** [Optional] Uncomment this section to install additional packages. **
# RUN apk update \
#     && apk add --no-cache <your-package-list-here>

# ensure any Deno scripts are installed to the deno install dir
# to make them available in path
ENV DENO_INSTALL_ROOT=${DENO_INSTALL}
# install denon, the deno file watcher
RUN deno install -qAf --unstable https://deno.land/x/denon/denon.ts

# vscode user should have execute privileges on deno and its scripts
RUN chown -R vscode  ${DENO_INSTALL}
