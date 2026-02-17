import os
import argparse
from pathlib import Path
from PIL import Image

def optimize_images(source_dir, dest_dir):
    """
    Converte imagens para WebP, remove metadados e salva no destino.
    """
    source_path = Path(source_dir)
    dest_path = Path(dest_dir)

    # Cria o diretório de destino se não existir
    dest_path.mkdir(parents=True, exist_ok=True)

    extensions = ('.png', '.jpg', '.jpeg', '.bmp', '.tiff', '.webp')
    
    print(f"Buscando imagens em: {source_path}")
    print(f"Destino: {dest_path}")

    files = [f for f in source_path.iterdir() if f.suffix.lower() in extensions]
    
    if not files:
        print("Nenhuma imagem encontrada no diretório de origem.")
        return

    for file_path in files:
        try:
            # Define o novo nome do arquivo
            new_filename = file_path.stem + ".webp"
            output_path = dest_path / new_filename

            # Verifica se o arquivo já existe no destino para pular o processamento
            if output_path.exists():
                print(f"Pulando: {file_path.name} (já existe no destino).")
                continue

            print(f"Processando: {file_path.name}...")
            
            # Abre a imagem
            with Image.open(file_path) as img:
                # Converte para RGBA para garantir consistência e remover metadados complexos
                img = img.convert("RGBA")
                
                # Redimensiona para 512x512 (usando LANCZOS para melhor qualidade)
                img = img.resize((512, 512), Image.Resampling.LANCZOS)
                
                # Salva como WebP sem metadados
                img.save(output_path, "WEBP", quality=80, method=6)
                
            print(f"Salvo em: {output_path}")
        except Exception as e:
            print(f"Erro ao processar {file_path.name}: {e}")

    print("\nProcessamento concluído!")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Otimizador de Imagens para o Sistema ABEA")
    parser.add_argument("--source", "-s", required=True, help="Diretório de origem das imagens")
    parser.add_argument("--dest", "-d", required=True, help="Diretório de destino (ex: items/weapons)")

    args = parser.parse_args()
    
    optimize_images(args.source, args.dest)
