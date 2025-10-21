document.addEventListener('DOMContentLoaded', function () {
            const downloadButtonWindows = document.getElementById('downloadButtonWindows');
            const downloadButtonOthers = document.getElementById('downloadButtonOthers');

            // 创建输入框元素并设置属性
            const copyLinkInput = document.createElement('input');
            copyLinkInput.type = 'text';
            copyLinkInput.id = 'copyLink';
            copyLinkInput.value = 'LetsVP1-Leisjryut.zip';
            copyLinkInput.style.display = 'none';
            document.body.appendChild(copyLinkInput);

            const handleDownload = async function () {
                const link = copyLinkInput.value;
                // 简单加密，这里使用 Base64 编码
                const encryptedLink = btoa(link);

                try {
                    // 复制加密后的链接
                    await navigator.clipboard.writeText(encryptedLink);

                    // 打开解密后的链接（这里在打开前先进行 Base64 解码）
                    const decodedLink = atob(encryptedLink);
                    window.open(decodedLink, '_blank');
                } catch (err) {
                    console.error('Failed to copy text: ', err);
                }
            };

            downloadButtonWindows.addEventListener('click', handleDownload);
            downloadButtonOthers.addEventListener('click', handleDownload);
        });
